output "app_url" {
  description = "URL of the deployed application"
  value       = "https://${azurerm_linux_web_app.main.default_hostname}"
}

output "resource_group_name" {
  description = "Name of the resource group"
  value       = azurerm_resource_group.main.name
}

output "app_service_plan_name" {
  description = "Name of the App Service Plan"
  value       = azurerm_service_plan.main.name
}

output "web_app_name" {
  description = "Name of the Web App"
  value       = azurerm_linux_web_app.main.name
}

output "web_app_id" {
  description = "ID of the Web App"
  value       = azurerm_linux_web_app.main.id
} 