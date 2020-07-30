/**
 * 例子
 * 假设： 1: iOS  2: Android  4: PC
 * 选择 iOS + Android 则保存 1 | 2 = 3
 * 选择 iOS + Android + PC 则保存 1 | 2 | 4 = 7
 * 数据库搜索： where  status & n
 * status：当前选中的
 * n： 数据库保存的值
 */
export const binaryStatus = (num, maxLengh = 32) => {
  const binary = Array.from({ length: maxLengh }, (v, index) => Math.pow(2, index))
  return binary.filter(v => v <= num && v & num)
}
