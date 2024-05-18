variable "aws_region" {
  type        = string
  description = "Region of where the AWS resources will be created"
  sensitive   = true
}

variable "cloudflare_api_token" {
  type        = string
  description = "Api token for cloudflare"
  sensitive   = true
}

variable "cloudflare_account_id" {
  type        = string
  description = "Account id for cloudflare"
  sensitive   = true
}
