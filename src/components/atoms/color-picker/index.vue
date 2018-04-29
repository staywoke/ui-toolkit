<script>
import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import { ColorPicker } from 'element-ui'

// configure language
locale.use(lang)

Vue.component('el-color-picker', ColorPicker)

export default { extends: ColorPicker }
</script>
