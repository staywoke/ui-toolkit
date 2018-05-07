Molecule › Card
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-card class="card-demo" :body-style="{ padding: '0px' }">
  <img :src="image" class="image">
  <div style="padding: 14px;">
    <span>{{ title }}</span>
    <div class="bottom clearfix">
      <time class="time">{{ currentDate }}</time>
      <el-button type="text" class="button">Button</el-button>
    </div>
  </div>
</el-card>
```


#### Script:

```js
import { Card, Button } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Card,
    Button
  },
  data () {
    return {
      image: 'https://images.unsplash.com/photo-1522199780729-a356c844222a?w=250&q=80',
      title: 'Coffee Time',
      currentDate: 'May 5th, 2018'
    }
  }
}
```


#### Style:
```css
.card-demo {
  max-width: 250px;
}

.card-demo .time {
  font-size: 13px;
  color: #999;
}

.card-demo .bottom {
  margin-top: 13px;
  line-height: 12px;
}

.card-demo .button {
  padding: 0;
  float: right;
}

.card-demo .image {
  width: 100%;
  display: block;
}

.card-demo .clearfix:before,
.card-demo .clearfix:after {
    display: table;
    content: "";
}

.card-demo .clearfix:after {
    clear: both
}
```


#### Documentation:

* [Card Component Docs](http://element.eleme.io/#/en-US/component/card)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/card)
