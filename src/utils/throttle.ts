/**
 * 节流，在一定时间间隔内只能执行一次
 * @param fn 回调函数
 * @param wait 等待时间
 * 例子：
 * const func = throttle(doFun, 100)
 */
export const throttle = (fn, wait) => {
  let previous = 0
  return function (...args) {
    let now = Date.now()
    if (now - previous > wait) {
      previous = now
      fn.apply(this, args)
    }
  }
}
