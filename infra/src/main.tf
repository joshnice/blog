module "aws" {
  source     = "./aws"
  aws_region = var.aws_region
}

module "cloudflare" {
  source                   = "./cloudflare"
  cloudflare_account_id    = var.cloudflare_account_id
  cloudflare_api_token     = var.cloudflare_api_token
  cloudflare_database_name = "blog-database"
}
