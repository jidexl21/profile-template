const fs = require("fs");
const path = require("path");

function ensureExists(path, mask, cb) {
    if (typeof mask == 'function') { // Allow the `mask` parameter to be optional
        cb = mask;
        mask = 0o744;
    }
    fs.mkdir(path, mask, function(err) {
        if (err) {
            if (err.code == 'EEXIST') cb(null); // Ignore the error if the folder already exists
            else cb(err); // Something else went wrong
        } else cb(null); // Successfully created folder
    });
}

function recurseCreate (filePath, paths=[]) {

    var dn = path.dirname(filePath);
    if( dn == "." || dn == "./" || dn =="/"){
        for(let i=paths.length-1; i>=0; i--){
           fs.mkdirSync(paths[i])
           ///console.log(paths[i]);
        }
        return;
    }
    if(!fs.existsSync(dn)){ paths.push(dn);}
    recurseCreate(path.dirname(filePath), paths); 
  } 

  function recurseCopy (srcPath, destPath){
    fs.readdir(srcPath, { withFileTypes: true }, (err, files) => {
        files.filter(dirent => dirent.isFile())
        .forEach(file => {
            recurseCreate(path.join(destPath, file.name));
            fs.copyFileSync(path.join(`${srcPath}`,`${file.name}`), path.join(destPath, file.name) )
    
          console.log(file.name);
        });
        files.filter(dirent => dirent.isDirectory())
        .forEach(file => {
            recurseCopy(path.join(`${srcPath}`,`${file.name}`), path.join(destPath, file.name) )
        });
    });

}
module.exports  = {
    ensureExists, recurseCreate, recurseCopy
}

