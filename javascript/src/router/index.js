import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import FormsInputs from '@/views/forms/Inputs.vue'
import BaseInputPage from '@/views/forms/inputs/BaseInputPage.vue'
import BaseSelectPage from '@/views/forms/inputs/BaseSelectPage.vue'
import FormsButtons from '@/views/forms/Buttons.vue'
import SubmitButton from '@/views/forms/buttons/SubmitButton.vue'
import CloseButton from '@/views/forms/buttons/CloseButton.vue'
import BaseTable from '@/views/tables/BaseTable'
import EditableTable from '@/views/tables/EditableTable'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/forms',
    name: 'Forms',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "forms" */ '../views/Forms.vue'),
    children: [
      {
        path: '',
        redirect: '/forms/inputs/base-input',
      },
      {
        path: 'inputs',
        name: 'Inputs',
        component: FormsInputs,
        children: [
          {
            path: '',
            redirect: '/forms/inputs/base-input',
          },
          {
            path: 'base-input',
            name: 'Base Input',
            component: BaseInputPage,
          },
          {
            path: 'base-select',
            name: 'Base Select',
            component: BaseSelectPage,
          },
        ],
      },
      {
        path: 'buttons',
        name: 'Buttons',
        component: FormsButtons,
        children: [
          {
            path: '',
            redirect: '/forms/buttons/submit-button',
          },
          {
            path: 'submit-button',
            name: 'Submit Button',
            component: SubmitButton,
          },
          {
            path: 'close-button',
            name: 'Close Button',
            component: CloseButton,
          },
        ],
      },
    ],
  },
  {
    path: '/tables',
    name: 'Tables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tables" */ '../views/Tables.vue'),
    children: [
      {
        path: '',
        redirect: '/tables/base-table',
      },
      {
        path: '/tables/base-table',
        name: 'BaseTable',
        component: BaseTable,
      },
      {
        path: '/tables/editable-table',
        name: 'EditableTable',
        component: EditableTable,
      },
    ],
  },
  {
    path: '/popups',
    name: 'Popups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "popups" */ '../views/Popups.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
