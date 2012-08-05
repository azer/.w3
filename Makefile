build:
	chromium --pack-extension=chrome-ext --pack-extension-key=chrome-ext.pem
	mv chrome-ext.crx build/w3.crx

install:
	cp w3d /usr/bin/w3d

install-arch:
	@echo -n "Type the name of your system user (root, joe, etc..): "
	@read username; \
	echo "W3FILES_USER=\""$$username"\"" > /etc/conf.d/w3files.conf

	@$(MAKE) install -s
	cp arch/rc.d /etc/rc.d/w3d

.PHONY: build
