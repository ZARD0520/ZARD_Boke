import { request } from "./request"

export function getVideo(){
    return request({
        url:'/video'
    })
}
