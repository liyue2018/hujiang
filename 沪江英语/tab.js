/**
 * Created by yongze on 2017/8/12.
 */


function $(id) {
    return typeof id == 'string'?document.getElementById(id):id;
}

window.onload = function () {
    // 获取元素

    var tab_tit = $('tab_tit').getElementsByTagName('a'),
        tab_con_divs = $('tab_con').getElementsByTagName('div');
    var index = 0;
    var timer = null;

    //高亮显示的叶签索引值


    if (tab_tit.length != tab_con_divs.length) {
        return;
    }

    //手动操作

    // for(var i=0;i<tab_tit.length;i++){
    //     tab_tit[i].id = i;
    //     tab_tit[i].onmouseover = function () {
    //         clearInterval(timer3);
    //         changeOption(this.id);
    //         // for(var j = 0;j<tab_tit.length;j++){
    //         //     tab_tit[j].className = '';
    //         //     tab_con_divs[j].style.display = 'none';
    //         // }
    //         // tab_tit[this.id].className = 'active';
    //         // tab_con_divs[this.id].style.display = 'block';
    //     }
    //     tab_tit[i].onmouseout = function () {
    //
    //         timer3 = setInterval(autoPlay,2000);
    //
    //     }
    //
    // }




    //
    // if(timer3){
    //     clearInterval(timer3);
    //     timer3 = null;
    // }
    //
    // timer3 = setInterval(autoPlay,2000);




    //
    // function changeOption(curIndex) {
    //     for(var j = 0;j<tab_tit.length;j++){
    //         tab_tit[j].className = '';
    //         tab_con_divs[j].style.display = 'none';
    //     }
    //     tab_tit[curIndex].className = 'active';
    //     tab_con_divs[curIndex].style.display = 'block';
    //     index3 = curIndex;
    // }

    //自动
    //
    // function autoPlay() {
    //     index3 ++;
    //     if(index3 >= tab_tit.length){
    //         index3 = 0;
    //     }
    //     changeOption(index3);
    // }

    // function () {
    //     index += 1;
    //     if(index >= tab_tit.length){
    //         index = 0;
    //     }
    //
    //     changeOption(index);
    //     // for(var j = 0;j<tab_tit.length;j++){
    //     //     tab_tit[j].className = '';
    //     //     tab_con_divs[j].style.display = 'none';
    //     // }
    //     // tab_tit[index].className = 'active';
    //     // tab_con_divs[index].style.display = 'block';
    // }


    //遍历标题

    for (var i =0;i<tab_tit.length;i++) {
        tab_tit[i].id = i;
        tab_tit[i].onmouseover = function () {


            //用that变量来引用当前鼠标划过的a

            var that = this;
            if (timer) {
                clearTimeout(timer);
            }
            //延迟半秒执行

            timer = setTimeout(function () {
                for (var j = 0; j < tab_tit.length; j++) {
                    if (tab_tit[j].className == 'active') {
                        tab_tit[j].className = '';
                        tab_con_divs[j].style.display = 'none';
                        break;
                    }
                }
                tab_tit[that.id].setAttribute('class', 'active');
                tab_con_divs[that.id].style.display = 'block';
            }, 500);
        }
    }


    //没有延迟效果

    for (var j = 0; j < tab_tit.length; j++) {
        if (tab_tit[j].className == 'active') {
            tab_tit[j].className = '';
            tab_con_divs[j].style.display = 'none';
            break;
        }
    }
    this.setAttribute('class', 'active');
    tab_con_divs[this.id].style.display = 'block';



    // 顶部导航

    var pass_x = document.getElementsByClassName('pass_x'),
        pass_x_b = document.getElementsByClassName('pass_x_b');


        console.log(pass_x);
        pass_x.onmouseover = function () {

            alert('hello');
            var pass_x_b = this.document.getElementsByClassName(pass_x_b);
            console.log(pass_x_b);

            pass_x_b .style.display = 'block';
        }

}