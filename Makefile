.PHONY: build

build:
	mkdir -p build
	rm -f build/extension.zip
	zip -r build/extension.zip src/
