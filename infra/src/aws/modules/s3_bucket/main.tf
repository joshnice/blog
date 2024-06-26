resource "aws_s3_bucket" "blog-frontend-build" {
  bucket        = var.front_end_build_bucket_name
  force_destroy = true
}

resource "aws_s3_bucket_website_configuration" "blog-frontend-build" {
  bucket = var.front_end_build_bucket_name

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "blog-frontend-build" {
  bucket                  = var.front_end_build_bucket_name
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}


resource "aws_s3_bucket_policy" "blog-frontend-build" {
  bucket     = var.front_end_build_bucket_name
  depends_on = [aws_s3_bucket_public_access_block.blog-frontend-build, aws_s3_bucket.blog-frontend-build, aws_s3_bucket_website_configuration.blog-frontend-build]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action = [
          "s3:GetObject"
        ]
        Resource = [
          "${aws_s3_bucket.blog-frontend-build.arn}/*"
        ]
      }
    ]
  })
}

resource "aws_s3_bucket" "blog-private-cdn" {
  bucket = var.private_cdn_bucket_name
}

resource "aws_s3_bucket" "blog-public-cdn" {
  bucket = var.public_cdn_bucket_name
}

resource "aws_s3_bucket_public_access_block" "blog-public-cdn" {
  bucket                  = var.public_cdn_bucket_name
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
