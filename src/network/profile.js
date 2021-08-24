import { request } from "./request"

export function getProfile(user){
    return request({
        url:'/profile',
        params:{
            user
        }
    })
}

export function updateProfile(user,newNickname,personal){
    return request({
        url:'/update',
        params:{
            user,
            newNickname,
            personal
        }
    })
}