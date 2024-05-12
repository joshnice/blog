variable "front_end_build_bucket_name" {
  type        = string
  description = "Name of the bucket containing the frontend build"
}

variable "public_cdn_bucket_name" {
  type        = string
  description = "Name of the bucket which is the public cdn"
}

variable "private_cdn_bucket_name" {
  type        = string
  description = "Name of the bucket which is the private cdn"
}
