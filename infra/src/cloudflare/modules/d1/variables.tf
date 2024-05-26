variable "cloudflare_account_id" {
  type        = string
  description = "Account id for cloudflare"
  sensitive   = true
}

variable "d1_database_name" {
  type        = string
  description = "Name of the database"
}
