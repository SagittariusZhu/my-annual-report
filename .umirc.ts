import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home/index' },
    { path: '/first', component: '@/pages/First/index' },
    { path: '/second', component: '@/pages/Second/index' },
    { path: '/third', component: '@/pages/Third/index' },
    { path: '/fourth', component: '@/pages/Fourth/index' },
    { path: '/fifth', component: '@/pages/Fifth/index' },
    { path: '/sixth', component: '@/pages/Sixth/index' },
  ],
  fastRefresh: {},
  sass: {},
  define: {
    ANNUAL_YEAR: process.env.ANNUAL_YEAR,
    access_user: process.env.access_user,
    access_token: process.env.access_token,
  }
});
