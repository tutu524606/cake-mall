export default {
    state: {
        // 每日推荐列表-列表类型
        currentCity: ''
    },
    mutations: {
        // 列表类型
        changeCity(state, city) {
            state.currentCity = city;
            window.sessionStorage.setItem('currentCity', JSON.stringify(city));
        }
    },
    actions: {
        changeCity(context, city) {
            context.commit('changeCity', city);
        }
    }
}