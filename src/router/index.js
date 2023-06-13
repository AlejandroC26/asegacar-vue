import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/Login',
    component: () => import('../views/Login')
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard'),
    meta: { protectedRoute: true }
  },
  {
    path: '/personas',
    name: 'Persons',
    component: () => import('../views/Persons'),
    meta: { protectedRoute: true }
  },
  {
    path: '/usuarios',
    name: 'Users',
    component: () => import('../views/Users'),
    meta: { protectedRoute: true }
  },
  {
    path: '/propositos',
    name: 'Porpuses',
    component: () => import('../views/Purposes'),
    meta: { protectedRoute: true }
  },
  {
    path: '/edades',
    name: 'Ages',
    component: () => import('../views/Ages'),
    meta: { protectedRoute: true }
  },
  {
    path: '/guias',
    name: 'Guides',
    component: () => import('../views/Guides'),
    meta: { protectedRoute: true }
  },
  {
    path: '/expendios',
    name: 'Outlets',
    component: () => import('../views/Outlets'),
    meta: { protectedRoute: true }
  },
  {
    path: '/ingresos',
    name: 'Incomes',
    component: () => import('../views/Incomes'),
    meta: { protectedRoute: true }
  },
  {
    path: '/codigoformato',
    name: 'FormatCode',
    component: () => import('../views/FormatCode'),
    meta: { protectedRoute: true }
  },
  {
    path: '/contratodeposito',
    name: 'ContractDeposit',
    component: () => import('../views/ContractDeposit'),
    meta: { protectedRoute: true }
  },
  {
    path: '/planilladiaria',
    name: 'DailyPayroll',
    component: () => import('../views/DailyPayroll'),
    meta: { protectedRoute: true }
  },
  {
    path: '/registrodiarioantemorten',
    name: 'AntemortemDailyRecord',
    component: () => import('../views/AntemortemDailyRecord'),
    meta: { protectedRoute: true }
  },
  {
    path: '/sacrificiospendientes',
    name: 'PendingSacrifices',
    component: () => import('../views/PendingSacrifices'),
    meta: { protectedRoute: true }
  },
  {
    path: '/rutas',
    name: 'Routes',
    component: () => import('../views/Verification/Routes'),
    meta: { protectedRoute: true }
  },
  {
    path: '/rutadiaria',
    name: 'DailyRoute',
    component: () => import('../views/Verification/DailyRoute'),
    meta: { protectedRoute: true }
  },
  {
    path: '/matrices',
    name: 'MasterTable',
    component: () => import('../views/Verification/MasterTable'),
    meta: { protectedRoute: true }
  },
  {
    path: '/planillaordenbeneficio',
    name: 'FormBenefitOrder',
    component: () => import('../views/Verification/FormBenefitOrder'),
    meta: { protectedRoute: true }
  },
  {
    path: '/inspeccionpostmortem',
    name: 'PostMortemInspection',
    component: () => import('../views/Verification/PostMortemInspection'),
    meta: { protectedRoute: true }
  },
  {
    path: '/toleranciacerovisceras',
    name: 'ZeroGutsTolerance',
    component: () => import('../views/Verification/ZeroGutsTolerance'),
    meta: { protectedRoute: true }
  },
  {
    path: '/despachovisceras',
    name: 'VisceraDispath',
    component: () => import('../views/Verification/VisceraDispath'),
    meta: { protectedRoute: true }
  },
  {
    path: '/comparaciondecomisos',
    name: 'SeizureComparison',
    component: () => import('../views/Verification/SeizureComparison'),
    meta: { protectedRoute: true }
  },
  {
    path: '/reportes',
    name: 'ReportsVue',
    component: () => import('../views/ReportsVue'),
    meta: { protectedRoute: true }
  },
  { path: "*", component: () => import('../views/404'), }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //about homem only about is protected
  const routeIsProtected = to.matched.some(item => item.meta.protectedRoute);
  if(routeIsProtected && localStorage.getItem('token') === null){
    next('/')
  } else {
    next()
  }
})

export default router
