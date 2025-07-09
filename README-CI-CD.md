# 🚀 CI/CD Quick Start Guide

This guide will help you set up CI/CD with GitHub Actions for your portfolio project.

## 📋 Prerequisites

- GitHub account
- Git installed locally
- Your portfolio project ready

## 🎯 What You'll Learn

1. **GitHub Actions** - Automated workflows
2. **Docker Containerization** - Building and pushing images
3. **GitHub Container Registry** - Storing your Docker images
4. **Automated Testing** - Running tests on every push
5. **Continuous Deployment** - Optional GitHub Pages deployment

## 🚀 Step-by-Step Setup

### Step 1: Create GitHub Repository

1. **Go to GitHub** and create a new repository
2. **Name it** something like `portfolio-project`
3. **Make it public** (for free GitHub Container Registry access)

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit with CI/CD setup"

# Set the main branch
git branch -M main

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Actions

1. **Go to your repository** on GitHub
2. **Click the "Actions" tab**
3. **You should see** the "CI/CD Pipeline" workflow
4. **Click "Run workflow"** to test it manually

### Step 4: Configure Permissions

1. **Go to Settings → Actions → General**
2. **Under "Workflow permissions"** select "Read and write permissions"
3. **Save the changes**

## 🔍 What Happens When You Push

### 1. **Test Job** (Runs on every push)
- ✅ Installs Node.js dependencies
- ✅ Runs ESLint for code quality
- ✅ Runs Vitest for unit tests
- ✅ Builds the application
- ✅ Ensures everything works

### 2. **Build Job** (Runs only on main branch)
- 🐳 Creates Docker image
- 📦 Pushes to GitHub Container Registry
- 🏷️ Tags with version and commit hash

### 3. **Deploy Job** (Optional)
- 🌐 Deploys to GitHub Pages
- 📱 Creates live preview of your portfolio

## 📊 Monitoring Your Pipeline

### View Workflow Runs
1. **Go to Actions tab**
2. **Click on "CI/CD Pipeline"**
3. **See all your workflow runs**
4. **Click any run** to see detailed logs

### Understanding the Logs
- ✅ **Green checkmarks** = Success
- ❌ **Red X marks** = Failure
- ⏳ **Yellow dots** = Running

## 🐳 Using Your Docker Images

After a successful build, you can pull and run your image:

```bash
# Pull your image
docker pull ghcr.io/YOUR_USERNAME/YOUR_REPO_NAME:latest

# Run it locally
docker run -p 8080:80 ghcr.io/YOUR_USERNAME/YOUR_REPO_NAME:latest

# Visit http://localhost:8080
```

## 🔧 Customizing Your Pipeline

### Adding New Tests
1. **Create test files** in `frontend/src/test/`
2. **Push your changes**
3. **Watch the pipeline run** automatically

### Adding New Dependencies
1. **Install with npm** in the frontend directory
2. **Commit package.json and package-lock.json**
3. **Push to trigger rebuild**

### Modifying the Workflow
1. **Edit `.github/workflows/ci-cd.yml`**
2. **Commit and push**
3. **See changes in the Actions tab**

## 🚨 Troubleshooting

### Common Issues

#### 1. **Permission Denied**
- Check repository settings → Actions → General
- Ensure "Read and write permissions" is enabled

#### 2. **Build Failures**
- Check the Actions tab for error logs
- Test commands locally first
- Ensure all dependencies are in package.json

#### 3. **Docker Build Issues**
- Check Dockerfile syntax
- Ensure .dockerignore is configured
- Verify all files are committed

### Debug Commands
```bash
# Test locally what the pipeline does
cd frontend
npm ci
npm run lint
npm run test
npm run build

# Test Docker build
docker build -f docker/Dockerfile -t test-image .
```

## 🎯 Learning Outcomes

After completing this setup, you'll understand:

- ✅ **GitHub Actions** workflow structure
- ✅ **Docker** image building and registry management
- ✅ **Automated testing** and quality checks
- ✅ **Continuous Integration** best practices
- ✅ **Container registry** usage
- ✅ **Workflow monitoring** and debugging

## 📚 Next Steps

1. **Customize your portfolio** content
2. **Add more tests** to improve coverage
3. **Explore GitHub Pages** for live previews
4. **Learn about environments** and secrets
5. **Add deployment to other platforms**

## 🆘 Need Help?

- **Check the Actions tab** for detailed error messages
- **Review the logs** step by step
- **Test commands locally** before pushing
- **Use the troubleshooting section** above

Your CI/CD pipeline is now ready to automatically test, build, and deploy your portfolio! 🎉 