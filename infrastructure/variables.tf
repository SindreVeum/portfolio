variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
  default     = "portfolio-rg"
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "West Europe"
}

variable "app_name" {
  description = "Name of the application"
  type        = string
  default     = "portfolio-app"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "docker_image" {
  description = "Docker image to deploy"
  type        = string
  default     = "your-registry.azurecr.io/portfolio:latest"
}

variable "container_registry_url" {
  description = "Azure Container Registry URL"
  type        = string
  default     = ""
}

variable "container_registry_username" {
  description = "Azure Container Registry username"
  type        = string
  default     = ""
  sensitive   = true
}

variable "container_registry_password" {
  description = "Azure Container Registry password"
  type        = string
  default     = ""
  sensitive   = true
} 