import Vue from 'vue'
import Router from 'vue-router'

import UserIndex from '@/components/User/index'
import UserEdit from '@/components/User/EditUser'
import UserCreate from '@/components/User/CreateUser'
import UserShow from '@/components/User/ShowUser'
import Login from '@/components/Login'

import CommentIndex from '@/components/Comments/index' 

import BlogIndex from '@/components/Blogs/index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogShow from '@/components/Blogs/ShowBlog'
import BlogEdit from '@/components/Blogs/EditBlog'

import Upload from '@/components/Util/Upload'
import  VegetablefruitIndex from '@/components/Vegetablefruit/Index'
import  VegetablefruitEdit from '@/components/Vegetablefruit/EditVegetablefruit'
import  VegetablefruitCreate from '@/components/Vegetablefruit/CreateVegetablefruit'
import  VegetablefruitShow from '@/components/Vegetablefruit/ShowVegetablefruit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blog-create',
      component: BlogCreate
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blog-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: BlogShow
    },
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/vegetablefruitall',
      name: 'vegetablefruitall',
      component: VegetablefruitIndex
    },
    {
      path: '/vegetablefruit1/edit/:vegetablefruitId',
      name: 'vegetablefruit1-edit',
      component: VegetablefruitEdit
    },
    {
      path: '/vegetablefruit1/create',
      name: 'vegetablefruit1-create',
      component: VegetablefruitCreate 
    },
    {
      path: '/vegetablefruit1/:vegetablefruitId',
      name: 'vegetablefruit1',
      component: VegetablefruitShow
    }
  ]
})
