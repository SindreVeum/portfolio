# Infrastructure Setup

This directory contains Terraform configurations for deploying the portfolio application to Azure.

## Prerequisites

1. **Azure CLI** installed and authenticated
2. **Terraform** installed (version >= 1.0)
3. **Azure subscription** with appropriate permissions

## Quick Start

1. **Copy the example variables file:**
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. **Update the variables in `terraform.tfvars`** with your specific values

3. **Initialize Terraform:**
   ```bash
   terraform init
   ```

4. **Plan the deployment:**
   ```bash
   terraform plan
   ```

5. **Apply the configuration:**
   ```bash
   terraform apply
   ```

## Resources Created

- **Resource Group**: Contains all resources for the portfolio
- **App Service Plan**: Hosting plan for the web application
- **Web App**: The actual web application running in Azure
- **Application Insights**: Monitoring and logging (optional)

## Configuration

### Variables

- `resource_group_name`: Name of the Azure resource group
- `location`: Azure region for deployment
- `app_name`: Name of the web application
- `environment`: Environment name (production, staging, etc.)

### Outputs

- `app_url`: URL of the deployed application
- `resource_group_name`: Name of the resource group
- `web_app_name`: Name of the web app

## Cleanup

To destroy all resources:
```bash
terraform destroy
```

## Security Notes

- Store sensitive variables in Azure Key Vault
- Use managed identities where possible
- Enable HTTPS and security headers
- Regular security updates and monitoring 