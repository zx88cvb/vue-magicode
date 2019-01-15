import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'

Vue.use(Router)

// 新闻详情页
const NewsDetail = (resolve) => {
  import('pages/detail/Detail').then((module) => {
    resolve(module)
  })
}

// 分类
const Category = (resolve) => {
  import('pages/category/Category').then((module) => {
    resolve(module)
  })
}

// 友情链接
const Links = (resolve) => {
  import('pages/links/Links').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/news/:id',
      component: NewsDetail
    },
    {
      path: '/category/:id',
      component: Category
    },
    {
      path: '/links',
      component: Links
    }
  ]
})
