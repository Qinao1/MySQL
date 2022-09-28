<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <!-- 如下代码也能实现功能，但是不太推荐，因为违反原则 修改了props -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handledelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name:'MyItem',
        // 声明接收todo对象
        props:['todo','checktodo','deleteTodo'],
        // mounted() {
        //   console.log(this);  
        // },
        methods: {
            // 勾选 or取消勾选
            handleCheck(id){
                // 通知app组件将对应的todo对象的done值取反
                this.checktodo(id)
            },
            handledelete(id){
                // confirm 根据用户的交互 点确定就是真，取消就是假
                if(confirm('确定删除吗？')){
                    // 通知app删除对应的
                    this.deleteTodo(id)
                }
            }
        },
    }
</script>

<style scoped>
    /* item */
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }

    li:hover {
        background-color: #eee;
    }

    li:hover button{
        display: block;
    }
</style>
