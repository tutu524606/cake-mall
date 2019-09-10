export default {
    state: {
        // 每日推荐列表-列表类型
        choiceIndex: ''
    },
    mutations: {
        // 列表类型
        changeChoice(state, index) {
            state.choiceIndex = index;
        }
    },
    actions: {
        changeChoice(context, index) {
            context.commit('changeChoice', index);
        }
    }
}