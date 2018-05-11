Atom › Font Awesome Icon
---

> The following is a quick example of how to use this component.

### [COMPLETE ICON LIST ⇨](https://fontawesome.com/icons)

**Please Note:** The Font Awesome Pro License associated with this project is for UI Toolkit Use Only.  Permission is not granted to use our license outside of UI Toolkit.

#### Template:

```xml
<font-awesome-icon
  size="4x"
  color="#67C23A"
  :icon="['far', 'edit']"
  :mask="['fas', 'comment']"
  transform="shrink-10 up-1 right-1"
/>
```


#### Script:
```js
import { FontAwesomeIcon } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    FontAwesomeIcon
  }
}
```


#### Documentation:

* [Font Awesome Icons](https://fontawesome.com/icons)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/font-awesome-icon)
