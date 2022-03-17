const { exec } = require('child_process');
const { existsSync } = require('fs');
const { normalize } = require('path');
const hasbin = require('hasbin');

export default function jigsaw() {
    const bin = existsSync('./vendor/bin/jigsaw') ? normalize('./vendor/bin/jigsaw') : hasbin('jigsaw', (result) => {
        if (result) return 'jigsaw';
        console.error('Could not find Jigsaw; please install it with Composer.');
        process.exit(1);
    });

    const jigsaw = (env) => exec(`${bin} build -q ${env}`, (error, stdout, stderr) => {
        console.log('Building Jigsaw');

        error ? console.warn(`Error building Jigsaw site:\n${stderr}`) : console.log(stdout);
    });

    return {
        name: 'build-jigsaw',
        async closeBuild() {
            jigsaw('production');
        },
        async handleHotUpdate({ file }) {
            if (file.includes('build_')) {
                return;
            }

            jigsaw('local');
        },
    }
}

