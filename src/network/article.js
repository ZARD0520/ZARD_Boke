import { request } from "./request";

export function getArticleList(){
    return request({
        url:'/articleList'
    })
}

export function getArticle(id){
    return request({
        url:'/article/'+id
    })
}

export function zan(id,user){
    return request({
        method:"post",
        url:'/zan',
        data:{
            id,
            user
        }
    })
}

export function comment(id,obj){
    return request({
        method:"post",
        url:'/articleComment',
        data:{
            id,
            obj
        }
    })
}