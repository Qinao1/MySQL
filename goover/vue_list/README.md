
## 脚手架文件结构
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   └── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
└── package-lock.json: 包版本控制文件

## 关于不同版本的Vue：
vue.js 与 vue.runtime.xxx.js的区别：
vue.js 是完整版的 Vue，包含：核心功能+模板解析器
vue.runtime.xxx.js 是运行版的 Vue，只包含核心功能，没有模板解析器
因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要使用 render函数接收到的createElement 函数去指定具体内容
修改默认配置项

## 使用config.js 配置文件
vue inspect > output.js 可以查看到Vue脚手架的默认配置
vue.config.js 是一个可选的配置文件，如果项目的（和 package.json 同级的）根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载
使用 vue.config.js 可以对脚手架进行个性化定制，详见配置参考 | Vue CLI 
Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置，请执行：vue inspect > output.js


## ref属性
1被用来给元素 或者子组件 注册引用信息（id的替代者）
2应用在html标签上获取的是真实DOM元素  应用在组件标签上是组件实例对象(VC)
3使用方式
        打标识 ：<h1 ref="xxx">......</h1> 或<School ref="xxx"></School>
        获取 this.$refs.xxx

## 配置项 props
     功能: 让组件接收外部传进来的数据
     （1）传递数据 
        <Demo name:"xxx">
      (2)接收数据
      第一种方式 （只接收）
        props:['name']
      第二种方式(限制类型)
      props:{
        type:Number
      }
      第三种 （限制类型，限制必要性，指定默认值）
      props:{
        name:[
                type:String, //类型
                required:true, //必要性
                default:'JOJO' //默认值
        ]
      }
      备注：props是只读的 Vue底层会监测你对props的修改 如果进行了修改 就会发出警告
      若业务需求确实需要修改 那么请复制 props的内容到data中一份 然后去修改data中的数据


## mixin（混入）
      功能： 可以把多个组件共用的配置，提取成一个混入对象
      使用方式：
         第一步定义混合  eg：
                 {
                  data（）{...}
                  mwthods:{...}
                  ...
                 }
         第二步，使用混合  eg：
         (1)全局混合 Vue.mixin(xxx)
         (2)局部混合 mixins:['xxxx']

## 插件
       功能：用于增强Vue
       本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
       定义插件：
             对象.install = function (Vue, options) {
              // 1. 添加全局过滤器
              Vue.filter(....)
              // 2. 添加全局指令
              Vue.directive(....)
              // 3. 配置全局混入
              Vue.mixin(....)
              // 4. 添加实例方法
              Vue.prototype.$myMethod = function () {...}
              Vue.prototype.$myProperty = xxxx
           }
           使用插件 Vue.use()

           
## scoped
      作用:让样式在局部生效 防止冲突
      写法:<style scoped>

## 总结TodoList案例
  1.组件化编码流程：
      拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突
      实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
      （1）一个组件在用：放在组件自身即可
      （2）一些组件在用：放在他们共同的父组件上（状态提升）
    （3）实现交互：从绑定事件开始
      2.props适用于：
      （1）父组件 ==> 子组件 通信
      （2）子组件 ==> 父组件 通信（要求父组件先给子组件一个函数）
      3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的
      
     4 props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做

## webStorage
   总结：
    存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
    浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制
    相关API：

     xxxStorage.setItem('key', 'value');
     该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值
      xxxStorage.getItem('key');
      该方法接受一个键名作为参数，返回键名对应的值
      xxxStorage.removeItem('key');
      该方法接受一个键名作为参数，并把该键名从存储中删除
      xxStorage.clear();
      该方法会清空存储中的所有数据
    备注：
    SessionStorage存储的内容会随着浏览器窗口关闭而消失
    LocalStorage存储的内容，需要手动清除才会消失
    xxxStorage.getItem(xxx)如果 xxx 对应的 value 获取不到，那么getItem()的返回值是null
    JSON.parse(null)的结果依然是null

## 组件的自定义事件
      1.一种组件间通信的方式，适用于子组件===>父组件
      2使用场景： A是组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A）
      3绑定自定义事件：
          1第一种方式，在父组件中<Demo @atguigu="test"/>或<Demo v-on:atguigu="test" />
          2第二种方式，在父组件中
          <Demo ref="demo"/>
            ......
            mounted(){
              this.$refs.xxx$on('atguigu',this.test) //提前准备好test
            }
          3若想要事件，只能触发一次，可以使用once修饰符，或$once方法
      4触发自定义事件： this.$emit('atguigu',数据)
      5解绑·自定义事件 this.$off('atguigu')
      6组件上也可以绑定原生 DOM事件 需要使用native修饰符
      7注意，通过this.$refs.xxx$on('atguigu',回调) 绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题
      箭头函数，没有this向外找

## 全局事件总线 (GlobalEventBus)  任意组件间通信
    1一种组件间的通信方式，适用于任意组件间通信
    2安装全局事件总线：
      new Vue(){
        ...
        deforeCreate(){
          Vue.prototype.$bus=this //安装全局事件总线， $bus就是当前应用的vm
        }
        ...
      }
    3使用事件总线
      1.接收数据 A组件想接收数据，则在A组件中给$bus绑定事件，事件的回调留在A组件自身
      methods(){
        demo(data){
          .......
        }
      }
      ...
      mounted(){
        this.$bus.$on('xxx',this.demo)  //不写demo 直接写回调，需要写箭头函数
      }
      2提供数据 this.$bus.$emit('xxx',数据)
    4最好在beforeDestory钩子中，用$off去解绑当前组件所用到的事件
    
## 消息订阅与发布
   1一种组件间通信方式，适用于任意组件间通信
   2使用步骤
     1.安装pubsub:npm i pubsub-js
     2引入 import pubsub from 'pubsub-js'
     3接收数据 A组件想接收消息,则在A组件中，订阅消息，点阅的回调留在A组件自身
     methods(){
      demo(data){
        ....
      }
     }
     ....
     mounted(){
      this.pid=pubsub.subscribe('xxx',this.demo)//订阅消
     }
    4提供数据 pubsub.ppublish('xxx',数据)
    5最好在beforeDestory钩子中，用 pubSub.unSubscribe(pid) 去取消订阅

## nextTick
   语法:this.nextTick(回调函数)
   作用：在下一次dom更新结束后执行其指定的回调
   什么时候用，当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行

## Vue封装的过渡与动画
     1作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名
     3写法
       1准备好样式：
         元素进入的样式：
           v-enter：进入的起点
           v-enter-active：进入过程中
           v-enter-to：进入的终点
         元素离开的样式：
           v-leave：离开的起点
           v-leave-active：离开过程中
           v-leave-to：离开的终点
      2使用<transition>包裹要过度的元素，并配置name属性：
         <transition name="hello">
         	   <h1 v-show="isShow">你好啊！</h1>
         </transition>
     
      3备注：若有多个元素需要过度，则需要使用：<transition-group>，且每个元素都要指定key值
    
## Vue脚手架配置代理
   vue脚手架配置代理服务器：
    方法一：在vue.config.js中添加如下配置：
    devServer:{
           proxy:"http://localhost:5000"
          }
  说明：
     优点：配置简单，请求资源时直接发给前端即可
     缺点：不能配置多个代理，不能灵活的控制请求是否走代理
     工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）
    方法二：
    编写Vue.config.js配置具体代理规则
      devServer: {
          proxy: {
            	'/api1': { // 匹配所有以 '/api1'开头的请求路径
              	target: 'http://localhost:5000',// 代理目标的基础路径
              	changeOrigin: true,
              	pathRewrite: {'^/api1': ''}
            	},
            	'/api2': { // 匹配所有以 '/api2'开头的请求路径
              	target: 'http://localhost:5001',// 代理目标的基础路径
              	changeOrigin: true,
              	pathRewrite: {'^/api2': ''}
            	}
          }
     }
    changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
    changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
    changeOrigin 默认值为true
    说明：
    优点：可以配置多个代理，且可以灵活的控制请求是否走代理
    缺点：配置略微繁琐，请求资源时必须加前缀

## 插槽
     1 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件==>子组件 
     2 分类：默认插槽、具名插槽、作用域插槽
     3使用方式
        1.默认插槽
           父组件中：
                <Category>
                   	<div>html结构1</div>
                </Category>
           子组件中：
                <template>
                    <div>
                       	<slot>插槽默认内容...</slot>
                    </div>
                </template>
        2.具名插槽
           父组件中：
               <Category>
                   <template slot="center">
                    	 <div>html结构1</div>
                   </template>
  
                   <template v-slot:footer>
                      	<div>html结构2</div>
                   </template>
               </Category>
           子组件中：
               <template>
                   <div>
                   定义插槽
                      	<slot name="center">插槽默认内容...</slot>
                       <slot name="footer">插槽默认内容...</slot>
                   </div>
               </template>
       3.作用域插槽
        1.理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定（games数据在Category组件中，但使用数据所遍历出来的结构由App决定）
        2.具体编码
           父组件中：
          		<Category>
          			<template scope="scopeData">
          				<!-- 生成的是ul列表 -->
          				<ul>
          					<li v-for="g in scopeData.games" :key="g">{{g}}</li>
          				</ul>
          			</template>
          		</Category>
          
          		<Category>
          			<template slot-scope="scopeData">
          				<!-- 生成的是h4标题 -->
          				<h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
          			</template>
          		</Category>
           子组件中：
              <template>
                  <div>
                      <slot :games="games"></slot>
                  </div>
              </template>
         
              <script>
                  export default {
                      name:'Category',
                      props:['title'],
                      //数据在子组件自身
                      data() {
                          return {
                              games:['红色警戒','穿越火线','劲舞团','超级玛丽']
                          }
                      },
                  }
              </script>
              备注,作用域插槽，也可以有名字

## 理解Vuex
   Vuex是什么
      1.概念： 专门在Vue中实现集中式状态（数据）管理的一个Vue插件 对Vue应用中多个组件的共享状态进行集中式的管理（读/写）
      也是一种组件间通信的方式。且适用于任意组件间通信
   什么时候用Vuex
      <!-- 1.多个组件依赖于同一状态
      2.来自不同组件的行为，需要变更同一状态 -->
      多个组件需要共享数据时
   搭建vuex环境
   1.创建文件 src/store/index.js
   2在main.js中创建vm时传入store 配置项

## 基本使用
    1初始化数据，配置actions 配置mutations 操作文件 store.js
    2组件读取vuex中的数据 $store.sate.sum 
    3组件中修改vuex中的数据 $store.dispatch('action中的方法名',数据)或$store.commit('mutations中的方法名,数据')
       备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions 即不写dispatch 直接编写commit 

## getters的使用
   1.概念  当state中的数据需要加工后再使用时，可以使用geeters加工
   2在store.js中追加getters配置
   3组件中读取数据 $store.getters.bigSum

## 四个map方法使用
      mapState方法：用于帮助我们映射state中的数据
           computed: {
               //借助mapState生成计算属性：sum、school、subject（对象写法）
                ...mapState({sum:'sum',school:'school',subject:'subject'}),
                    
               //借助mapState生成计算属性：sum、school、subject（数组写法）
               ...mapState(['sum','school','subject']),
           },
      
      mapGetters方法：用于帮助我们映射getters中的数据
           computed: {
               //借助mapGetters生成计算属性：bigSum（对象写法）
               ...mapGetters({bigSum:'bigSum'}),
           
               //借助mapGetters生成计算属性：bigSum（数组写法）
               ...mapGetters(['bigSum'])
           },
           mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数

      mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数
           methods:{
               //靠mapActions生成：incrementOdd、incrementWait（对象形式）
               ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
           
               //靠mapActions生成：incrementOdd、incrementWait（数组形式）
               ...mapActions(['jiaOdd','jiaWait'])

      mapMutations方法：用于帮助我们生成与mutations对话的方法，即：包含$store.commit(xxx)的函数
           methods:{
               //靠mapActions生成：increment、decrement（对象形式）
               ...mapMutations({increment:'JIA',decrement:'JIAN'}),
               
               //靠mapMutations生成：JIA、JIAN（对象形式）
               ...mapMutations(['JIA','JIAN']),
           }
    备注：mapActions与mapMutations使用时，若需要传递参数，则需要在模板中绑定事件时传递好参数，否则参数是事件对象


## 模块化加命名空间
    1.目的 让代码更好维护，让多种数据分类更加明确
    2修改store.js
        const countAbout = {
        	namespaced:true,//开启命名空间
        	state:{x:1},
            mutations: { ... },
            actions: { ... },
          	getters: {
            	bigSum(state){
               		return state.sum * 10
            	}
          	}
        }
       
       const personAbout = {
         	namespaced:true,//开启命名空间
         	state:{ ... },
         	mutations: { ... },
         	actions: { ... }
       }
    
       const store = new Vuex.Store({
         	modules: {
           	countAbout,
           	personAbout
         	}
       })
    3开启命名空间后 组件读取sate数据
      //方式一：自己直接读取
      this.$store.state.personAbout.list
      //方式二：借助mapState读取：
      ...mapState('countAbout',['sum','school','subject'])
    4开启命名空间后 组件中读取getters数据
       //方式一：自己直接读取
       this.$store.getters['personAbout/firstPersonName']
       //方式二：借助mapGetters读取：
       ...mapGetters('countAbout',['bigSum'])
    5开启命名空间后，组件中调用dispatch
       //方式一：自己直接dispatch
       this.$store.dispatch('personAbout/addPersonWang',person)
       //方式二：借助mapActions：
       ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
    6开启命名空间后，组件中调用commit
       //方式一：自己直接commit
       this.$store.commit('personAbout/ADD_PERSON',person)
       //方式二：借助mapMutations：
       ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),


## vue-router
   vue的一个插件库  专门用来实现SPA应用
   对SPA的理解  
   1单页web应用（single page web application SPA）
   2整个应用，只有一个完整的页面
   3点击页面中的导航链接 ，不会刷新页面，只会做页面的局部刷新·
   4数据需要通过ajax请求获取


## 路由
   一个路由就是一组映射关系（key-value）
   key为路径，value可能是function或component/组件
   1路由就是一组key-value的对应关系
    2多个路由，需要经过路由器的管理   路由route  路由器rout
   路由分类
   1.前端路由
      理解，vavlue是component 用于展示页面内容
      2工作过程  当浏览器的路径改变时。对应的组件就会显示
   2.后端路由
      理解  value是function 用于处客户端的请求
      工作过程  服务器接收到一个请求时，根据请求路径找到匹配函数来处理请求 返回相应数据

   基本使用
   1安装vue-router，命令：npm i vue-router
   2应用插件：Vue.use(VueRouter)
   3编写router配置项：
       //引入VueRouter
      import VueRouter from 'vue-router'
      //引入Luyou 组件
      import About from '../components/About'
      import Home from '../components/Home'
      
      //创建router实例对象，去管理一组一组的路由规则
      const router = new VueRouter({
      	routes:[
      		{
      			path:'/about',
      			component:About
      		},
      		{
      			path:'/home',
      			component:Home
      		}
      	]
      })
      
      //暴露router
      export default router
    4实现切换（active-class可配置高亮样式）：
    <router-link active-class="active" to="/about">About</router-link>
    5指定展示位：<router-view></router-view>

几个注意点
  1.路由组件通常存放在pages文件夹中，一般组件通常存放在components文件夹
  2通过切换，隐藏了 的路由组件，默认是被销毁的，需要的时候，再去挂载
  3每一个组件都有自己的$route属性  里面存储着自己的路由信息
  4整个应用，只有一个router 可以通过组件的$router属性获取到

## 多级路由
   1配置路由规则，使用children配置项：
           routes:[
        	{
        		path:'/about',
        		component:About,
        	},
        	{
        		path:'/home',
        		component:Home,
        		children:[ //通过children配置子级路由
        			{
        				path:'news', //此处一定不要写：/news
        				component:News
        			},
        			{
        				path:'message', //此处一定不要写：/message
        				component:Message
        			}
        		]
        	}
        ]
   2跳转（要写完整路径）：<router-link to="/home/news">News</router-link>

## 路由的query参数
    传递参数：
    跳转并携带query参数，to的字符串写法
    <router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
    				
    跳转并携带query参数，to的对象写法
    <router-link :to="{
    	path:'/home/message/detail',
    	query:{
    		id:666,
        title:'你好'
    	}
    }"
    >跳转</router-link>
    
    接收参数：
    $route.query.id
    $route.query.title

## 命名路由
  1.作用，可以简化路由的跳转
  2如何使用
     1给路由命名
    {
     	path:'/demo',
     	component:Demo,
     	children:[
     		{
     			path:'test',
     			component:Test,
     			children:[
     				{
              name:'hello' //给路由命名
     					path:'welcome',
     					component:Hello,
     				}
     			]
     		}
     	]
     }
    2简化跳转
    <!--简化前，需要写完整的路径 -->
    <router-link to="/demo/test/welcome">跳转</router-link>
    
    <!--简化后，直接通过名字跳转 -->
    <router-link :to="{name:'hello'}">跳转</router-link>
    
    <!--简化写法配合传递参数 -->
    <router-link 
    	:to="{
    		name:'hello',
    		query:{
    		    id:666,
                title:'你好'
    		}
    	}"
    >跳转</router-link>


## 路由的params参数
   1.配置路由，声明接收params参数
    {
     	path:'/home',
     	component:Home,
     	children:[
     		{
     			path:'news',
     			component:News
     		},
     		{
     			component:Message,
     			children:[
     				{
     					name:'xiangqing',
     					path:'detail/:id/:title', //使用占位符声明接收params参数
     					component:Detail
     				}
     			]
     		}
     	]
     }
   2.传递参数
      <!-- 跳转并携带params参数，to的字符串写法 -->
      <router-link :to="/home/message/detail/666/你好">跳转</router-link>	
      <!-- 跳转并携带params参数，to的对象写法 -->
         <router-link 
         	:to="{
         		name:'xiangqing',
         		params:{
         		   id:666,
                     title:'你好'
         		}
         	}"
         >跳转</router-link>
    特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

   3接收参数
    $route.params.id
    $route.params.title

## 路由的props配置
   作用：让路由组件更方便的收到参数
      {
      	name:'xiangqing',
      	path:'detail/:id',
      	component:Detail,
      
      	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
      	// props:{a:900}
      
      	//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
      	// props:true
      	
      	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
      	props(route){
      		return {
      			id:route.query.id,
      			title:route.query.title
      		}
      	}
      }

## <router-link>的replace属性
   作用：控制路由跳转时操作浏览器历史记录的模式
   浏览器的历史记录有两种写入方式：push和replace，其中push是追加历史记录，replace是替换当前记录。路由跳转时候默认为push方式
   如何开启replace模式  <router-link replace...>  news <router-link>   replace="true"

## 编程式路由导航
  1.作用 不借助<router-link>实现路由跳转 让路由更加灵活
  2.具体编码
    this.$router.push({
    	name:'xiangqing',
        params:{
            id:xxx,
            title:xxx
        }
    })
    
    this.$router.replace({
    	name:'xiangqing',
        params:{
            id:xxx,
            title:xxx
        }
    })
    this.$router.forward() //前进
    this.$router.back() //后退
    this.$router.go() //可前进也可后退

## 缓存路由组件
   1.作用 让不展示的路由组件保持挂载 不被销毁
   2具体编码
      <keep-alive inclde="News"> //写组件名，不写就是，都保持挂载 多个的话，:inclde=["News",Message]
     <router-view></router-view>
     </keep-alive>

## 两个新的生命周期钩子
   1.作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态
   2.具体名字
          1.activated 路由组件被激活时触发
          2.deactivated 路由组件失活时触发
  
## 路由守卫 
        作用 对路由进行权限控制
        分类 全局守卫 独享守卫 组件内守卫
        3全局守卫
          全局前置守卫，初始化执行，每次路由切花执行
          router.beforeEach((to, from, next) => {
              console.log('前置路由守卫',to, from);
         if (to.meta.isAuth) {//判断当前路由，是否需要进行权限控制
             if (localStorage.getItem('school') === 'atguigu') { //控制权限的具体规则
                 next()//放行
             } else {
                 alert('暂无权限查看')
                 //next({name:'guigu'})
             }
         } else {
             next()放行
         }
     })
     
     // 全局前置路由守卫---初始化时执行，每次路由切换之后执行
     router.afterEach((to, from)=>{
         console.log('后置路由守卫',to,from);
         document.title= to.meta.title   //修改网页title
     })else{
       document.title='vue)_test'
     }
     export default router

## 独享守卫 只有前置守卫
    beforeEach(to,from,next){
       console.log('前置路由守卫', to, from);
           if (to.meta.isAuth) {//判断是否需要鉴权
               if (localStorage.getItem('school') === 'atguigu') {
                   next()
               } else {
                   alert('学习名不对')
               }
            } else {
               next()
            }

## 组件内守卫
   //进入守卫，通过路由规则，进入改组件时被调用
   beforeRouteEnter(to,from,next){},
   离开守卫 通过路由规则，离开该组件时被调用
   beforeRouteLeave(to,from,next){}

## 路由器的两种工作模式
   1对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值
   2hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器
   3hash模式：
    
    1地址中永远带着#号，不美观
    2若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法
    3兼容性较好
  4history模式：
    地址干净，美观
    兼容性和hash模式相比略差
    应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题

## Vue UI 组件库
   移动端常用UI组件库
   Vant https://youzan.github.io/vant
   Cube UI https://didi.github.io/cub-ui
   Mint UI https://mint-ui.github.io
   
   PC端常用UI库
   Element UI https://elemet.eleme.cn
   IView UI https://www.iviewui.com