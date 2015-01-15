self.on("context", function(node){
    if(node.href){
		
		self.on('click',function(node,data){
				self.postMessage(node.href);
				
		});
		 //show in context menu if return value is true.
		return true; 
	}
});
