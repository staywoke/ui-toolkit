<script>
import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import { Rate } from 'element-ui'

// configure language
locale.use(lang)

Vue.component('el-rate', Rate)

export default { extends: Rate }
</script>
