terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = var.region
}

module "s3" {
  source                      = "./modules/s3_bucket"
  front_end_build_bucket_name = "blog-frontend-build"
  private_cdn_bucket_name     = "blog-private-cdn"
  public_cdn_bucket_name      = "blog-public-cdn"
}

module "aws_cloudfront_distribution" {
  source                        = "./modules/cloudfront"
  blog_front_bucket_domain_name = module.s3.blog_front_end_domain_name
  blog_front_bucket_id          = module.s3.blog_front_end_domain_name_origin_id
}
