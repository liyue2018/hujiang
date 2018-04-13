/**
 * Created by yongze on 2017/8/4.
 */

// 页面加载完之后触发

// window.onload=function () {
//     var obtn = document.getElementById('hui-gotop-btn');
//     // 获取页面可视区高度
//     var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
//     var timer = null;
//     var isTop = true;
//
//     // 滚动条的滚动时触发
//     window.onscroll = function () {
//         // 获取滚动条距离顶部的高度
//         var osTop = document.body.scrollTop || document.documentElement.scrollTop;
//         if(osTop >= clientHeight ){
//             obtn.style.display = 'block';
//         } else{
//             obtn.style.display = 'none';
//         }
//         if(!isTop){
//             clearInterval(timer);
//         }
//         isTop = false;
//     }
//     obtn.onclick=function () {
//
//         // 设置定时器
//
//         timer = setInterval(function () {
//             var osTop = document.body.scrollTop || document.documentElement.scrollTop;
//             var ispeed = Math.floor(-osTop / 6);
//
//             // 谷歌浏览器
//                 document.body.scrollTop = osTop + ispeed;
//                 // console.log(osTop - ispeed);
//                 // IE浏览器
//                 document.documentElement.scrollTop = osTop + ispeed;
//                 isTop = true;
//             // document.documentElement.scrollTop = document.body.scrollTop -= 50;
//             // 清楚定时器
//             if(osTop == 0){
//                 clearInterval(timer);
//             }
//         },30);
//     }
// }



// 页面加载时运行

window.onload = function () {
    var obtn = document.getElementById('hui-gotop-btn');
    // 获取页面可视区高度
    var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;
    // 滚轴滚动时运行
    window.onscroll = function () {
        // 获取页面距离顶部的距离

        var osTop = document.body.scrollTop || document.documentElement.childElementscrollTop;
        if(osTop >= clientHeight){
            obtn.style.display = 'block';
        }else{
            obtn.style.display = 'none';
        }
        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;
    }

    // 页面点击时运行

    obtn.onclick = function () {
        // 设置定时器
        timer = setInterval(function () {
            var osTop = document.body.scrollTop || document.documentElement.scrollTop;
            var ispeed = Math.floor(-osTop / 6);
            document.body.scrollTop = osTop + ispeed;
            console.log(osTop);
            if (osTop == 0){
                clearInterval(timer);
            }
            isTop = true;

        },30);

        }
}