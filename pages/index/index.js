const app = getApp()
const navTitleText = ['日报列表', '日报编辑', '个人中心']
Page({
  data: {
    tabIndex: -1,
  },
  onLoad() {
    this.setData({
      tabIndex: 1
    })
  },
  onTabChange(e) {
    const detail = e.detail
    wx.setNavigationBarTitle({
      title: navTitleText[detail]
    })
    this.setData({
      tabIndex: detail
    })
  }
})