#!/bin/bash

# AWS S3 Deployment Script
# Usage: ./deploy-aws.sh [bucket-name] [cloudfront-distribution-id]

set -e

BUCKET_NAME=${1:-"your-resume-bucket-name"}
CLOUDFRONT_ID=${2:-""}
AWS_REGION=${AWS_REGION:-"us-east-1"}

echo "Building application..."
npm run build

echo "Deploying to S3 bucket: $BUCKET_NAME"
aws s3 sync dist/ s3://$BUCKET_NAME --delete --region $AWS_REGION

if [ -n "$CLOUDFRONT_ID" ]; then
  echo "Invalidating CloudFront distribution: $CLOUDFRONT_ID"
  aws cloudfront create-invalidation \
    --distribution-id $CLOUDFRONT_ID \
    --paths "/*"
fi

echo "Deployment complete!"
echo "Your resume is available at: http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com"

