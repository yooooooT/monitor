import getLastEvent from '../utils/getLastEvent'
import getSelector from '../utils/getSelector'
import tracker from '../utils/tracker'
export function injectJsError () {
  // 监听全局未捕获的报错
  window.addEventListener("error", function (event) {
    let lastEvent = getLastEvent()
    console.log(lastEvent)
    let log = {
      kind: "stability", // 监控指标大类
      type: "jsError", // 小类型
      errorType: event.type, // 错误类型
      filename: event.filename, // 出错文件
      url: window.location.href, // 当前页
      message: event.message, // 错误信息
      position: `${event.lineno}:${event.colno}`, // 错误位置
      time: new Date().getTime(), // 上报时间
      stack: getLines(event.error.stack), // 错误堆栈
      selector: lastEvent ? getSelector(lastEvent.path || lastEvent.target) : '' // 事件触发的元素

    }
    console.log("jsError", log)
    tracker.send(log)
  })

  function getLines (stack) {
    let source = stack.split("\n").slice(1).map(item => {
      return item.replace(/^\s+at\s+/g, "")
    })
    return source.join('@')
  }
}