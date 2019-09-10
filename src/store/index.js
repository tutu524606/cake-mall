import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import footer from './modules/footer'
import choice from './modules/choice'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        home,
        footer,
        choice
    }
})

export default store