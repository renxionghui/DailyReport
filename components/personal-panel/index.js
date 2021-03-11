// components/personal/index.js
Component({
  options:{
    addGlobalClass: true
  },
  properties: {},

  data: {
    nickName: '点击登陆',
    avatarUrl: './images/avatar.svg',
    name:'',
    phone:'',
    department:'',
    percentage:0
  },
  lifetimes: {
    created() {
      const that = this;
      //从服务器获取用户信息
      wx.getUserInfo({
        success(res) {
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
    },
    attached() {
      let infoCount = 0;
      const userStorage = wx.getStorageSync('user');
      console.log(userStorage)
      const name = userStorage.name;
      if(name) infoCount++
      const phone = userStorage.phone;
      if(phone) infoCount++
      const department = userStorage.department;
      if(department) infoCount++
      const percentage = infoCount/3 * 100;
      console.log(percentage)
      this.setData({
        name,phone,department,percentage
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
    },
    handleSave(){
      const {name, phone, department} = this.data;
      wx.setStorageSync('user',{
        name,phone,department
      })
    },
    handleNameChange({detail}){
      this.setData({
        name:detail
      })
    },
    handlePhoneChange({detail}){
      this.setData({
        phone:detail
      })
    },
    handleDepartmentChange({detail}){
      this.setData({
        department:detail
      })
    },
  }
})