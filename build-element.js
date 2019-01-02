const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/my-app/runtime.js',
        // './dist/my-app/polyfills.js',
        './dist/my-app/scripts.js',
        './dist/my-app/main.js',
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/weather-element.js');

    await fs.copyFile('./dist/my-app/styles.css', 'elements/styles.css')

//     await fs.copy('./dist/my-app/assets/', 'elements/assets/' )
    
})()