<script>
import Vue from 'vue'

import { MessageBox } from 'element-ui'

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

Vue.component('el-message', MessageBox)

export default { extends: MessageBox }
</script>
