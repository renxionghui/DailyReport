const primaryReportList = new Array(66)
const secondaryReportList = new Array(22)
Component({
  properties: {

  },
  data: {
    date:'',
    primaryCount:66,
    secondaryCount:22,
    reportCount:66,
    reportCountColor:'#6B92E5',
    primaryReportList:primaryReportList,
    secondaryReportList:secondaryReportList
  },
  
  methods: {
    handleSwiperChange(e){
      const currentIndex = e.detail.current;
      const reportCount = currentIndex === 0 ? this.data.primaryCount : this.
      data.secondaryCount;

      const reportCountColor = currentIndex === 0 ? '#6B92E5' : '#7B81BE'
      this.setData({
        reportCount,
        reportCountColor
      })
    }
  }
})
