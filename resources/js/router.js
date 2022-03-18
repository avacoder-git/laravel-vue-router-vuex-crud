import {VueRouter, createWebHistory, createRouter} from 'vue-router'
import PostComponent from "./components/PostComponent";
import TagComponent from "./components/TagComponent";



const routes = [
    {
        path: '/people', component:  () => import('./components/Person/Index'),
        name: 'person.index'
    },
    {
        path: '/people/create', component:  () => import('./components/Person/Create'),
        name: 'person.create'
    },
    {
        path: '/people/:id/edit', component:  () => import('./components/Person/Edit'),
        name: 'person.edit'
    },
    {
        path: '/people/:id', component:  () => import('./components/Person/Show'),
        name: 'person.show'
    },
]


const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes
})

export default router
