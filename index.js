/**
 * 重复重绘函数：插入10000个子节点，每个节点直接插入
 */
function insertEls() {
  const container1 = document.getElementById('container1');
  for (let i = 0; i < 10000; i++) {
    let el = document.createElement('div');
    container1.appendChild(el);
    el.style.height = 12;
  }
}

/**
 * 不重复重绘：使用DocmentFragment一次性插入10000个子节点
 */
function insertFragment() {
  const container2 = document.getElementById('container2');
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < 10000; i++) {
    let el = document.createElement('div');
    fragment.appendChild(el);
  }
  container2.appendChild(fragment);
}

/**
 * 计算执行时间
 */
function calcExecuteTime(func) {
  let startTime = new Date()
  func();
  let endTime = new Date();
  return endTime.getTime() - startTime.getTime();
}

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(e) {
  console.log(`执行重复重绘函数使用了${calcExecuteTime(insertEls)}ms`);
})

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(e) {
  console.log(`执行不重复重绘函数使用了${calcExecuteTime(insertFragment)}ms`);
})
