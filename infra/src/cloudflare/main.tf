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
  source                 = "./modules/workers"
  api_blog_worker_name   = "api-blog"
  cloudflare_account_id  = var.cloudflare_account_id
  api_blog_database_id   = module.d1.blog_database_id
  api_blog_database_name = var.cloudflare_database_name
}

module "d1" {
  source                = "./modules/d1"
  cloudflare_account_id = var.cloudflare_account_id
  d1_database_name      = var.cloudflare_database_name
}
