output "blog_database_id" {
  value       = cloudflare_d1_database.blog-database.id
  description = "Id of the D1 database"
}
