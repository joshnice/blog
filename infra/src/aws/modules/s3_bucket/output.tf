output "blog_front_end_domain_name" {
  value       = aws_s3_bucket.blog-frontend-build.bucket_domain_name
  description = "Domain name of the blog front-end bukcet"
}

output "blog_front_end_domain_name_origin_id" {
  value       = aws_s3_bucket.blog-frontend-build.id
  description = "Id of the blog front-end bucket"
}
