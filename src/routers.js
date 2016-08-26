module.exports = function(router){
	router.map({
		'/home':{
			name:'home',
			component: require('./components/home.vue')
		},
    '/list':{
      name:'list',
      component: require('./components/list.vue')
    },
		'/login':{
			name:'login',
			component: require('./components/login.vue')
		},
		'/about':{
			name:'about',
			component: function(reslove){
				return require(['./components/about.vue'],reslove)
			},

		},

		// not found handler
	    '*': {
	      component: require('./components/not_found.vue')
	    }
	});

	window.routeList=[];
	router.beforeEach(function(transition){
		console.log('before---------------');
		if(transition.to.name == 'forbidden'){
			router.app.authenticating = true
			setTimeout(function(){
				router.app.authenticating = false
				alert('此路由在全局中设置为中止');
				transition.abort();
			},1500);
		}

		if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){
			router.app.effect='back';
			routeList.splice(routeList.length-1,1);
			console.log('back'+routeList,transition.to.name);
		} else {
			router.app.effect='fade';
			routeList.push({
				name : transition.to.name,
				path : transition.to.path,
				query : transition.to.query,
				params : transition.to.params,
				timer: +new Date
			});
		}

		//setTimeout(function(){
			transition.next();
		//},1000);
	});


	//可以记录访问路径
	router.afterEach(function(transition){
		console.log('-----------------after');
		for (var i = 0; i < routeList.length; i++) {
			console.log(routeList[i].name);
		};
	});
}
