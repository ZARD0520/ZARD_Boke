import { request } from "./request"

export function getMusic(id){
    return request({
        url:'/music/'+id
    })
}

export class Music{
    constructor(name,singer,imgUrl,musicUrl){
        this.name = name
        this.singer = singer
        this.imgUrl = imgUrl
        this.musicUrl = musicUrl
    }
}