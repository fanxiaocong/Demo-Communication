// pages/Forward/B/B.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (null != options.name) {   /// 普通参数
      this.setData({
        data: options.name
      });
    } else if (null != options.params) {  /// 复杂参数
      /// 将 json 字符串转化为 对象
      console.log(JSON.parse(options.params));
      this.setData({  
        data: options.params
      });
    } else if (null != app.globalData) {  /// 全局数据
      console.log(app.globalData);
      this.setData({
        data: JSON.stringify(app.globalData)
      });
    } else if (null != wx.getStorageSync('LOCAL_DATA')) { /// 本地数据
      console.log(wx.getStorageSync('LOCAL_DATA'));
      this.setData({
        data: JSON.stringify(wx.getStorageSync('LOCAL_DATA'))
      });
    }
  }
})