// pages/Reverse/A/A.js

const tool = require('../../../utils/util.js');
const onfire = tool.onFire;

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    list: ['全局的app对象', '本地存储', 'page实例', '通知广播机制'],
    data: null
  },

  onUnload() {
    onfire.off('Notification');
  },

  onLoad(options) {
    /// 通知广播机制传值
    onfire.on('Notification', e => {
      this.setData({
        data: e
      });
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {

    /// 使用 id 来区分逆向传值的方式
    /// 需要手动刷新UI
    const id = this.data.id;

    if (id === '')  return;

    switch (id) {
      case '0': /// 全局的app对象传值
      {
        console.log(app.rGlobalData);
        this.setData({
          data: JSON.stringify(app.rGlobalData)
        });
        break;
      }
      case '1': /// 本地存储传值
      {
        console.log(wx.getStorageSync('R_LOCAL_DATA'));
        this.setData({
          data: JSON.stringify(wx.getStorageSync('R_LOCAL_DATA'))
        });
        break;
      }
      case '2': /// 获取page实例传值
      { break; }
      case '3': /// 通知广播机制传值
      { break; }
    }
  },


  clickButtonAction(e) {
    const id = e.currentTarget.id;
    this.setData({id: id});

    wx.navigateTo({
      url: '../B/B?id=' + id,
    });
  }
})