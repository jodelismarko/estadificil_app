const fs = require("fs");
const path = require('path');

const moduleContents = [{
    name: "react-native-video",
    contents: [{
        source: "__devtools__/module_fix/react-native-video/ReactNativeVideoCPP/",
        dest: "node_modules/react-native-video/windows/"
    }]
}];

function logError(error) {
    console.error('\x1b[31m%s\x1b[0m', `${error}`);
}

function copyFileSync(source, target) {
    console.log(`Copying file "${target}"`);

    var targetFile = target;

    try {
        //if target is a directory a new file with the same name will be created
        if (fs.existsSync(target)) {
            if (fs.lstatSync(target).isDirectory()) {
                targetFile = path.join(target, path.basename(source));
            }
        }

        fs.copyFileSync(source, targetFile);
    } catch (error) {
        logError(`Error copying file "${target}": ${error}`);
    }
}

function copyFolderRecursiveSync(source, target) {
    var files = [];

    //check if folder needs to be created or integrated
    var targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }

    //copy
    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            var curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder);
            } else {
                copyFileSync(curSource, targetFolder);
            }
        });
    }
}

moduleContents.forEach(module => {
    console.log(`Fixing module "${module.name}"`);

    try {
        module.contents.forEach(entry => {
            if (fs.lstatSync(entry.source).isDirectory()) {
                copyFolderRecursiveSync(entry.source, entry.dest);
            } else {
                copyFileSync(entry.source, entry.dest);
            }
        });
    } catch (error) {
        logError(`Error fixing for module "${module.name}": ${error}`);
    }
});