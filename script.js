function my$(id) {
    return document.getElementById(id);
}
var contain = document.getElementsByClassName('contain');
var show = my$('show');
// 选择菜品元素
var dishes = document.getElementsByClassName('dishes')[0];
var svgList = dishes.children;
// 选择父级元素ul
var ul = my$('choose').childNodes[1].children;
// 定义颜色rgb
function rgb (r,g,b) {
    return ["rgb(",r,",",g,",0",b,")"].join("");
}
// 表现层的颜色
var arr = [];
for(var i=0;i<svgList.length;i++) {
    // debugger;
    var j = Math.floor((Math.random()*i*10+150));
    var n = Math.floor(Math.random()*i*10);
    // svgList[i].style.backgroundColor = rgb(i,j,n);
    // object[i] = i;
    // object[j]=j;
    // object[n]=n;
    var str = i + ',' + j + ',' + n;
    arr.push(str);
}
function animate(random) {
    var now = +new Date();
    var timerid = setInterval(function() {
        var current = +new Date();
        if((current-now)>100) {
            svgList[random].style.backgroundColor = '';
            
        }
    },10)

}


// 随机添加背景颜色

var showSvg = contain[0].children[0];
var svgArray = Array.from(svgList);
svgArray.forEach((element,i) => {
    element.setAttribute('index',i)
}); 
// 为点一样li绑定事件
ul[0].onclick = choose;
// 为点两样li绑定事件
ul[1].onclick = choose;
// ul[1].onclick = choose1;
    
// function chooseTwith() {
//     debugger;
//     for(var m= 0;m<2;m++) {
//         choose();
//     }
// }


var round = 0;

// 执行清除显示栏和开启随机选择效果
function choose(e) {
    round++;
    debugger;
    var time = Number(e.currentTarget.getAttribute('index'))-1;
    if(round>1) {
        for(var i=0;i<time+1;i++) {
            if(showSvg.children[0]) {
                showSvg.removeChild(showSvg.children[0]);
            }
            
        }
    } 
    // console.log(e.currentTarget.getAttribute('index'));
    // var times = e.currentTarget.getAttribute('index');
    // console.log(times);
    interval(e);
}

// 开启随机选择效果
function interval (e) {
    var now = +new Date();
    var times = e.target.getAttribute('index');

    clearInterval(timerId);
    var timerId = setInterval(function() {
        
        var random = Math.floor((Math.random()*20));
        var current = +new Date();
        var x = 0;
        var first = arr[x].split(',')[0];
        var second = first*3 + 23;
        var third = second*23 + 21;
        debugger;
        // svgList[random].setAttribute('class','backColor');
        for(var i=0;i<svgList.length;i++) {
            svgList[i].style.backgroundColor = '';
        }
        debugger;
        console.log(times);
        switch(times) {
            case '1':
                svgList[random].style.backgroundColor = rgb(first,second,third);
                break;
            case '2':
                svgList[random].style.backgroundColor = rgb(first,second,third);
                svgList[Math.floor((Math.random()*20))].style.backgroundColor = rgb(first,second,third);
        }
        
        // svgList[random+1].style.backgroundColor = rgb(first,second,third);
        
        debugger;
        if((current - now)>2000) {
            clearInterval(timerId);
            switch(times) {
                case '1':
                    show.appendChild(svgList[random].cloneNode(true));
                    showSvg.children[0].style.backgroundColor = '';
                    break;
                case '2':
                        show.appendChild(svgList[random].cloneNode(true));
                        show.appendChild(svgList[random+2].cloneNode(true));
                        showSvg.children[0].style.backgroundColor = '';
                        showSvg.children[1].style.backgroundColor = '';
            }

        }
        
    },50)
};

function reset() {
    for(var i=0;i<2;i++) {
        showSvg.removeChild(showSvg.children[0]);
        
    }
    for(var j=0;j<20;j++) {
        svgList[j].style = '';
    }

}
ul[3].onclick = reset;






