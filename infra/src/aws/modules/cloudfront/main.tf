resource "aws_cloudfront_distribution" "s3_distribution" {

  origin {
    domain_name = var.blog_front_bucket_domain_name
    origin_id   = var.blog_front_bucket_id
    s3_origin_config {
      origin_access_identity = ""
    }
  }

  default_cache_behavior {
    allowed_methods        = ["HEAD", "GET", "OPTIONS"]
    cached_methods         = ["HEAD", "GET", "OPTIONS"]
    viewer_protocol_policy = "allow-all"
    target_origin_id       = var.blog_front_bucket_id
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
  }

  custom_error_response {
    error_code         = 404
    response_page_path = "/index.html"
    response_code      = 200
  }

  custom_error_response {
    error_code         = 403
    response_page_path = "/index.html"
    response_code      = 200
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }

  enabled             = true
  default_root_object = "index.html"
  price_class         = "PriceClass_All"
}
