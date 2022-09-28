window.addEventListener('load', function () {
    var licon = document.querySelector('.licon');
    var ricon = document.querySelector('.ricon');
    var focus = document.querySelector('.focus');
    var imgs = document.querySelectorAll('.focus ul li img');
    var focusWidth = focus.offsetWidth;
    
   
    focus.addEventListener('mouseenter', function () {
        licon.style.display = 'block';
        ricon.style.display = 'block';
        clearInterval(timer);
        timer = null;//清除定时器变量
    })
    focus.addEventListener('mouseleave', function () {
        licon.style.display = 'none';
        ricon.style.display = 'none';
        timer = setInterval(function () {
            // 手动调用点击事件
            ricon.click();
        }, 2000)
    })
    // 动态生成小圆圈
    var ul = focus.querySelector('ul');

    var ol = focus.querySelector('.circle');


    for (var i = 0; i < ul.children.length; i++) {
        //创建一个小li  
        var li = this.document.createElement('li');

        // 记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i);
        // 把小li插入到ol里面
        ol.appendChild(li);
        // 小圆圈的排他思想  我们可以直接生成小圆圈的同时 直接绑定点击事件
        li.addEventListener('click', function () {
            //干掉所有人，把所有的小li 清除current类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下我自己  当前的小li   设置current类名
            this.className = 'current';
            // 点击小圆圈 移动图片 当然，移动的是ul
            // ul移动的距离  小圆圈的索引号 乘以 图片的宽度 注意是-值就拿到了当前小li 的索引号

            // 当我们点击了某个小li 
            var index = this.getAttribute('index');
            // 当我们点击了某个小li   就要把这个看、li 的索引号 给num
            num = index;
            // 当我们点击了某个小li   就要把这个看、li 的索引号 给circle
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    //把ol里面的第一个小li设置类名为current
    ol.children[0].className = 'current';
    // 克隆第一张图片(li)，放到ul  最后面 
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 点击右侧按钮 图片滚动一张
    var num = 0;
    var circle = 0;
    // flag节流阀
    var flag = true;
    ricon.addEventListener('click', function () {
        if (flag) {
            flag = false;//关闭节流阀
            // 如果走到了最后复制的图片，此时ul要快速复原 left改为0；
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;//打开节流阀
            });
            // 点击右侧按钮，小圆圈也跟着变化，可以再声明一个变量控制小圆圈的播放
            circle++;
            // 如果circle =3说明最后走到我们克隆的这张图片了 我们就复原
            if (circle == ol.children.length) {

                circle = 0;
            }
            // 先清除其余小圆圈的类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下当前小圆圈的类名
            ol.children[circle].className = 'current';
        }
    })
    // 左侧按钮
    licon.addEventListener('click', function () {
        if (flag) {
            flag = false;//关闭节流阀
            // 如果走到了最后复制的图片，此时ul要快速复原 left改为0；
            if (num == 0) {
                num = ul.children.length - 1
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;//打开节流阀
            });
            // 点击左侧按钮，小圆圈也跟着变化，可以再声明一个变量控制小圆圈的播放
            circle--;
            // 如果circle<0  说明第一张图片  ，则小圆圈要改为第四个小圆圈（3）
            // if (circle<0){
            //     circle=ol.children.length-1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            //调用函数
            circleChange();
        }
        function circleChange() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下当前小圆圈的类名
            ol.children[circle].className = 'current';
        }
    })
    var timer = setInterval(function () {
        // 手动调用点击事件
        ricon.click();
    }, 2000)
})