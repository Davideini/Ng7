const fs = require('fs-extra');
const concat = require('concat');
const shell = require('shelljs');
const { camelCase } = require('change-case');
const replace = require('replace-in-file');

const projects = ['first-element', 'second-element'];

(async function build() {
    await projects.forEach(async project => {

        //--prod  --preserve-symlinks
        shell.exec(`ng build ${project} --prod  --aot --extract-css --output-hashing none`)

        const files = [
            `./dist/${project}/runtime.js`,
            `./dist/${project}/polyfills.js`,
            `./dist/${project}/scripts.js`,
            `./dist/${project}/main.js`
        ];

        shell.rm('-rf', `elements/${project}`);

        await fs.ensureDir(`elements/${project}`);
        await concat(files, `elements/${project}/${project}.js`);
        await fs.copyFile(
            `./dist/${project}/styles.css`,
            `elements/${project}/styles.css`
        );

        await replace({
            files: `elements/${project}/${project}.js`,
            from: /webpackJsonp/g,
            to: `webpackJsonp_${camelCase(project)}`
          })

    })




})();