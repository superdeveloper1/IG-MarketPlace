param(
    [switch]$CheckLambdaDeps
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

    return ""
}

Write-Host "Checking local prerequisites..." -ForegroundColor Cyan

$nodePath = Resolve-ToolCommand -Name "node"
$npmPath = Resolve-ToolCommand -Name "npm"
$awsPath = Resolve-ToolCommand -Name "aws" -FallbackPaths @(
    "C:\Program Files\Amazon\AWSCLIV2\aws.exe"
)
$samPath = Resolve-ToolCommand -Name "sam" -FallbackPaths @(
    "C:\Program Files\Amazon\AWSSAMCLI\bin\sam.cmd"
)

$nodeOk = -not [string]::IsNullOrWhiteSpace($nodePath)
$npmOk = -not [string]::IsNullOrWhiteSpace($npmPath)
$awsOk = -not [string]::IsNullOrWhiteSpace($awsPath)
$samOk = -not [string]::IsNullOrWhiteSpace($samPath)

if ($nodeOk) {
    Write-Host ("node: " + (& $nodePath -v)) -ForegroundColor Green
} else {
    Write-Host "node: missing" -ForegroundColor Yellow
}

if ($npmOk) {
    Write-Host ("npm: " + (& $npmPath -v)) -ForegroundColor Green
} else {
    Write-Host "npm: missing" -ForegroundColor Yellow
}

if ($awsOk) {
    Write-Host ("aws: " + (& $awsPath --version)) -ForegroundColor Green
} else {
    Write-Host "aws: missing" -ForegroundColor Yellow
}

if ($samOk) {
    Write-Host ("sam: " + (& $samPath --version)) -ForegroundColor Green
} else {
    Write-Host "sam: missing" -ForegroundColor Yellow
}

if ($CheckLambdaDeps) {
    $lambdaDir = Join-Path $PSScriptRoot "..\backend\aws-state-api"
    if (Test-Path $lambdaDir) {
        $hasNodeModules = Test-Path (Join-Path $lambdaDir "node_modules")
        if ($hasNodeModules) {
            Write-Host "lambda deps: installed" -ForegroundColor Green
        } else {
            Write-Host "lambda deps: missing (run npm install in backend/aws-state-api)" -ForegroundColor Yellow
        }
    }
}

if (-not ($nodeOk -and $npmOk -and $awsOk -and $samOk)) {
    Write-Host ""
    Write-Host "Missing required tools detected." -ForegroundColor Yellow
    Write-Host "Install references:" -ForegroundColor Yellow
    Write-Host "  AWS CLI: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    Write-Host "  AWS SAM CLI: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html"
    exit 1
}

Write-Host "All required tools are available." -ForegroundColor Green
