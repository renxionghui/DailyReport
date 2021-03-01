// components/personal/index.js
Component({
  properties: {},

  data: {
    nickName: '点击登陆',
    avatarUrl: './images/avatar.svg'
  },
  lifetimes: {
    created() {
      console.log('created')
      const that = this;
      wx.getUserInfo({
        success(res) {
          console.log(res)
          const {
            userInfo: {
              nickName,
              avatarUrl
            }
          } = res
          that.setData({
            nickName,
            avatarUrl
          })
        }
      })
    }
  },
  methods: {
    getUserInfo(res) {
      const {
        userInfo: {
          nickName,
          avatarUrl
        }
      } = res.detail
      this.setData({
        nickName,
        avatarUrl
      })
    }
  }
})