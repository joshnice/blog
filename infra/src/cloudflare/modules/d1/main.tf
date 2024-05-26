terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.2.0"
}

resource "cloudflare_d1_database" "blog-database" {
  account_id = var.cloudflare_account_id
  name       = var.d1_database_name
}
