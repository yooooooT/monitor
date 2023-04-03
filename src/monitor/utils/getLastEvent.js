let lastEvent;
['click', 'mousedown', 'touchstart', 'mouseover', 'keydown', 'keyup',].forEach(function (eventType) {
  document.addEventListener(eventType, function (event) {
    lastEvent = event
  }, {
    capture: true, // 捕获阶段执行
    passive: true // 默认不阻止事件的默认行为 
  })
})

export default function () {
  return lastEvent
}