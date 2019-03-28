// pages/Forward/A/A.js

const app = getApp();

Page({

/**
 * 页面的初始数据
 */
  data: {
    list: ['url参数（简单参数）', 'url参数（复杂参数）', '全局app对象', '本地存储']
  },

  clickButtonAction(e) {
    const id = e.currentTarget.id;
    switch(id) {
      case '0': /// url 传参（简单参数）
      {
          wx.navigateTo({
            url: '../B/B?name=简单参数',
          });
          // wx.redirectTo({
          //   url: '../B/B?name=简单参数',
          // })
        break;
      }
      case '1': /// url 传参（复杂参数）
      {
        const obj = [{
          id: 1,
          name: 'url 传参',
          content: '测试通过 url 进行参数传递'
        }, {
            id: 2,
            name: 'url 传参',
            content: '测试通过 url 进行参数传递'
        }];
        wx.navigateTo({
          url: '../B/B?params=' + JSON.stringify(obj),
        });
        break;
      }
      case '2': /// 全局app对象传参
      {
        app.globalData = {
          id: 10,
          name: '全局参数'
        };
        wx.navigateTo({
          url: '../B/B'
        })
        break;
      }
      case '3': /// 本地存储传参
      {
        const localData = {
          id: 100,
          name: '本地数据'
        };
        wx.setStorageSync('LOCAL_DATA', localData);
        wx.navigateTo({
          url: '../B/B'
        })
        break;
      }
    }
  }
})