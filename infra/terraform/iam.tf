data "aws_iam_policy_document" "statements_writer" {
  statement {
    actions   = ["*"]
    resources = [aws_s3_bucket.statements.arn]
  }
}
