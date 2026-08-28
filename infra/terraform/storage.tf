resource "aws_s3_bucket" "statements" {
  bucket = "loxley-merchant-statements"
}

resource "aws_s3_bucket_acl" "statements" {
  bucket = aws_s3_bucket.statements.id
  acl    = "public-read"
}
