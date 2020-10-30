import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'

export default ({ Vue }) => {
  const options = JSON.parse(VUE_CUSTOM_TOOLTIP_OPTIONS)
  Vue.use(VueCustomTooltip, options)
}
