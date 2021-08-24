import { request } from "./request"

export function Login(username,password){
    return request({
        method:"post",
        url:'/login',
        data:{
            username,
            password
        }
    })
}

export function Register(username,password,email){
    return request({
        method:'post',
        url:'/register',
        data:{
            username,
            password,
            email
        }
    })
}