terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.2.0"
}

resource "cloudflare_worker_script" "blog-api" {
  account_id = var.cloudflare_account_id
  name       = var.api_blog_worker_name
  content    = file("${path.module}/script.mjs")
  module     = true
}
