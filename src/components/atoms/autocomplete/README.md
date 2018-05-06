Atom › Autocomplete
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-autocomplete
  v-model="input"
  :fetch-suggestions="querySearch"
  placeholder="Please Input"
  @select="handleSelect"
  @blur="blurHandler"
  @focus="focusHandler"
  @change="changeHandler"
/>
```


#### Script:
```js
import { Autocomplete } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Autocomplete
  },
  data () {
    return {
      links: [],
      input: null
    }
  },
  methods: {
    querySearch (queryString, cb) {
      var links = this.links
      var results = queryString ? links.filter(this.createFilter(queryString)) : links
      cb(results)
    },
    createFilter (queryString) {
      return (link) => {
        return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll () {
      return [
        { 'value': 'Apples', 'link': '#' },
        { 'value': 'Bananas', 'link': '#' },
        { 'value': 'Cherries', 'link': '#' },
        { 'value': 'Dates', 'link': '#' }
      ]
    },
    handleSelect (item) {},
    blurHandler () {},
    focusHandler () {},
    changeHandler () {}
}
```


#### Documentation:

* [Autocomplete Component Docs](https://element.eleme.io/#/en-US/component/autocomplete)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/autocomplete)
