<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyBottom",
  props: ["todos"],
  computed: {
    doneTotal() {
      // let i=0
      // this.todos.forEach((todos) => {
      //     if(todos.done) i++
      // });
      // return
      /*  const x= this.todos.reduce((pre,current)=>{
                    // console.log(pre);
                    return pre+(current.done ? 1:0)
                },0)
                console.log(3); */
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    total() {
      return this.todos.length;
    },
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        // this.checkAllTodo(value);
        this.$emit("checkAllTodo", value);
      },
    },
  },
  methods: {
    // checkAll(e) {
    //     this.checkAllTodo(e.target.checked);
    // },
    // 清除所有已完成
    clear() {
      // this.clearAll();
      this.$emit('clearAll');
    },
  },
};
</script>

<style scoped>
/* bottom */
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
