Molecule › Tree
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-tree
  :data="data"
  :props="defaultProps"
  @node-click="handleNodeClick"
/>
```


#### Script:

```js
import { Tree } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Tree
  },
  data() {
    return {
      data: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
```


#### Documentation:

* [Tree Component Docs](http://element.eleme.io/#/en-US/component/tree)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/tree)
