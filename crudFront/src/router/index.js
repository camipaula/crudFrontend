import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import ProductView from '../views/ProductView.vue';

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductView,
    meta: { requiresAuth: true } // Esta ruta requiere autenticación
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/', // Ruta por defecto
    redirect: '/login' // Redirige a login al inicio
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Guard de navegación para proteger rutas
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('auth'); // Verificar si el usuario está autenticado

  // Si la ruta requiere autenticación y el usuario no está autenticado
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    // Redirigir al login
    next({ name: 'login' });
  } else {
    // Si está autenticado, continuar con la navegación
    next();
  }
});

export default router;
