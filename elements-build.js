const fs = require('fs-extra');
const concat = require('concat');
const shell = require('shelljs');

const projects = ['first-element', 'second-element'];

(async function build() {
    await projects.forEach(async project => {

        shell.exec(`ng build ${project} --prod --output-hashing none`)

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

    })




})();