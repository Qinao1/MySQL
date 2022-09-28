<template>
    <ul>
        <li :style="{opacity}">欢迎学习vue</li>
        <li>消息11 <input type="text"></li>
        <li>消息22 <input type="text"></li>
        <li>消息33 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name:'News',
        data() {
            return {
                opacity:1
            }
        },
       /*  beforeDestroy(){
            console.log('new被销毁了');
            clearInterval(this.timer)
        },
        mounted() {
            this.timer=setInterval(()=>{
                console.log('@');
                this.opacity -= 0.01
                if(this.opacity<=0) this.opacity=1
            },16)
        }, */
        // 激活
        activated() {
            console.log('new组件被激活了');
            this.timer=setInterval(()=>{
                console.log('@');
                this.opacity -= 0.01
                if(this.opacity<=0) this.opacity=1
            },16)
        },
        // 失活
        deactivated() {
            console.log('new组件失活了');
            clearInterval(this.timer)
        },
    }
</script>