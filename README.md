# Personal Portfolio Dashboard

A modern, responsive personal portfolio built with React, deployed on Azure with CI/CD pipeline.

> **Note:** Always run `npm run lint`, `npm run test`, and `npm run build` from the `frontend/` directory, not the project root. This ensures ESLint and other tools resolve configs and plugins correctly.

## 🚀 Features

- **Modern React Frontend** with TypeScript
- **Docker Containerization** for consistent deployments
- **Azure Infrastructure** managed with Terraform
- **CI/CD Pipeline** with GitHub Actions
- **Responsive Design** for all devices
- **Real-time Updates** and dynamic content

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Containerization**: Docker
- **Infrastructure**: Azure (Terraform)
- **CI/CD**: GitHub Actions
- **Database**: Azure Cosmos DB (optional)

## 📁 Project Structure

```
portfolio/
├── frontend/                 # React application
├── infrastructure/           # Terraform configurations
├── docker/                  # Docker configurations
├── .github/                 # GitHub Actions workflows
├── docs/                    # Documentation
└── scripts/                 # Utility scripts
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Start development**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Deploy to Azure**
   ```bash
   cd infrastructure
   terraform init
   terraform plan
   terraform apply
   ```

## 📋 Prerequisites

- Node.js 18+
- Docker Desktop
- Azure CLI
- Terraform
- Git

## 🔧 Development

See individual README files in each directory for detailed setup instructions.

## 📄 License

MIT License - see LICENSE file for details. 