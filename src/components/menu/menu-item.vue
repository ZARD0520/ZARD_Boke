<template>
    <menu-container>
        <span slot="title"></span>
        <div slot="content">
            <menu-notice/>
            <menu-more/>
            <menu-contact/>
        </div>
    </menu-container>
</template>

<script>
import menuContainer from './menu-container'
import menuNotice from './menu-notice'
import menuMore from './menu-more'
import menuContact from './menu-contact'

export default {
    name:'menu-item',
    components:{
        menuContainer,
        menuNotice,
        menuMore,
        menuContact
    }
}
</script>

<style scoped>

</style>