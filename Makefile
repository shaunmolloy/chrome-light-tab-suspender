.PHONY: build

build:
	mkdir -p build
	rm -f build/extension.zip
	cd src && zip -r ../build/extension.zip ./*
