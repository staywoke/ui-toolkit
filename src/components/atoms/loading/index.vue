<script>
import Vue from 'vue'

import { Loading } from 'element-ui'

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service

Vue.component('el-loading', Loading)

export default { extends: Loading }
</script>
