<template>
    <main-container>
        <div id="main">
            <board-show :items="items" @refresh="refresh"/>
        </div>
    </main-container>
</template>

<script>
import MainContainer from '@/components/main/MainContainer'
import BoardShow from '@/components/board/BoardShow'
import {getBoard} from '@/network/board'


export default {
    name:'board',
    data(){
        return {
            items:[]
        }
    },
    methods:{
        refresh(){
            this.getBoard()
        },
        getBoard(){
            getBoard().then(res=>{
                var itemsList=res.data.data
                this.items = itemsList.reverse()
            })
        }
    },
    created(){
        this.getBoard()
    },
    components:{
        MainContainer,
        BoardShow
    }
}
</script>

<style scoped>
    #main{
        margin-left:8px;
        margin-top:14px;
        text-align: center;
    }

    @media screen and (max-width:496px){
        #main{
            margin-left:0px;
        }
    }
</style>