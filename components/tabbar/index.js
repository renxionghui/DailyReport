Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabChanged: {
      type: Function,
      value: () => {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedIndex: 1,
    normalSrcs: ['./icon/list-normal.svg', './icon/daily-normal.svg', './icon/personal-normal.svg'],
    selectedSrcs: ['./icon/list-selected.svg', './icon/daily-selected.svg', './icon/personal-selected.svg']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabTap(e) {
      const {
        dataset
      } = e.currentTarget;
      const {
        tabIndex
      } = dataset;
      if (this.data.selectedIndex === tabIndex) return;
      this.setData({
        selectedIndex: tabIndex
      })
      this.triggerEvent('tabchange', tabIndex)
    }
  }
})