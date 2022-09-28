<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <!-- 如下代码也能实现功能，但是不太推荐，因为违反原则 修改了props -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
            type="text"
            v-show="todo.isEdit"
              :value="todo.title" 
              @blur="handleBlur(todo,$event)"
              ref="inputTitle"
              >
        </label>
        <button class="btn btn-danger" @click="handledelete(todo.id)">删除</button>
        <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js';
    export default {
        name:'MyItem',
        // 声明接收todo对象
        props:['todo'],
        // mounted() {
        //   console.log(this);  
        // },
        methods: {
            // 勾选 or取消勾选
            handleCheck(id){
                // 通知app组件将对应的todo对象的done值取反
                // this.checktodo(id)
                this.$bus.$emit('checktodo',id)
            },
            handledelete(id){
                // confirm 根据用户的交互 点确定就是真，取消就是假
                if(confirm('确定删除吗？')){
                    // 通知app删除对应的
                    // this.deleteTodo(id)
                    // this.$bus.$emit('deleteTodo',id)
                    pubsub.publish('deleteTodo',id)
                }
            },
            // 编辑
            handleEdit(todo){
                // hasOwnProperty判断todo身上有没有这个属性
                if(todo.hasOwnProperty('isEdit')){
                    todo.isEdit=true
                }else{
                    // console.log('todo身上没有isEdit');
                this.$set(todo,'isEdit',true)
            }
            // 官方一点，用这个
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
            // setTimeout(()=>{
            //     this.$refs.inputTitle.focus()
            // })
            },
            // 失去焦点回调(真正执行修改逻辑)
            handleBlur(todo,e){
               todo.isEdit=false
            //    console.log('updataTodo',todo.id,e.target.value);
            if(!e.target.value.trim()) return alert('输入不能为空')
               this.$bus.$emit('updataTodo',todo.id,e.target.value)
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
