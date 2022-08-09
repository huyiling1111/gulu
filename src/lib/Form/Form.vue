new Promise(function (resolve, reject) {
  console.log('异步宏任务promise');
  resolve();
  }).then(function () {
  console.log('异步微任务then')
  })
  console.log('异步宏任务');

  new Promise(function (resolve, reject) {
  console.log('同步宏任务promise');
  resolve()
  }).then(function () {
  console.log('同步微任务then')
  })
  console.log('同步宏任务')