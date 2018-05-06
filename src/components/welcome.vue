<template>
  <div class="welcome">
    <sw-logo />

    <h1>UI Toolkit</h1>
    <h2>Vue.js Components</h2>

    <p v-html="message"></p>

    <strong>Documentation:</strong>

    <ul>
      <li><a href="https://vuejs.org/v2/guide/" target="_blank">Vue.js Developer Guide</a></li>
      <li><a href="http://element.eleme.io/#/en-US/component" target="_blank">Vue.js Element Components</a></li>
      <li><a href="https://github.com/staywoke/ui-toolkit" target="_blank">UI Toolkit GitHub Repository</a></li>
      <li><a href="#" target="_blank">Sample Project using UI Toolkit</a></li>
    </ul>
  </div>
</template>

<script>
import Logo from './atoms/logo'

export default {
  name: 'Welcome',
  components: {
    Logo
  },
  props: {
    message: {
      type: String,
      default: 'Select a Component from the left column'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.welcome {
  text-align: center;
}
h1 {
  font-weight: normal;
}
h2 {
  color: #4fc08d;
  font-weight: 300;
}
strong {
  color: #333;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 500;
  margin: 40px 0 20px 0;
  display: block;
}
p {
  background: #fdfdfd;
  padding: 14px;
  border: 1px solid #eaeaea;
  color: #777;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  max-width: 400px;
  margin: 0 auto;
}
ul {
  text-align: left;
  list-style: none;
  padding: 0;
  max-width: 260px;
  margin: 0 auto;
  margin-bottom: 20px;
}
li::before {
  content: '• ';
  color: #CCC;
  line-height: 24px;
}

a {
  color: #666;
  text-decoration: none;
  transition: color 0.25s ease-in-out;
  margin-left: 6px;
}
a:hover {
  color: #4fc08d;
}
</style>
