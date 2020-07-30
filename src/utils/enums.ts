/**
 * 例子
 * const EnumsDirection = new EnumsDirection([
 *   {
 *     key: 'TOP',
 *     value: 1,
 *     title: '向上'
 *   }
 * ])
 *
 * EnumsDirection.items // 列表
 * EnumsDirection[1].title // 向上
 * EnumsDirection['TOP'].title // 向上
 */
export class Enums {
  constructor(items) {
    items.forEach(v => {
      this[v.key] = this[v.value] = v
    })
    this.items = Object.freeze(items)
  }
}
