const loadingComponent = require('./loading.vue');
const loading = {
	install: function(Vue) {
		Vue.component('loading', loadingComponent);
	}
}

module.exports = loading;