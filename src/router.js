import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "demo" */ './views/Home.vue')
    },
    {
      path: '/privacy-policy',
      name: 'home',
      component: () => import(/* webpackChunkName: "demo" */ './views/Privacy-Policy')
    }
    // {
    //   path: '/',
    //   redirect: 'messages',
    //   component: DashboardLayout,
    //   children: [
    //     {
    //       path: '/alerts',
    //       name: 'alerts',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/Alerts.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //      },
    //     {
    //       path: '/users',
    //       name: 'users',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/Users.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //       // props: { propSort: "created_at_desc", propCurrentPage: 1 },
    //       props:true
    //     },
    //     {
    //       path: '/user/:user_id',
    //       name: 'userProfile',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //       // props: { sort: "created_at_desc", currentPage: 1 },
    //       // props: route => ({ sort: route.query.sort,currentPage: route.query.currentPage})
    //       props:true
    //
    //     },
    //     {
    //       path: '/questionnaire',
    //       name: 'questionnaire',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/Questionnaire.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/answers/:user_id',
    //       name: 'answers',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/Answers.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/profile',
    //       name: 'profile',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/add-therapist',
    //       name: 'TherapistAdd',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/TherapistAdd.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/therapist/:therapist_id',
    //       name: 'TherapistView',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/TherapistView.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/therapist/edit/:therapist_id',
    //       name: 'TherapistEdit',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/TherapistEdit.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/replaceTherapist/:therapist_id',
    //       name: 'Replace Therapist',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/TherapistReplacement.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/removeTherapist/:therapist_id',
    //       name: 'Replace Removed Therapist',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/RemoveTherapist.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/messages',
    //       name: 'Messages',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/Messages.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/brands',
    //       name: 'Brands',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/Brands.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/add-product',
    //       name: 'ProductAdd',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/ProductAdd.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/add-replacement/:product_id',
    //       name: 'AddProductReplacement',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/AddProductReplacement.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/product-types',
    //       name: 'ProductTypes',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/ProductTypes.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/product/:product_id',
    //       name: 'ProductEdit',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/ProductEdit.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/treatment-directory',
    //       name: 'Treatment Directory',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/TreatmentDirectory.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/therapists',
    //       name: 'therapists',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/Therapists.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/products',
    //       name: 'products',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/Products.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/commission',
    //       name: 'commission',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/Commission.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/reassignTherapist',
    //       name: 'Reassign Therapist',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/ReassignTherapist.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/invite-therapist',
    //       name: 'Invite Therapist',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/TherapistInvite.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/replaceProduct/:product_id',
    //       name: 'Replace Product',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/ProductReplacement.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/deleteProduct/:product_id',
    //       name: 'Delete Product',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/DeletedProductReplacement.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/sales-orders',
    //       name: 'sales-orders',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/SalesOrders.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/sales-order/:id',
    //       name: 'sales-order',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/SalesOrder.vue'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/sales-reports',
    //       name: 'sales-reports',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/SalesReports'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/purchase-orders',
    //       name: 'purchase-orders',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/PurchaseOrders'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //     {
    //       path: '/purchase-order/:id',
    //       name: 'purchase-order',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/PurchaseOrder'),
    //       meta: {
    //         requiresAuth: true
    //       },
    //     },
    //   ]
    // },
    // {
    //   path: '/',
    //   redirect: 'login',
    //   component: AuthLayout,
    //   children: [
    //     {
    //       path: '/login',
    //       name: 'login',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
    //     },
    //     {
    //       path: '/password-forget',
    //       name: 'password-forget',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/PasswordForget.vue')
    //     },
    //     {
    //       path: '/password-change',
    //       name: 'password-change',
    //       component: () => import(/* webpackChunkName: "demo" */ './views/PasswordChange.vue')
    //     }
    //   ]
    // }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const auth = localStorage.getItem("access_token");

    if (!auth) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
