Vue.component('button-component',{
template:'#button-component',

props:{
   value:{
   	type:Number
   },
   disabled:{
   	type:Boolean
   }
},

data:function(){
return {
	current_page:this.value
}
},

computed:{
  btnClass(){
  return {
  	'btn':true,
  	'btn-primary':true,
  	'two-button': this.current_page === 1
  }
  }

},

methods:{
	//下一页事件
nextPage(){
if(this.current_page === 3){
	return;
}
if(this.current_page < 3){
	this.current_page += 1;
}
console.log("当前页", this.current_page);
},

//上一页事件
previousPage(){
if(this.current_page === 1){
	return;
}
if(this.current_page > 1){
	this.current_page -= 1;
}
console.log("当前页", this.current_page);
},

//window.location.reload()
resetPage(){
	console.log("重置");
	bus.$emit("resetPage");

	this.current_page = 1;
},
//提交事件
submitForm(){
	console.log("提交");
}

},

watch:{
	current_page:function(){
		this.$emit('func', this.current_page);
	}
}


});