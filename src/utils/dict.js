export function transferDeliverMode (val) {
  if (val === 1) {
    return '自动发货'
  } else if (val === 2) {
    return '手动发货'
  }
}
