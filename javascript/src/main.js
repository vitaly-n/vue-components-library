import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/main.css'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Collecting base components
const requireComponent = require.context(
  './components/ui-kit',
  false,
  /Base[A-Z]\w+\.(vue|js)$/,
)

// Initializing
const app = createApp(App)

// Including base components
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
  )
  app.component(componentName, componentConfig.default || componentConfig)
})

app.use(store).use(router).mount('#app')
