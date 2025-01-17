import type { RouteRecordRaw } from 'vue-router';

// Components
import AppBaseWrapper from '@/app/components/base/AppBaseWrapper.vue';

// Constants
import { LAYOUT_OPTIONS } from '@/app/constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/authentication',
    component: AppBaseWrapper,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/AuthenticationLoginUI.vue'),
        meta: {
          requiresAuthorization: false,
          layout: LAYOUT_OPTIONS.EMPTY,
        },
      },
      {
        path: 'sign-up',
        name: 'sign-up',
        component: () => import('../views/AuthenticationSignUpUI.vue'),
        meta: {
          requiresAuthorization: false,
          layout: LAYOUT_OPTIONS.EMPTY,
        },
      },
    ],
  },
];

export default routes;
