import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from 'vuetify/lib/util/colors'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#005bc5',
                secondary: '#63caff',
                accent: '#ffa39e'
                //primary: colors.red.darken1, // #E53935
                //secondary: colors.red.lighten4, // #FFCDD2
                //accent: colors.indigo.base, // #3F51B5
            },
        },
    },
});


