Atom › Logo
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<sw-logo
  :size="300"
  :padding="20"
  color="#F2E325"
  background="#000000"
/>
```


#### Script:
```js
import { Logo } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Logo
  }
}
```


#### Attributes:

Attribute  | Description      | Type   | Default
-----------|------------------|--------|------------
size       | logo size        | number | 200
padding    | padding          | number | 0
color      | logo color       | string | #000000
background | background color | string | transparent

**NOTE:** Official StayWoke Colors are `#000000` on a light background and `#F2E325` on a dark background.

#### Documentation:

* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/logo)
