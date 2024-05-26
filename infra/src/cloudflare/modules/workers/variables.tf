variable "cloudflare_account_id" {
  type        = string
  sensitive   = true
  description = "Cloudflare account id"
}

variable "api_blog_worker_name" {
  type        = string
  description = "Name of the worker which is used as the blog api"
}

variable "api_blog_database_name" {
  type        = string
  description = "Name of the database which is used as the blog api"
}


variable "api_blog_database_id" {
  type        = string
  description = "Id of the database which is used as the blog api"
}
