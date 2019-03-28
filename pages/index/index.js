// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: '正向传值',
        url: '/pages/Forward/A/A'
      },
      {
        name: '逆向传值',
        url: '/pages/Reverse/A/A'
      }
    ]
  },

  clickButtonAction(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  }
})