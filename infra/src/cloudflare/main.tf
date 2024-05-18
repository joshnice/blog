terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.2.0"
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

module "worker" {
  source = "./modules/workers"
  providers = {
    cloudflare = cloudflare
  }
  api_blog_worker_name  = "api-blog"
  cloudflare_account_id = var.cloudflare_account_id
}
