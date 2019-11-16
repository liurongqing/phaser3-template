var ua = navigator.userAgent,
  isWindowsPhone = /(?:Windows Phone)/.test(ua),
  isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
  isAndroid = /(?:Android)/.test(ua),
  isFireFox = /(?:Firefox)/.test(ua),
  isChrome = /(?:Chrome|CriOS)/.test(ua),
  isTablet =
    /(?:iPad|PlayBook)/.test(ua) ||
    (isAndroid && !/(?:Mobile)/.test(ua)) ||
    (isFireFox && /(?:Tablet)/.test(ua)),
  isPhone = /(?:iPhone)/.test(ua) && !isTablet,
  isMobile = /(?:Mobile)/.test(ua),
  isPc = !isPhone && !isAndroid && !isSymbian && !isMobile

export const os = {
  isTablet,
  isPhone,
  isAndroid,
  isPc
}
