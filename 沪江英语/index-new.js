/**
 * Created by yongze on 2017/8/16.
 */

function $(id) {
    return typeof id == 'string'?document.getElementById(id):id;
}
window.onload = function () {

    // goTop

    var goTop = $('hui-gotop');
    var timer = null;
    var isTop = true;

    window.onscroll = function () {

        // 获取页面可视高度

        var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;

        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;

        //获取滚动条距离页面高度

        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop >= clientHeight){
            goTop.style.display = "block";
        }else {
            goTop.style.display = "none";
        }
    }


    goTop.onclick = function () {
        timer = setInterval(function () {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var ispeed = Math.floor(-scrollTop / 5);
            document.body.scrollTop = scrollTop + ispeed;

            if (scrollTop == 0){
                clearInterval(timer);
            }
            isTop = true;
        },30);
    }

    // slider

    // var sliders_container = $('sliders_container');
    // var sliders = $('sliders');

    var sliders_container = document.getElementsByClassName('sliders-container');
    var sliders = document.getElementsByClassName('sliders');
    // var buttons1 = $('buttons1').getElementsByTagName('span');
    var buttons = document.getElementsByClassName('indicators');
    buttons1 = buttons[0].getElementsByTagName('span');
    buttons2 = buttons[1].getElementsByTagName('span');
    var index = 1;


    // 自动翻动

    function animate(offset,n,sliders) {
        var newLeft = parseInt(sliders.style.left) + offset;
        var maxL = offset * (n - 1);
        sliders.style.left = newLeft + 'px';
        if(newLeft >0){
            sliders.style.left = maxL + 'px';
        }
        if(newLeft <maxL){
            sliders.style.left = 0 + 'px';
        }
    }



    //自动切换

    function play1() {
        timer = setInterval(function () {

            animate(-1300,4,sliders[0]);
            index ++;
            if(index == 5){
                index = 1;
            }

            showBottons(buttons1,4);
        },3000);

    }
    function play2() {
        timer = setInterval(function () {

            animate(-275,2,sliders[1]);
            index ++;
            if(index == 3){
                index = 1;
            }

            showBottons(buttons2,2);
        },2000);

    }


    // 点亮小圆点

    var showBottons = function (buttons,n) {
        for (var i = 0;i<n;i++){
            if (buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }

        buttons[index - 1].className = 'on';
    }


    // 按钮点击时间

    function btnOn(buttons,num,n,sliders) {
        for (var i = 0;i<n;i++) {
            buttons[i].onmouseover = function () {
                myIndex = parseInt(this.getAttribute('index'));
                var offset = num * (myIndex - index);
                animate(offset,n,sliders);
                index = myIndex;
                showBottons(buttons,n);
            }
        }
    }


    btnOn(buttons1,-1300,4,sliders[0]);
    btnOn(buttons2,-275,2,sliders[1]);
    // play1();
    // play2();
    // showBottons(buttons1,4);
    // showBottons(buttons2,2);
    // animate(-1300,4);



    //停止

    function stop() {
        clearInterval(timer);
    }

    sliders_container[0].onmouseover = stop;
    sliders_container[0].onmouseout = play1;
    sliders_container[1].onmouseover = stop;
    sliders_container[1].onmouseout = play2;



    //tab

    // var titles = $('notice-tit').getElementsByTagName('li');
    var title = document.getElementsByClassName('notice-tit');
    titles1 = title[0].getElementsByTagName('li');
    titles2 = title[1].getElementsByTagName('li');
    // var divs = $('notice-con').getElementsByClassName('con-r');
    var div = document.getElementsByClassName('notice-con');
    divs1 = div[0].getElementsByClassName('con-r');
    divs2 = div[1].getElementsByClassName('con-r');
    if(titles1.length != divs1.length){
        return;
    }
    for(var i=0;i<titles1.length;i++){
        titles1[i].id = i;
        titles1[i].onmouseover = function () {
            for(var j = 0;j<titles1.length;j++){
                titles1[j].className = '';
                divs1[j].style.display = 'none';
            }
            this.className = 'on';
            divs1[this.id].style.display = 'block';
        }
    }
    for(var n=0;n<titles2.length;n++){
        titles2[n].id = n;
        titles2[n].onmouseover = function () {
            for(var j = 0;j<titles2.length;j++){
                titles2[j].className = '';
                divs2[j].style.display = 'none';
            }
            this.className = 'on';
            divs2[this.id].style.display = 'block';
        }
    }



    //左下角广告

    //使用classname 获取元素

    var TipBox = document.getElementsByClassName('header-bubble');
    var CloseBtn = document.getElementsByClassName('header-bubble-close');

    //使用id获取元素

    // var TipBox = $('TipBox'),CloseBtn = $('CloseBtn');

    //使用类名

    CloseBtn[0].onclick = function () {
        TipBox[0].style.display = 'none';
    }

    //通过添加类

    CloseBtn[0].onclick = function () {
        TipBox[0].className = 'hide';
    }

    //伸缩性广告

    // var ClickMe = $('clickMe'),showPic = $('showPic');
    //
    // ClickMe.onmouseover = function () {
    //     showPic.style.display = 'block';
    //     CloseBtn[0].style.display = 'block';
    // }
    // CloseBtn[0].onclick = function () {
    //     showPic.style.display = 'none';
    //     CloseBtn[0].style.display = 'none';
    // }

    //代码优化

    function $(id) {
        return typeof id == 'string'?document.getElementById(id):id;
    }
        $('clickMe').onmouseover = function () {
            // $('showPic').style.display = 'block';
            $('CloseBtn').style.display = 'block';
        }
        $('CloseBtn').onclick = function () {
            // $('showPic').style.display = 'none';
            $('CloseBtn').style.display = 'none';
        }


    //顶部伸缩广告

    var topAd = $('TopAd'),adCon = topAd.getElementsByTagName('img');
    var adH = 0;
    var step = 5;
    var maxH = adCon[0].height;
    var minH = $('adCur').height;

    // 广告下拉

    function adDown() {
        topAd.style.height = adH + 'px';
        topAd.style.display = 'block';
        if(adH<maxH) {
            adH +=step;
            setTimeout(adDown,1)
        }else {
            setTimeout(adUp2,3000);
        }
    }
    //广告收起

    // function adUp() {
    //     if(adH>0){
    //         adH -=step;
    //         topAd.style.height = adH +'px';
    //         setTimeout(adUp,1);
    //     }
    // }


    //有小广告图时

    function adUp2() {
        topAd.style.height = adH + 'px';
        if(adH > minH) {
            adH -= step;
            setTimeout(adUp2, 1);
        }else {
            topAd.style.display = 'none';
            $('topLayer').style.display = 'block';
            $('adClose').style.display = 'block';
        }
    }
    
    $("adClose").onclick= function () {
        $("topLayer").style.display = 'none';
    }

    // adDown();
    setTimeout(adDown,3000);

    //侧边栏广告弹出

    var dbhide = document.getElementsByClassName('dbhide');
    var dbmove = document.getElementsByClassName('dbmove');
    var dbshow = document.getElementsByClassName('dbshow');

    //没有缓慢变化的过程
    //
    // dbhide[0].onclick = function () {
    //     this.style.display = 'none';
    //     dbmove[0].style.display = 'none';
    //     dbshow[0].style.display = 'block';
    // }
    // dbshow[0].onmouseover = function () {
    //     this.style.display = 'none';
    //     dbhide[0].style.display = 'block';
    //     dbmove[0].style.display = 'block';
    // }

    //有动画过程



    //二级菜单

    var list = $('nav-list').getElementsByTagName('li');
    var layer = document.getElementsByClassName('layer');
    var layer1 = layer[0];
    // if(list.length != layer.length)
    //     return;
    for(var j = 0;j<list.length;j++){
        // layer[j].id = j;
        list[j].onmouseover = function () {
            layer1.style.display = 'block';
            // for(var i = 0;i<layer.length;i++){
            //     layer[i].id = i;
            //     if(i == j){
            //     console.log(layer[i]);
            //         layer[i].style.display = 'block';
            //     }
            // }
            // layer[this.j].style.display = 'block';
        }
        list[j].onmouseout = function () {
            for(var i = 0;i<layer.length;i++){
                layer[i].style.display = 'none';
            }
        }
    }


}
