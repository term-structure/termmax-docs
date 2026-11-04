import DefaultTheme from 'vitepress/theme'
import GbTabs from './GbTabs.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GbTabs', GbTabs)
  }
}
