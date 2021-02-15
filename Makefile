S3_BUCKET = library-api-vue-ui

serve:
	@npm run serve

build:
	@npm run build

deploy: build
	@aws s3 sync ./dist s3://$(S3_BUCKET)
