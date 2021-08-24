import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:'http://47.112.128.68/server',
        timeout:5000
    })
    instance.interceptors.request.use(
        config=>{
            if(sessionStorage.getItem('token')){
                const token = sessionStorage.getItem('token')
                config.headers.Authorization = 'Bearer '+token
            }
            return config
        },err=>{
            return Promise.reject(err)
        }
    )
    return instance(config)
}