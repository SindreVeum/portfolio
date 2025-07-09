# CI/CD Setup with GitHub Actions

> **Troubleshooting Tip:** Always run `npm run lint`, `npm run test`, and `npm run build` from the `frontend/` directory, not the project root. This avoids ESLint config resolution errors (see https://stackoverflow.com/questions/65675771/eslint-couldnt-find-the-config-prettier-typescript-eslint-after-relocating).

This guide explains how to set up a complete CI/CD pipeline using GitHub Actions for your portfolio project.

## 🎯 What This CI/CD Pipeline Does

### 1. **Test Job** (`test`)
- Runs on every push and pull request
- Installs dependencies
- Runs linting (ESLint)
- Runs tests (Vitest)
- Builds the application
- Ensures code quality before merging

### 2. **Build and Push Job** (`build-and-push`)
- Runs only on pushes to `main` branch
- Creates Docker image
- Pushes to GitHub Container Registry
- Uses caching for faster builds

### 3. **Deploy Preview Job** (`deploy-preview`)
- Optional GitHub Pages deployment
- Creates a live preview of your portfolio

## 🚀 Quick Setup

### Step 1: Create GitHub Repository

1. **Create a new repository** on GitHub
2. **Push your code** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Actions

1. **Go to your repository** on GitHub
2. **Navigate to Actions tab**
3. **The workflow will automatically run** on your first push

### Step 3: Configure Repository Settings

1. **Go to Settings → Actions → General**
2. **Enable "Read and write permissions"** for Actions
3. **Save the changes**

## 📋 Workflow Breakdown

### Trigger Conditions
```yaml
on:
  push:
    branches: [ main, develop ]  # Runs on pushes to main/develop
  pull_request:
    branches: [ main ]           # Runs on PRs to main
```

### Environment Variables
```yaml
env:
  REGISTRY: ghcr.io                    # GitHub Container Registry
  IMAGE_NAME: ${{ github.repository }} # Your repo name
```

### Job Dependencies
```yaml
jobs:
  test:                    # Runs first
  build-and-push:         # Waits for test to complete
    needs: test
  deploy-preview:         # Waits for build to complete
    needs: build-and-push
```

## 🔧 Configuration Details

### Node.js Setup
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'npm'                    # Caches node_modules
    cache-dependency-path: frontend/package-lock.json
```

### Docker Build with Caching
```yaml
- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v3

- name: Build and push Docker image
  uses: docker/build-push-action@v5
  with:
    context: .
    file: ./docker/Dockerfile
    push: true
    cache-from: type=gha          # Uses GitHub Actions cache
    cache-to: type=gha,mode=max
```

### GitHub Container Registry
```yaml
- name: Log in to GitHub Container Registry
  uses: docker/login-action@v3
  with:
    registry: ghcr.io
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```

## 🐳 Docker Image Management

### Image Tags
The workflow automatically creates these tags:
- `latest` - Latest version from main branch
- `main` - Latest from main branch
- `sha-abc123` - Specific commit hash
- `pr-123` - Pull request builds

### Accessing Your Images
```bash
# Pull your image
docker pull ghcr.io/YOUR_USERNAME/YOUR_REPO_NAME:latest

# Run locally
docker run -p 8080:80 ghcr.io/YOUR_USERNAME/YOUR_REPO_NAME:latest
```

## 📊 Monitoring and Debugging

### Viewing Workflow Runs
1. **Go to Actions tab** in your repository
2. **Click on a workflow run** to see details
3. **Expand job steps** to see logs

### Common Issues and Solutions

#### 1. **Permission Denied**
```yaml
permissions:
  contents: read
  packages: write
```

#### 2. **Cache Miss**
- Check `cache-dependency-path` points to correct file
- Ensure `package-lock.json` is committed

#### 3. **Build Failures**
- Check Dockerfile syntax
- Verify all dependencies are in `package.json`
- Review build logs for specific errors

## 🔍 Testing Your Pipeline

### Manual Trigger
1. **Go to Actions tab**
2. **Click on "CI/CD Pipeline"**
3. **Click "Run workflow"**
4. **Select branch and run**

### Local Testing
```bash
# Test the same commands locally
cd frontend
npm ci
npm run lint
npm run test
npm run build

# Test Docker build
docker build -f docker/Dockerfile -t test-image .
```

## 🚀 Advanced Features

### Conditional Deployments
```yaml
if: github.event_name == 'push' && github.ref == 'refs/heads/main'
```

### Environment Protection
```yaml
environment: production
```

### Manual Approvals
```yaml
jobs:
  deploy:
    environment:
      name: production
      url: https://your-app.com
```

## 📈 Best Practices

### 1. **Branch Strategy**
- `main` - Production-ready code
- `develop` - Development branch
- Feature branches for new features

### 2. **Commit Messages**
```
feat: add new portfolio section
fix: resolve build error
docs: update README
```

### 3. **Testing**
- Always run tests before deployment
- Use linting to maintain code quality
- Build verification ensures deployability

### 4. **Security**
- Use `GITHUB_TOKEN` for authentication
- Don't commit secrets to repository
- Use environment secrets for sensitive data

## 🔄 Workflow Lifecycle

1. **Code Push** → Triggers workflow
2. **Test Job** → Validates code quality
3. **Build Job** → Creates Docker image
4. **Push Job** → Stores image in registry
5. **Deploy Job** → Deploys to target environment

## 📚 Learning Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Build Action](https://github.com/docker/build-push-action)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [GitHub Pages](https://pages.github.com/)

## 🎯 Next Steps

1. **Set up your GitHub repository**
2. **Push your code** to trigger the workflow
3. **Monitor the Actions tab** to see the pipeline in action
4. **Customize the workflow** for your specific needs
5. **Add more jobs** as your project grows

## 🤝 Troubleshooting

### Common Commands
```bash
# Check workflow status
gh run list

# View workflow logs
gh run view <run-id>

# Rerun failed workflow
gh run rerun <run-id>
```

### Debug Tips
- Check the "Actions" tab for detailed logs
- Use `echo` statements in workflow for debugging
- Test commands locally before adding to workflow
- Use `needs` to control job dependencies

This CI/CD setup gives you a solid foundation for automated testing, building, and deployment. As you learn more, you can add additional features like staging environments, automated testing, and more sophisticated deployment strategies. 