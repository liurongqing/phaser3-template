/**
 * 防拦函数，在一定时间间隔内，只执行最后一次
 * @param fn 执行的函数
 * @param wait 等待时间
 * @param immediate 立即执行
 */
export const debounce = (fn, wait = 50, immediate) => {
  let timer = null
  return function (...args) {
    timer && clearTimeout(timer)
    if (immediate && !timer) {
      fn.apply(this, args)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
