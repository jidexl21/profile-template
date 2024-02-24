let _deps = require("../deps.json");
let path = require("path");

const  maps = (function(from="node-modules", to){
    return _deps.map(itm=>{
        itm.src =  path.join(from, itm.src);
        itm.dest = path.join(to, itm.dest);
        return itm;
    })
})

module.exports = { maps };