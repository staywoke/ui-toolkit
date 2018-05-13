<script>
import Vue from 'vue'

import { Notification } from 'element-ui'

Vue.prototype.$notify = Notification

Vue.component('el-notification', Notification)

export default { extends: Notification }
</script>
