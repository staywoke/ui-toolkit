<script>
import Vue from 'vue'

import { Message } from 'element-ui'

Vue.prototype.$message = Message

Vue.component('el-message', Message)

export default { extends: Message }
</script>
