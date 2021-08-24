import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('@/view/Home')

const articleList = ()=>import('@/view/Article/articleList')
const ArticleList = ()=>import('@/components/article/ArticleList')
const ArticleShow = ()=>import('@/components/article/ArticleShow')

const videoShow = ()=>import('@/view/Video/videoShow')
const VideoItemShow = ()=>import('@/components/video/VideoItemShow')
const VideoListShow = ()=>import('@/components/video/VideoListShow')

const photo = ()=>import('@/view/Photo/photo')
const PhotoShow = ()=>import('@/components/photo/PhotoShow')
const PhotoList = ()=>import('@/components/photo/PhotoList')

const board = ()=>import('@/view/MessageBoard/board')

const profile = ()=>import('@/view/Profile/profile')
const ProfileShow = ()=>import('@/components/profile/ProfileShow')
const ProfileWait = ()=>import('@/components/profile/ProfileWait')

const login = ()=>import('@/view/Login/login')
const Login = ()=>import('@/components/login/Login')
const Register = ()=>import('@/components/login/Register')

const friendLink = ()=>import('@/view/More/friendLink')


Vue.use(VueRouter)

const routes = [
    //主页路由
    {
        path:'/',
        redirect:'Home'
    },
    {
        path:'/Home',
        component:Home,
        children:[
            //导航栏路由
            {
                path:'',
                redirect:'articleList'
            },
            //文章
            {
                path:'articleList',
                component:articleList,
                children:[
                    {
                        path:'',
                        redirect:'ArticleList'
                    },
                    {
                        path:'ArticleList',
                        component:ArticleList
                    },
                    {
                        path:'ArticleShow',
                        component:ArticleShow
                    }
                ]
            },
            //影像
            {
                path:'videoShow',
                component:videoShow,
                children:[
                    {
                        path:'',
                        redirect:'VideoListShow'
                    },
                    {
                        path:'VideoListShow',
                        component:VideoListShow
                    },
                    {
                        path:'VideoItemShow',
                        component:VideoItemShow
                    }
                ]
            },
            //相册
            {
                path:'photo',
                component:photo,
                children:[
                    {
                        path:'',
                        redirect:'PhotoList'
                    },
                    {
                        path:'PhotoList',
                        component:PhotoList
                    },
                    {
                        path:'PhotoShow',
                        component:PhotoShow
                    }
                ]
            },
            //留言
            {
                path:'board',
                component:board
            },
            //个人中心
            {
                path:'profile',
                component:profile,
                children:[
                    {
                        path:'',
                        redirect:'ProfileWait'
                    },
                    {
                        path:'ProfileWait',
                        component:ProfileWait
                    },
                    {
                        path:'ProfileShow',
                        component:ProfileShow
                    }
                ]
            },
            //登录注册路由
            {
                path:'login',
                component:login,
                children:[
                    {
                        path:'',
                        redirect:'Login'
                    },
                    {
                        path:'Login',
                        component:Login
                    },
                    {
                        path:'Register',
                        component:Register
                    }
                ]
            },
            //友情链接路由
            {
                path:'friend',
                component:friendLink
            }
        ]
    },
    //登录、注册路由
    {
        path:'/login',
        component:login,
        children:[
            {
                path:'',
                redirect:"Login"
            },
            {
                path:'Login',
                name:'Login',
                component:Login
            },{
                path:'Register',
                name:'Register',
                component:Register
            }
        ]
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

//配置路由守卫
/*
router.beforeEach((to,from,next)=>{
    if(to.path === '/Home/profile/ProfileShow'){
        let token = sessionStorage.getItem('token')
        let user = sessionStorage.getItem('user')
        if(token&&user){
            getProfile(user).then(res=>{
                if(res.data.err_code === 1 ){
                    alert(res.data.message)
                }
                this.userInfo = res.data.data
                this.$router.replace('ProfileShow')
            })
        }else{
            next('/Home/profile/ProfileWait')
        }
    }
})*/

export default router