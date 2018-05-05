Organism › Map Block
---
> The following is a quick example of how to use this component.


#### Template:

```xml
<sw-map-block :class-names="classNames" @click="handleClick"></sw-map-block>
```


#### Script:
```js
import { MapBlock } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    MapBlock
  },
  data () {
    return {
      classNames: {
        'TX': 'disabled',
        'NY': 'blue',
        'AL': 'red'
      }
    }
  },
  methods: {
    handleClick () {}
  }
}
```


#### Attributes:

Attribute   | Description               | Type    | Accepted Values                        | Default
------------|---------------------------|---------|----------------------------------------|------------
size        | map size                  | string  | responsive, large, medium, small, mini | responsive
hide-labels | hide state labels         | boolean | --                                     | false
show-dc     | show district of columbia | boolean | --                                     | true
class-names | state specific classnames | object  | --                                     | --

#### Class Names:

When using `class-names` make sure to use Uppercase State Code Abbreviations. You are welcome to create and assign your own class names with your project, but we have added a few defaults to get you started:

* `disabled`: Adding this class will make the state disabled in appearance and prevent clicks
* `blue`: Uses the UI Toolkits primary color
* `green`: Uses the UI Toolkits success color
* `orange`: Uses the UI Toolkits warning color
* `red`: Uses the UI Toolkits danger color

#### Documentation:

* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/organisms/map-block)
