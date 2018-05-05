<template>
  <el-container class="sw-map-block" :class="[ mapSize ? 'sw-map-block--' + mapSize : '', hiddenLabels ? 'hide-labels' : '' ]">
    <el-row :gutter="0">
      <el-col :span="2" :offset="22">
        <el-button plain @click="handleClick('ME')" :class="getClassNames('ME')">ME</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :span="2" :offset="12">
        <el-button plain @click="handleClick('WI')" :class="getClassNames('WI')">WI</el-button>
      </el-col>
      <el-col :span="2" :offset="6">
        <el-button plain @click="handleClick('VT')" :class="getClassNames('VT')">VT</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('NH')" :class="getClassNames('NH')">NH</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :span="2" :offset="2">
        <el-button plain @click="handleClick('WA')" :class="getClassNames('WA')">WA</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('ID')" :class="getClassNames('ID')">ID</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('MT')" :class="getClassNames('MT')">MT</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('ND')" :class="getClassNames('ND')">ND</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('MN')" :class="getClassNames('MN')">MN</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('IL')" :class="getClassNames('IL')">IL</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('MI')" :class="getClassNames('MI')">MI</el-button>
      </el-col>
      <el-col :span="2" :offset="2">
        <el-button plain @click="handleClick('NY')" :class="getClassNames('NY')">NY</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('MA')" :class="getClassNames('MA')">MA</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :span="2" :offset="2">
        <el-button plain @click="handleClick('OR')" :class="getClassNames('OR')">OR</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('NV')" :class="getClassNames('NV')">NV</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('WY')" :class="getClassNames('WY')">WY</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('SD')" :class="getClassNames('SD')">SD</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('IA')" :class="getClassNames('IA')">IA</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('IN')" :class="getClassNames('IN')">IN</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('OH')" :class="getClassNames('OH')">OH</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('PA')" :class="getClassNames('PA')">PA</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('NJ')" :class="getClassNames('NJ')">NJ</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('CT')" :class="getClassNames('CT')">CT</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('RI')" :class="getClassNames('RI')">RI</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :span="2" :offset="2">
        <el-button plain @click="handleClick('CA')" :class="getClassNames('CA')">CA</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('UT')" :class="getClassNames('UT')">UT</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('CO')" :class="getClassNames('CO')">CO</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('NE')" :class="getClassNames('NE')">NE</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('MO')" :class="getClassNames('MO')">MO</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('KY')" :class="getClassNames('KY')">KY</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('WV')" :class="getClassNames('WV')">WV</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('VA')" :class="getClassNames('VA')">VA</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('MD')" :class="getClassNames('MD')">MD</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('DE')" :class="getClassNames('DE')">DE</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :span="2" :offset="4">
        <el-button plain @click="handleClick('AZ')" :class="getClassNames('AZ')">AZ</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('NM')" :class="getClassNames('NM')">NM</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('KS')" :class="getClassNames('KS')">KS</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('AR')" :class="getClassNames('AR')">AR</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('TN')" :class="getClassNames('TN')">TN</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('NC')" :class="getClassNames('NC')">NC</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('SC')" :class="getClassNames('SC')">SC</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :span="2" :offset="8">
        <el-button plain @click="handleClick('OK')" :class="getClassNames('OK')">OK</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('LA')" :class="getClassNames('LA')">LA</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('MS')" :class="getClassNames('MS')">MS</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('AL')" :class="getClassNames('AL')">AL</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('GA')" :class="getClassNames('GA')">GA</el-button>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :span="2">
        <el-button plain @click="handleClick('HI')" :class="getClassNames('HI')">HI</el-button>
      </el-col>
      <el-col :span="2">
        <el-button plain @click="handleClick('AK')" :class="getClassNames('AK')">AK</el-button>
      </el-col>
      <el-col :span="2" :offset="4">
        <el-button plain @click="handleClick('TX')" :class="getClassNames('TX')">TX</el-button>
      </el-col>
      <el-col :span="2" :offset="8">
        <el-button plain @click="handleClick('FL')" :class="getClassNames('FL')">FL</el-button>
      </el-col>
      <el-col :span="2" :offset="2" v-if="showDc">
        <el-button plain @click="handleClick('DC')" :class="getClassNames('DC')">DC</el-button>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import { Container, Col, Row, Button } from 'element-ui'

export default {
  name: 'MapBlock',
  components: {
    Container,
    Col,
    Row,
    Button
  },
  props: {
    size: {
      type: String,
      default: 'responsive',
      validator: function (value) {
        return ['responsive', 'large', 'medium', 'small', 'mini'].indexOf(value) !== -1
      }
    },
    hideLabels: {
      type: Boolean,
      default: false
    },
    showDc: {
      type: Boolean,
      default: false
    },
    classNames: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    hiddenLabels () {
      return this.hideLabels
    },
    mapSize () {
      return this.size
    }
  },
  methods: {
    getClassNames (code) {
      const buttonClass = `map-state-${code}`.toLowerCase()

      return (this.classNames && typeof this.classNames[code] !== 'undefined')
        ? `${buttonClass} ${this.classNames[code]}`
        : `${buttonClass}`
    },
    handleClick (code) {
      this.$emit('click', code)
    }
  }
}
</script>

<style lang="scss" scoped>
$large: 60px;
$medium: 40px;
$small: 30px;
$mini: 20px;

.sw-map-block {
  display: block;
  margin: 0;
  padding: 0;

  .el-row {
    margin: 0;
    padding: 0;
  }

  button {
    border-radius: 0;
    padding: 0;
    margin: 1px;
    overflow: hidden;
    transition: all 0.25s ease-in-out;

    &:hover, &:active, &:focus {
      border-color: #333;
      color: #000;
    }
  }

  button.disabled, button.disabled:hover {
    background-color: #EBEEF5;
    border: none;
    cursor: default !important;
    color: #909399;
    pointer-events: none;
  }

  button.blue {
    background-color: #409eff;
    color: #FFF;
    border: none;

    &:hover, &:active, &:focus {
      background-color: #66b1ff;
      color: #FFF;
    }
  }

  button.green {
    background-color: #67c23a;
    color: #FFF;
    border: none;

    &:hover, &:active, &:focus {
      background-color: #85ce61;
      color: #FFF;
      border: none;
    }
  }

  button.orange {
    background-color: #e6a23c;
    color: #FFF;
    border: none;

    &:hover, &:active, &:focus {
      background-color: #ebb563;
      color: #FFF;
    }
  }

  button.red {
    background-color: #f56c6c;
    color: #FFF;
    border: none;

    &:hover, &:active, &:focus {
      background-color: #f78989;
      color: #FFF;
    }
  }

  &.hide-labels {
    .el-button {
      text-indent: -10000px;
    }
  }

  &.sw-map-block--mini {
    width: calc(12 * #{$mini + 2});
    margin: 0 auto;

    button {
      width: $mini;
      height: $mini;
      font-size: 10px;
      font-weight: 500;
    }
  }

  &.sw-map-block--small {
    width: calc(12 * #{$small + 2});
    margin: 0 auto;

    button {
      width: $small;
      height: $small;
      font-size: 14px;
      font-weight: 500;
    }
  }

  &.sw-map-block--medium {
    width: calc(12 * #{$medium + 2});
    margin: 0 auto;

    button {
      width: $medium;
      height: $medium;
      font-size: 18px;
      font-weight: 400;
    }
  }

  &.sw-map-block--large {
    width: calc(12 * #{$large + 2});
    margin: 0 auto;

    button {
      width: $large;
      height: $large;
      font-size: 24px;
      font-weight: 400;
    }
  }
}

@media (max-width: 414px) {
  .sw-map-block.sw-map-block--responsive {
    width: calc(12 * #{$mini + 2});
    margin: 0 auto;

    button {
      width: $mini;
      height: $mini;
      font-size: 10px;
      font-weight: 500;
    }
  }
}

@media (min-width: 415px) and (max-width: 767px) {
  .sw-map-block.sw-map-block--responsive {
    width: calc(12 * #{$small + 2});
    margin: 0 auto;

    button {
      width: $small;
      height: $small;
      font-size: 14px;
      font-weight: 500;
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .sw-map-block.sw-map-block--responsive {
    width: calc(12 * #{$medium + 2});
    margin: 0 auto;

    button {
      width: $medium;
      height: $medium;
      font-size: 18px;
      font-weight: 400;
    }
  }
}

@media (min-width: 1024px) {
  .sw-map-block.sw-map-block--responsive {
    width: calc(12 * #{$large + 2});
    margin: 0 auto;

    button {
      width: $large;
      height: $large;
      font-size: 24px;
      font-weight: 400;
    }
  }
}
</style>
