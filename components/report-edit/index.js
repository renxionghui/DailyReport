Component({
  options:{
    addGlobalClass: true
  },
  properties: {},
  data: {
    currentIndex:0,
    primaryReport:[{content:''}],
    secondaryReport:[{content:''}],
  },
  methods: {
    handlePrimaryPlus(){
      this.data.primaryReport.push({content:""})
      this.setData({
        primaryReport:this.data.primaryReport,
      })
    },
    handlePrimarySubmit(){
      console.log('提交主要任务')
    },
    handleSecondaryPlus(){
      this.data.secondaryReport.push({content:""})
      this.setData({
        secondaryReport:this.data.secondaryReport,
      })
    },
    handleSecondarySubmit(){
      console.log('提交次要任务')
    },
    handleMinus(e){
      const itemIndex = e.currentTarget.dataset.itemIndex;
      switch(this.data.currentIndex){
        case 0:
          this.data.primaryReport.splice(itemIndex,1)
          this.setData({
            primaryReport:this.data.primaryReport,
          })
          break;
        case 1:
          this.data.secondaryReport.splice(itemIndex,1)
          this.setData({
            secondaryReport:this.data.secondaryReport,
          })
          break;
        default:
          break;        
      }
    },
    handlePrimaryItemChange(e){
      const value = e.detail;
      const itemIndex = e.currentTarget.dataset.itemIndex
      this.data.primaryReport[itemIndex].content = value
    },
    handleSecondaryItemChange(e){
      const value = e.detail;
      const itemIndex = e.currentTarget.dataset.itemIndex
      this.data.secondaryReport[itemIndex].content = value
    },
    handleSwiperChange(e){
      const currentIndex = e.detail.current;
      this.setData({
        currentIndex
      })
    }
  }
})
