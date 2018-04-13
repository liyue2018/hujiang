/**
 * Created by yongze on 2017/8/9.
 */

// window.onload = function () {
//     var container = document.getElementById('container');
//     var list = document.getElementById('list');
//     var buttons = document.getElementById('buttons').getElementsByTagName('span');
//     var prev = document.getElementById('prev');
//     var next = document.getElementById('next');
//     var index = 1;
//     var animated = false;
//     var timer = null;
//
//
//     // 点亮小圆点
//
//     var showButton =function () {
//         for(var i = 0;i<buttons.length;i++){
//             if(buttons[i].className == 'current'){
//                 buttons[i].className = '';
//                 break;
//             }
//         }
//         buttons[index - 1].className = 'current';
//     }
//
//     // 箭头移动函数
//
//     function animate(offset) {
//         animated = true;
//         var newLeft = parseInt(list.style.left) + offset;
//         var time = 300;//位移总时间
//         var interval = 10;//位移间隔时间
//         var speed = offset /(time/interval);//每次位移量
//
//         function go() {
//             if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
//                 list.style.left = parseInt(list.style.left) + speed + 'px';
//                 setTimeout(go,interval)
//             }
//             else {
//                 animated = false;
//                 list.style.left = newLeft + 'px';
//                 if(newLeft > -366){
//                     list.style.left = -1830 + 'px';
//                 }
//                 if(newLeft < -1830){
//                     list.style.left = -366 + 'px';
//                 }
//             }
//         }
//
//         go();
//
//     }
//
//     // play
//
//     function play() {
//         timer = setInterval(function () {
//             next.onclick();
//         },3000);
//     }
//
//     // 停止
//     function stop() {
//         clearInterval(timer);
//     }
//
//     // 右箭头
//
//     next.onclick = function () {
//         if(index == 5){
//             index = 1;
//         }else {
//             index += 1;
//         }
//         showButton();
//         if(!animated){
//             animate(-366);
//         }
//     }
//
//     // 左箭头
//
//     prev.onclick = function () {
//         if(index == 1){
//             index = 5;
//         }else {
//             index -= 1;
//         }
//         showButton();
//         if(!animated){
//             animate(366);
//         }
//     }
//     for(var i = 0;i < buttons.length;i ++){
//         buttons[i].onmouseover = function () {
//             if(this.className == 'current'){
//                 return;
//             }
//             var myIndex = parseInt(this.getAttribute('index'));
//             var offset = -366 * (myIndex - index);
//             if(!animated){
//                 animate(offset);
//             }
//             index = myIndex;
//             showButton();
//         }
//     }
//
//     container.onmouseover = stop;
//     container.onmouseout = play;
//     play();
// }

window.onload =function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var timer = null;
    var animated = false;


    // 点亮原点

    var showButtons = function () {
        for(var i = 0;i<buttons.length;i++){
            if(buttons[i].className == 'current'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'current';
    }

    // 自动切换

    var play = function () {
        timer = setInterval(function () {
            next.onclick();
        },3000);
    }

    // stop

    var stop =function () {

        clearInterval(timer);
    }

    function animate(offset) {
        var newLeft = parseInt(list.style.left) + offset;
        animated = true;

        // 动画

        var time = 300;//位移总时间；
        var interval = 10;//位移间隔时间
        var speed = offset/(time/interval);//每次位移量

        var go = function () {
            if((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)){
                list.style.left = parseInt(list.style.left) + speed +'px';
                setTimeout(go,10);
            }
            else {
                animated = false;

                list.style.left = newLeft + 'px';

                if (newLeft < -1830){
                    list.style.left = -366 + 'px';
                }
                if (newLeft > -366){
                    list.style.left = -1830 + 'px';
                }
            }
        }

        go();


    }
    next.onclick = function () {
        // list.style.left = parseInt(list.style.left) - 366 +'px';

        if(index == 5){
            index = 1;
        }
        else{
            index += 1;
        }
        // index += 1;

        showButtons();
        animate(-366);
    }

    prev.onclick = function () {
        // list.style.left = parseInt(list.style.left) + 366 +'px';


        if(index == 1){
            index = 5;
        }
        else{
            index -= 1;
        }

        // index -= 1;

        showButtons();
        animate(366);
    }

    // 按钮点击时间
    
    for(var i =0;i<buttons.length;i++){
        buttons[i].onclick = function () {
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -366 * (myIndex - index);
            animate(offset);
            index = myIndex;
            showButtons();
        }
    }

    container.onmouseover = stop;
    container.onmouseout = play;



    // 文化娱乐
    //
    // var yu_le_container = document.getElementById('yu_le_container');
    // var yu_le_list = document.getElementById('yu_le_list');
    // var yu_le_prev = document.getElementById('yu_le_prev');
    // var yu_le_next = document.getElementById('yu_le_next');
    //
    // // animate
    //
    // yu_le_next.onclick = function () {
    //     animate(-640);
    // }
    // yu_le_prev.onclick = function () {
    //     animate(640);
    // }
    //
    // // 视听学习
    var container2 = document.getElementById('shi_ting_container');
    var list2 = document.getElementById('shi_ting_list');
    var buttons2 = document.getElementById('shi_ting_buttons').getElementsByTagName('span');
    var prev2 = document.getElementById('shi_ting_prev');
    var next2 = document.getElementById('shi_ting_next');
    var timer2 = null;
    var index2 = 1;





    // 点亮源点



    var showButtons2 = function () {
        for(var i = 0;i<buttons2.length;i++){
            if(buttons2[i].className == 'current'){
                buttons2[i].className = '';
                break;
            }
        }
        buttons2[index2 - 1].className = 'current';
    }

    // 自动切换

    var play2 = function () {
        timer2 = setInterval(function () {
            next2.onclick();
        },3000);
    }

    var stop2 = function () {
        clearInterval(timer2);
    }


    // animate

    var animate2 = function (offset2) {
        var newLeft2 = parseInt(list2.style.left) + offset2;
        list2.style.left = newLeft2 + 'px';
        if(newLeft2 > 0){
            list2.style.left = -3280 + 'px';
        }
        if(newLeft2 < -3280){
            list2.style.left = 0 + 'px';
        }
    }

    next2.onclick = function () {
        if(index == 6){
            index = 1;
        }
        else{
            index += 1;
        }
        showButtons2();
        animate2(-656);
    }
    prev2.onclick = function () {

        if(index == 1){
            index = 6;
        }
        else{
            index -= 1;
        }
        showButtons2();
        animate2(656);
    }

    // 按钮划过


    for(var n = 0;n<buttons2.length;n++){
        buttons2[n].onclick = function () {
            var myIndex2 = parseInt(this.getAttribute('index'));
            var offset2 = -656 * (myIndex2 - index2);
            animate2(offset2);
            index2 = myIndex2;
            showButtons2();
        }
    }


    //
    // for(var n = 0;n < buttons2.length;n ++){
    //     buttons2[n].onmouseover =  function () {
    //         var myIndex2 = parseInt(this.getAttribute('index'));
    //         var  offset2 = -656*(myIndex2 - index2);
    //         animate2(offset2);
    //         index2 = myIndex2;
    //         showButtons2();
    //     }
    // }

    container2.onmouseover = stop2;
    container2.onmouseout = play2;
}
