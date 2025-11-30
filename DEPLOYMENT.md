# Deployment Guide

This guide covers deploying your resume app to GitHub Pages and AWS S3.

## GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to main/master

3. **Access your site:**
   - If repo name is `resume`: `https://yourusername.github.io/resume/`
   - For custom domain: Configure in Pages settings

### Option 2: Manual Deployment

```bash
npm install -g gh-pages
npm run deploy:gh
```

## AWS S3 Deployment

### Prerequisites

1. **Install AWS CLI:**
   ```bash
   # Windows (PowerShell)
   winget install Amazon.AWSCLI
   
   # Or download from: https://aws.amazon.com/cli/
   ```

2. **Configure AWS credentials:**
   ```bash
   aws configure
   # Enter your Access Key ID, Secret Access Key, and region
   ```

### Setup S3 Bucket

1. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://your-resume-bucket-name --region us-east-1
   ```

2. **Enable static website hosting:**
   ```bash
   aws s3 website s3://your-resume-bucket-name \
     --index-document index.html \
     --error-document index.html
   ```

3. **Set bucket policy for public read:**
   Create `bucket-policy.json`:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-resume-bucket-name/*"
       }
     ]
   }
   ```
   
   Apply policy:
   ```bash
   aws s3api put-bucket-policy --bucket your-resume-bucket-name --policy file://bucket-policy.json
   ```

### Deploy to S3

**Using PowerShell script:**
```powershell
.\deploy-aws.ps1 -BucketName "your-resume-bucket-name"
```

**Using bash script (Git Bash/WSL):**
```bash
chmod +x deploy-aws.sh
./deploy-aws.sh your-resume-bucket-name
```

**Manual deployment:**
```bash
npm run build
aws s3 sync dist/ s3://your-resume-bucket-name --delete
```

### Optional: CloudFront CDN

1. **Create CloudFront distribution:**
   - Origin: Your S3 bucket
   - Default root object: `index.html`
   - Enable HTTPS

2. **Deploy with CloudFront invalidation:**
   ```powershell
   .\deploy-aws.ps1 -BucketName "your-bucket" -CloudFrontId "E1234567890ABC"
   ```

### GitHub Actions for AWS

1. **Add secrets to GitHub:**
   - Go to repository → **Settings** → **Secrets and variables** → **Actions**
   - Add: `AWS_ACCESS_KEY_ID`
   - Add: `AWS_SECRET_ACCESS_KEY`
   - Add: `CLOUDFRONT_DISTRIBUTION_ID` (optional)

2. **Update workflow:**
   - Edit `.github/workflows/deploy-aws.yml`
   - Set `S3_BUCKET` environment variable

3. **Push to trigger deployment:**
   ```bash
   git push origin main
   ```

## Custom Domain Setup

### GitHub Pages
1. Add `CNAME` file in `public/` folder with your domain
2. Configure DNS: Add CNAME record pointing to `yourusername.github.io`

### AWS S3 + CloudFront
1. Request SSL certificate in AWS Certificate Manager
2. Add domain to CloudFront distribution
3. Configure DNS: Add CNAME/Alias pointing to CloudFront distribution

## Troubleshooting

- **404 errors on refresh:** Ensure S3/CloudFront serves `index.html` for all routes
- **Assets not loading:** Check `base` path in `vite.config.js` matches your deployment path
- **CORS issues:** Configure CORS on S3 bucket if needed

