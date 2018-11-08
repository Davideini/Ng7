# Build Angular Elements & Library

## Prerequsits

1. node.js version 10.12.0 (run: node -v)
1. vs code insiders
1. npm latest (run: npm i -g npm)
1. typescript version 3.1.3 (install inside package.json)
1. angular cli version 7.0.4 (run: npm i -g @angular/cli)
1. live-server for run local server (run: npm i -g live-server)
1. npm-upgrade for upgrade package.json (run: npm i -g npm-upgrade)

## Build & Run

1. run: npm i
1. build lib: ng build elements-lib
1. install lib: npm i -s .\dist\elements-lib\
1. run: node ./elements-build.js
1. run: live-server /elements/