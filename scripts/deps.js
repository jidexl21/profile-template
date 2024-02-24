let fs = require("fs"); 

let {ensureExists, recurseCreate, recurseCopy } = require("./utils");
const path = require("path");
const {maps} = require("./depsMap");

var dest = "dist"; 

ensureExists( `./${dest}`, 0o744, function(err) {
    if (err) { console.log("Error creating file")}// Handle folder creation error
    else {}// We're all good
});
let srcPath = "./src";
let destPath = `./${dest}`;

recurseCopy(srcPath,destPath);

  var deps = maps("./node_modules",destPath); 
  deps.forEach(x=>{
     ensureExists(path.dirname(x.dest), null, function(){
        recurseCreate(x.dest);
        fs.copyFileSync(x.src, x.dest);
     }) ; 
  })


  
