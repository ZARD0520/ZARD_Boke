import { request } from "./request"

export function getPhoto(){
    return request({
        url:'/photo'
    })
}

export class Photo{
    constructor(name,start,photoList){
        this.name = name
        this.start = start
        this.photoList = photoList
    }
}