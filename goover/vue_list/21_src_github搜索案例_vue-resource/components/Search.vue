<template>
    <section class="jumbotron">
		<h3 class="jumbotron-heading">搜索github用户</h3>
		<div>
            <input type="text" placeholder="输入你搜索的名字" v-model="keyWord"/>&nbsp;
            <button @click="srarchUsers">Search</button>
		</div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'Search',
        data() {
            return {
                keyWord:''
            }
        },
        methods:{
            srarchUsers(){
                // console.log(this);
                // 请求前，更新List的数据
                this.$bus.$emit('updataListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
                this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response=>{
                        // console.log('请求成功了',response.data.items);
                        // this.$bus.$emit('updataListData',response.data.items)
                        // this.$bus.$emit('updataListData',false,false,'',response.data.items)
                        // 请求成功后，更新List数据
                        this.$bus.$emit('updataListData',{isLoading:false,errMsg:'',users:response.data.items})
                    },
                    error=>{
                        
                        // console.log('请求失败了',error.message);
                        // 请求失败后
                        this.$bus.$emit('updataListData',{isLoading:false,errMsg:error.message,users:[]})
                    }
                )
            }
        }
    }
</script>
