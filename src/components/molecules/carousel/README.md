Atom › Carousel
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-carousel height="150px" :autoplay="false" interval="3000" @change="handleChange">
  <el-carousel-item v-for="item in 4" :key="item">
    <h3>Slide {{ item }}</h3>
  </el-carousel-item>
</el-carousel>
```


#### Script:

```js
import { Carousel, CarouselItem } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Carousel,
    CarouselItem
  },
  methods: {
    handleChange () {}
  }
}
```


#### Documentation:

* [Carousel Component Docs](http://element.eleme.io/#/en-US/component/carousel)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/carousel)
