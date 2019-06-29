const COUNT_LI = 5000;
var $ = s => document.querySelector(s);
var container = $('#container');
var Now;
var count = 0;
if (performance.now) {
    Now = function () {
        return performance.now();
    };
} else if (Date.now) {
    Now = function () {
        return Date.now();
    };
} else {
    Now = function () {
        return new Date().getTime();
    }
}

/**
 * 
 * @param {*} f 需要执行的函数
 */
var Time = function (f) {
    var s = Now();
    f();
    return (Now() - s) | 0;
};


function insertWithoutMerge() {
    var time = Time(_ => {
        for (let i = 0; i < COUNT_LI; i++) {
            count++;
            let dom_li = document.createElement('LI');
            dom_li.innerText = count;
            dom_li.style.color = "red";
            container.insertBefore(dom_li, container.childNodes[0]);
        }
    });
   document.getElementsByTagName("button")[0].innerText = time;
}

function insertWithMerge() {
    var time = Time(_ => {
        var fragment = document.createDocumentFragment();
        for (let i = 0; i < COUNT_LI; i++) {
            count++;
            let dom_li = document.createElement('LI');
            dom_li.innerText = count;
            dom_li.style.color = "red";
            fragment.insertBefore(dom_li, fragment.childNodes[0]);
        }
        container.insertBefore(fragment,container.childNodes[0]);
    })
    document.getElementsByTagName("button")[1].innerText = time;
}