resource "aws_s3_bucket" "blog-frontend-build" {
  bucket = var.front_end_build_bucket_name
}

resource "aws_s3_bucket_website_configuration" "blog-frontend-build" {
  bucket = aws_s3_bucket.blog-frontend-build.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "blog-frontend-build" {
  bucket                  = aws_s3_bucket.blog-frontend-build.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}


resource "aws_s3_bucket_policy" "blog-frontend-build" {
  bucket     = aws_s3_bucket.blog-frontend-build.id
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
