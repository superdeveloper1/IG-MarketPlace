param(
    [string]$StackName = "ig-marketplace-backend",
    [string]$Region = "us-east-1",
    [string]$StageName = "prod",
    [string]$CorsOrigin = "*",
    [switch]$Guided
)

$ErrorActionPreference = "Stop"

function Resolve-ToolCommand {
    param(
        [Parameter(Mandatory = $true)][string]$Name,
        [string[]]$FallbackPaths = @()
    )

    $command = Get-Command $Name -ErrorAction SilentlyContinue
    if ($command) {
        return [string]$command.Source
    }

    foreach ($candidate in $FallbackPaths) {
        if ([string]::IsNullOrWhiteSpace($candidate)) { continue }
        if (Test-Path $candidate) {
            return [string]$candidate
        }
    }

    throw "Required tool '$Name' not found in PATH or fallback paths."
}

function Invoke-External {
    param(
        [Parameter(Mandatory = $true)][string]$Command,
        [string[]]$Arguments = @()
    )
    & $Command @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw ("Command failed (" + $Command + ") with exit code " + $LASTEXITCODE)
    }
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$lambdaDir = Join-Path $repoRoot "backend\aws-state-api"
$templatePath = Join-Path $repoRoot "infra\aws-sam\template.yaml"
$samCmd = Resolve-ToolCommand -Name "sam" -FallbackPaths @(
    "C:\Program Files\Amazon\AWSSAMCLI\bin\sam.cmd"
)

Write-Host "Step 1/4: checking prerequisites..." -ForegroundColor Cyan
& (Join-Path $PSScriptRoot "check-aws-tooling.ps1") -CheckLambdaDeps

Push-Location $lambdaDir
try {
    Write-Host "Step 2/4: installing Lambda dependencies..." -ForegroundColor Cyan
    Invoke-External -Command "npm" -Arguments @("install")
} finally {
    Pop-Location
}

Push-Location $repoRoot
try {
    Write-Host "Step 3/4: SAM build..." -ForegroundColor Cyan
    Invoke-External -Command $samCmd -Arguments @(
        "build",
        "--template-file", [string]$templatePath
    )

    Write-Host "Step 4/4: SAM deploy..." -ForegroundColor Cyan
    if ($Guided) {
        Invoke-External -Command $samCmd -Arguments @(
            "deploy",
            "--guided",
            "--stack-name", $StackName,
            "--region", $Region,
            "--parameter-overrides", ("StageName=" + $StageName), ("CorsOrigin=" + $CorsOrigin)
        )
    } else {
        Invoke-External -Command $samCmd -Arguments @(
            "deploy",
            "--stack-name", $StackName,
            "--region", $Region,
            "--capabilities", "CAPABILITY_IAM",
            "--resolve-s3",
            "--no-confirm-changeset",
            "--parameter-overrides", ("StageName=" + $StageName), ("CorsOrigin=" + $CorsOrigin)
        )
    }

    Write-Host ""
    Write-Host "Deployment complete. Next:" -ForegroundColor Green
    Write-Host "  1) Get ApiBaseUrl from stack outputs"
    Write-Host "  2) Run scripts\\set-cloud-config.ps1 -ApiBaseUrl <url> -Enable"
} finally {
    Pop-Location
}
