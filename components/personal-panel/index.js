// components/personal/index.js
Component({
  properties: {},

  data: {
    nickName:'点击登陆',
    avatarUrl:'./images/avatar.svg'
  },
  lifetimes:{
    created(){
      const that = this;
      wx.getUserInfo({
        success(res) {
          const { userInfo : { nickName, avatarUrl } } = res
          that.setData({
            nickName, avatarUrl
          })
        }
      })
    }
  },
  methods: {
    hanleLogin(){
      console.log('1111')
    }
  }
})
