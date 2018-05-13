Atom › Loading
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-button type="primary" @click="openFullScreen">
  Show Loading Screen
</el-button>
```


#### Script:
```js
import { Loading, Button } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Loading,
    Button
  },
  methods: {
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.9)'
      })

      setTimeout(() => {
        loading.close()
      }, 3000)
    }
  }
}
```


#### Documentation:

* [Loading Component Docs](https://element.eleme.io/#/en-US/component/loading)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/loading)
