import {request} from './request'

//获取留言
export function getBoard(){
    return request({
        url:'/comment'
    })
}

//提交留言
export function commitBoard(nickname,avatar,content,date,id){
    return request({
        method:'post',
        url:'/leave',
        data:{
            nickname,
            avatar,
            content,
            date,
            id
        }
    })
}

//回复留言
export function resBoard(id,obj){
    return request({
        method:'post',
        url:'/pinglun',
        data:{
            id,
            obj
        }
    })
}

//获取留言id
export function boardId(){
    return request({
        url:'/commentId'
    })
}
