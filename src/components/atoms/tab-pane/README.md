Atom › Tab Pane
---

> The following is a quick example of how to use this component.

**NOTE:** This component cannot be used by itself.  It is a child component that only works within the [Tab](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/tab) component.


#### Template:

```xml
<el-tab-pane label="User" name="first">
  User
</el-tab-pane>
```


#### Script:
```js
import { TabPane } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    TabPane
  }
}
```


#### Documentation:

* [Tab Component Docs](https://element.eleme.io/#/en-US/component/tab)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/tab-pane)
