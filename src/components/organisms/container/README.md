Organism › Container
---
> The following is a quick example of how to use this component.

#### Template:

```xml
<el-container>
  <el-aside>Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
```


#### Script:
```js
import { Container, Aside, Header, Main, Footer } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Container,
    Aside,
    Header,
    Main,
    Footer
  }
}
```


#### Documentation:

* [Container Component Docs](https://element.eleme.io/#/en-US/component/container)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/organisms/container)
