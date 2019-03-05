Vue.component('radio-component',{

template:'\
<div>\
<label>{{title}}</label><br/>\
<span class="subject"\
     v-for="item in items">\
   <input type="radio" \
   v-model="results" :value="item.msg"\
    :id="item.id">\
   <label :for="item.id">{{item.msg}}</label>\
 </span>\
</div>',

props:{
  current_page:{
  	type:Number
  }
},

data:function(){
return{
   results: '',
   title: "1.请问您的性别是？",
   items:[
      {
      	id:'male',
      	msg:'男'
      },
      {
      	id:'female',
      	msg:'女'
      },
      {
      	id:'secret',
      	msg:'保密'
      }
   ]

}
},

created: function(){
      bus.$on("resetPage", this.resetPage);

},

methods:{
	setSelected(){
		this.$emit('setbtndisabled', this.results, 1)
	},
	resetPage(){
		this.results = '';
	}

},

watch:{
	results(){
		this.setSelected();
	},
	current_page(){
    if(this.current_page === 1){
    	this.$emit('setbtndisabled', this.results, 1);
    }
	}
}

});


Vue.component('checkbox-component', {
	
template:'\
<div>\
<label>{{title}}</label>\
<div class="subject-div">\
<div class="subject2" v-for="item in items" :key="item.id">\
<input type="checkbox" v-model="results"\
:id="item.id" :value="item.msg"/>\
<label :for="item.id">{{item.msg}}</label>\
</div>\
</div>\
</div>',

props:{
  current_page:{
  	type:Number
  }
},

data:function(){

	return{
		title:"2.请选择您的兴趣爱好：",
		results:[],
		items:[
              {
              	id:'reading',
              	msg:'看书'
              },
              {
              	id:'swimming',
              	msg:'游泳'
              },
              {
              	id:'jogging',
              	msg:'跑步'
              },
              {
              	id:'movie',
              	msg:'看电影'
              },
              {
              	id:'music',
              	msg:'听音乐'
              }

		]
	}
},

created: function(){
      bus.$on("resetPage", this.resetPage);

},

methods:{
	setSelected(){
		this.$emit('setbtndisabled', this.results, 2)
	},
	resetPage(){
		this.results = [];
	}
},
watch:{
	results(){
		this.setSelected();
	},
	current_page(){
    if(this.current_page === 2){
    	this.$emit('setbtndisabled', this.results, 2)
    }
	}
}


});


Vue.component('textarea-component',{
	
template:'\
<div>\
<label>{{title}}</label>\
<div class="subject-div">\
<div class="subject">\
<textarea v-model="results" rows="3" cols="30" placeholder="不少于10个字"></textarea>\
</div>\
</div>\
</div>',

props:{
  current_page:{
  	type:Number
  }
},

data:function(){

	return{
		title:'3.请介绍一下自己：',
		results:''

	}
},

created: function(){
      bus.$on("resetPage", this.resetPage);

},

methods:{
	setSelected(){
		this.$emit('setbtndisabled', this.results, 10)
	},
	resetPage(){
		this.results = '';
	}
},

watch:{
	results(){
		this.setSelected();
	},
	current_page(){
    if(this.current_page === 3){
    	this.$emit('setbtndisabled', this.results, 10)
    }
	}
}

});