
import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Dashboard from '@views/Dashboard.vue';
import Posts from '@views/Posts.vue';
import Post from '@views/Post.vue';
import NotFound from '@views/NotFound.vue';
import Login from '@views/Login.vue';


const routes = [
  { 
    path: '/:pathMatch(.*)', 
    name: 'NotFound',
    component: NotFound },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
      path: '/posts',
      name: 'Posts',
      component: Posts,
  },
  {
    path: '/posts/:postId',
    name: 'Post',
    component: Post
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
  
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.user.userID) {
      next({ name: 'Login' })
    } else {
        next() 
    }
  } else {
    if(to.name === 'Login'){
       if(store.state.user.userID) { 
        next({ name: 'Dashboard' })
      } else {
        next()
      }
    } else {
      next() 
    }
    
  }
})

export default router;
