<template>
    <ul>
        <li>消息11 <input type="text"></li>
        <li>消息22 <input type="text"></li>
        <li>消息33 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name:'News',
        beforeDestroy(){
            console.log('new被销毁了');
        }
    }
</script>