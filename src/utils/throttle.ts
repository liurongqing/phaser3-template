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
