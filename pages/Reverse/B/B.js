// pages/Reverse/B/B.js

const tool = require('../../../utils/util.js');
const onfire = tool.onFire;


const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({id: options.id});
  },

  /**
   * 点击按钮的操作
   */
  clickButtonAction(e) {
    const id = this.data.id;

    switch (id) {
      case '0': /// 全局的app对象传值
      {
        app.rGlobalData = {
          id: 10,
          name: '逆向传值：全局参数'
        };
        break;
      }
      case '1': /// 本地存储传值
      {
        const rLocalData = {
          id: 100,
          name: '逆向传值：本地数据'
        };
          wx.setStorageSync('R_LOCAL_DATA', rLocalData);
        break;
      }
      case '2': /// 获取page实例传值
      {
        // 获取页面栈的数组
        const pages = getCurrentPages();
        // 取出上一级页面
        const prePage = pages[pages.length - 2];
        // 直接赋值，并刷新UI
        prePage.setData({
          data: '逆向传值：page实例'
        });
        break;
      }
      case '3': /// 通知广播机制传值
      {
        onfire.fire('Notification', '逆向传值：通知广播机制');
        break;
      }
    }

    /// 返回上一级页面
    wx.navigateBack();
  }
})