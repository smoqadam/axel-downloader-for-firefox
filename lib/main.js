


const {Cc, Ci} = require("chrome");


exports.main = function() {
    require("sdk/context-menu").Item({
        label: "Download with axel",
        context:  require("sdk/context-menu").SelectorContext("a[href]"), 
        contentScriptFile: require("sdk/self").data.url("check-node.js"),
        onMessage: function(msg){
				console.log(msg);
				download(msg);
		},
    });
};

function download(url){

	var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsIFile);
	file.initWithPath("/usr/bin/xterm");

	var process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
	process.init(file);

	var args = ["-e","axel",url];
	process.run(false, args, args.length);
}
