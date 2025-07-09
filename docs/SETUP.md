# Portfolio Project Setup Guide

This guide will help you set up the complete portfolio project with React, Docker, CI/CD, and Azure infrastructure.

## 🚀 Quick Start

### 1. Prerequisites

Install the following tools:

- **Node.js 18+**: [Download here](https://nodejs.org/)
- **Docker Desktop**: [Download here](https://www.docker.com/products/docker-desktop/)
- **Azure CLI**: [Install guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- **Terraform**: [Download here](https://www.terraform.io/downloads)
- **Git**: [Download here](https://git-scm.com/)

### 2. Clone and Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install frontend dependencies
cd frontend
npm install
```

### 3. Local Development

```bash
# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

### 4. Docker Development

```bash
# Build and run with Docker Compose
cd ..
docker-compose -f docker/docker-compose.yml up --build

# Or build manually
docker build -f docker/Dockerfile -t portfolio:latest .
docker run -p 8080:80 portfolio:latest
```

## 🔧 Configuration

### Frontend Configuration

The React app uses:
- **Vite** for fast development and building
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Framer Motion** for animations

### Docker Configuration

- **Multi-stage build** for optimized production images
- **nginx** for serving static files
- **Health checks** for monitoring
- **Security headers** for protection

### Azure Infrastructure

- **App Service Plan** for hosting
- **Web App** for the application
- **Resource Group** for organization
- **Managed by Terraform** for infrastructure as code

## 🚀 Deployment

### 1. Azure Setup

```bash
# Login to Azure
az login

# Set subscription (if you have multiple)
az account set --subscription <subscription-id>
```

### 2. Terraform Deployment

```bash
# Navigate to infrastructure directory
cd infrastructure

# Copy and configure variables
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars with your values

# Initialize Terraform
terraform init

# Plan deployment
terraform plan

# Apply configuration
terraform apply
```

### 3. CI/CD Setup

1. **Create GitHub repository** and push your code
2. **Set up GitHub Secrets**:
   - `AZURE_CREDENTIALS`: Service principal credentials
3. **Enable GitHub Actions** in your repository
4. **Push to main branch** to trigger deployment

## 📁 Project Structure

```
portfolio/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── utils/          # Utility functions
│   │   └── types/          # TypeScript types
│   ├── public/             # Static assets
│   └── package.json        # Dependencies
├── infrastructure/          # Terraform configurations
│   ├── main.tf            # Main infrastructure
│   ├── variables.tf       # Variable definitions
│   └── outputs.tf         # Output values
├── docker/                 # Docker configurations
│   ├── Dockerfile         # Production build
│   ├── nginx.conf         # Web server config
│   └── docker-compose.yml # Local development
├── .github/workflows/      # CI/CD pipelines
│   └── ci-cd.yml         # Main workflow
└── docs/                  # Documentation
```

## 🔍 Testing

### Frontend Tests

```bash
# Run unit tests
npm run test

# Run tests with UI
npm run test:ui

# Run linting
npm run lint
```

### Infrastructure Tests

```bash
# Validate Terraform configuration
terraform validate

# Check for security issues
terraform plan -detailed-exitcode
```

## 🛠 Troubleshooting

### Common Issues

1. **Port conflicts**: Change ports in docker-compose.yml
2. **Build failures**: Check Node.js version and dependencies
3. **Azure authentication**: Ensure proper service principal setup
4. **Terraform errors**: Check Azure subscription and permissions

### Debug Commands

```bash
# Check Docker containers
docker ps -a

# View application logs
docker logs <container-name>

# Check Azure resources
az resource list --resource-group <resource-group-name>

# Validate Terraform
terraform validate
```

## 📚 Next Steps

1. **Customize the portfolio** with your content
2. **Add more features** like blog, contact form, etc.
3. **Set up monitoring** with Application Insights
4. **Add custom domain** and SSL certificate
5. **Implement caching** and CDN for better performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. 