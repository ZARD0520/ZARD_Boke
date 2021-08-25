<template>
    <div id="admin-article">
        <write-article></write-article>
    </div>
</template>

<script>
import writeArticle from '@/components/admin/writeArticle'

export default {
    name:'adminArticle',
    components:{
        writeArticle
    }
}
</script>

<style scoped>
    #admin-article{
        position: relative;
    }
    *{
        height: 100vh;
    }
</style>