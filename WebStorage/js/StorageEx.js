
var storageEx = {
	doStorage:function(way,key,value){
		if(way == true && key){
			fnTemp.session(key,value);
		}else if(way == false && key){
			fnTemp.local(key,value);
		}else{
			if(way && way != true && way != false){
				fnTemp.session(way,key);
			}else{
				fnTemp.error();
			}
		}
	},
	deleStorage:function(way,key){
		if(way == true){
			fnTemp.sessionDele(key);
		}else if(way == false){
			fnTemp.localDele(key);
		}else{
			fnTemp.sessionDele(way);
		}
	}
}

var fnTemp = {
	sessionDele:function(key){
		if(!key){
			sessionStorage.clear();
		}else{
			sessionStorage.removeItem(key);
		}
	},
	localDele:function(key){
		if(!key){
			localStorage.clear();
		}else{
			localStorage.removeItem(key);
		}
	},
	session:function(key,value){
		var temp = "";
		//alert(value);
		if(value != undefined){
			temp = this.jsonType(value);
			sessionStorage.setItem(key,temp);
		}else{
			this.jsonParse(sessionStorage.getItem(key));
		}
	},
	local:function(key,value){
		var temp = "";
		if(value){
			temp = this.jsonType(value);
			localStorage.setItem(key,temp);
		}else{
			this.jsonParse(localStorage.getItem(key)) ;
		}
	},
	jsonType:function(value){
		if((typeof value) == "object"){
			return "1"+JSON.stringify(value);
		}else{
			return "0"+value;
		}
	},
	jsonParse:function(value){
		var temp = "";
		if(value && value.length != 1){
			if(value.charAt(0) == "1"){
				temp = value.slice(1);
				console.log(JSON.parse(temp));
			}else{
				temp = value.slice(1);
				console.log(temp);
			}
		}else{
			console.log("null");
		}
	},
	error:function(){
		alert("请输入正确的格式");
	}
}



