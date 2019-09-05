export default {
    state: {
        // 每日推荐列表-列表类型
        currentMenu: new Array(2)
    },
    mutations: {
        // 列表类型
        changeMenuItem(state, menu) {
            state.currentMenu.unshift(menu);
            state.currentMenu.pop();
        }
    },
    actions: {
        changeMenuItem(context, menu) {
            context.commit('changeMenuItem', menu);
        }
    }
}