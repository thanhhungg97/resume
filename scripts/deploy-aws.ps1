# AWS S3 Deployment Script for PowerShell
# Usage: .\deploy-aws.ps1 -BucketName "your-bucket" -CloudFrontId "distribution-id"

param(
    [string]$BucketName = "your-resume-bucket-name",
    [string]$CloudFrontId = "",
    [string]$Region = "us-east-1"
)

Write-Host "Building application..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Deploying to S3 bucket: $BucketName" -ForegroundColor Cyan
aws s3 sync dist/ "s3://$BucketName" --delete --region $Region

if ($LASTEXITCODE -ne 0) {
    Write-Host "S3 deployment failed!" -ForegroundColor Red
    exit 1
}

if ($CloudFrontId) {
    Write-Host "Invalidating CloudFront distribution: $CloudFrontId" -ForegroundColor Cyan
    aws cloudfront create-invalidation --distribution-id $CloudFrontId --paths "/*"
}

Write-Host "`nDeployment complete!" -ForegroundColor Green
Write-Host "Your resume is available at: http://$BucketName.s3-website-$Region.amazonaws.com" -ForegroundColor Yellow

