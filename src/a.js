export function funcA () {
  return 'this is function A'
}

export function callStorage () {
  wx.setStorage({
    key: 'callStorage',
    data: 'callStorage'
  })
}