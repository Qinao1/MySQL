// var that;

class Tab {
    constructor(id) {
        // that = this;

        // console.log(that);
        //获取元素
        // console.log(id);
        this.main = document.querySelector(id);
        // console.log(this.main);

        this.add = this.main.querySelector(".add");
        // li的父元素
        this.ul = this.main.querySelector('.fisrstnav ul');
        // console.log(this.ul);
        this.fsection = this.main.querySelector('.tabscon');
        // console.log(this.sections);
        this.init();
    }
    init() {
        this.updateNode();
        // init 初始化操作 让相关的元素 绑定事件
        this.add.onclick = this.addTab.bind(this.add,this);
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i],this);
            this.remove[i].onclick = this.removeTab.bind(this.remove[i],this);
            this.spans[i].ondblclick = this.ediTab;
            this.sections[i].ondblclick = this.ediTab;
        }
    }
    // 获取所有的小li和section  因为我们动态添加元素  需要重新获取的元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        // console.log(this.lis);
        this.sections = this.main.querySelectorAll('section');
        // console.log(that.sections);
        this.remove = this.main.querySelectorAll('.guanbi');
        // console.log(this.remove);
        this.spans = this.main.querySelectorAll(".fisrstnav li .qwer");
    }
    // 1切换功能
    toggleTab(that) {
        // console.log(thi.index);
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conaction';
        //   console.log(that.sections);
    }
    // 清除所有li和section的类
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = "";
            this.sections[i].className = '';
            // alert(1)
        }
    }
    // 2添加功能
    addTab(that) {
        that.clearClass();
        // alert(1)
        var random = Math.random();
        // 创建li元素和section 元素
        var li = ' <li class="liactive"><div class="qwer">新选项卡</div><span class="guanbi">x</span></li>';
        var section = '<section class="conaction">测试' + random + '</section>';
        // console.log(section);
        // console.log(li);
        // 把这两个元素 追加到父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);

        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3删除功能
    removeTab(that,e) {
        e.stopPropagation();//阻止冒泡  防止触发li 的切换点击事件
        var index = this.parentNode.index;
        // 根据索引号 删除对应 的li 和section  remove() 方法可以直接删除指定元素
        // console.log(index);
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当我们删除的不是选中状态的li的时候   原来的选中的li 保持不变
        if (document.querySelector('.liactive')) return;
        // 当我们删除了选定状态的这个li的时候  让它前一个li  处于选定状态
        index--;
        // 手动调用点击事件 不需要鼠标触发
        that.lis[index] && that.lis[index].click();
    }
    // 4修改功能
    // ondblclick双击
    // 如果双击文字  会默认选定文字  此时需要双击禁止选中文字
    // window.getSelection ? window.getSelection().removeAllRanges(): document.selection.empty();
    ediTab() {
        var str = this.innerHTML;
        // console.log(str);
        // str是i里面的文字
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // alert(11) //看有没有这个功能
        this.innerHTML = '<input type="text" equired="equired">';
        var input = this.children[0];
        // console.log(this.children[0]);
        // 这个
        input.value = str;
        input.select();  //文本框的里面的文字处于选定状态
        //当我们离开文本框 就把文本框里面的值给 i
        input.onblur = function () {
            
            // this.parentNode.innerHTML = this.value;
            // console.log(this.value);
            setTimeout(() => {
                this.parentNode.innerHTML = this.value;
           }, 0)   
            
        };
        //按下回车 也可以把文本框里面的值给 i
        input.onkeyup = function (e) {
            // console.log(e.keyCode);
            if (e.keyCode === 13) {
                //手动调用表单失去焦点事件  不需要鼠标离开操作
                // this.onblur();
                // alert(11)
                this.parentNode.innerHTML = this.value;
            }
        }
    }
}
new Tab('#tb');
// var tab=new Tab('#tb');
// tab.init();