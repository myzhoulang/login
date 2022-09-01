import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/page2', component: '@/pages/page2' },
    { path: '/page3', component: '@/pages/page3' },
    { path: '/page4', component: '@/pages/page4' },
    { path: '/page5', component: '@/pages/page5' },
    { path: '/page6', component: '@/pages/page6' },
  ],
  fastRefresh: {},
  styles: [``],
});
