resource "cloudflare_worker_script" "blog-api" {
  account_id = var.cloudflare_account_id
  name       = var.api_blog_worker_name
  content    = ""
  provider   = cloudflare
}
