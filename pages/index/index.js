//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    recommend: []
  },

  onLoad: function () {
   wx.request({
     url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
     data: {
      method:'baidu.ting.billboard.billList' ,
      type:2,
      size:5,
      offset:0
     },
     success: ({data})=> {
       console.log('data',data)
       this.setData({
         recommend:data.song_list
       })
       console.log("this",this.data.recommend)
     }
   })
  },
  gotoPlayer(e){
    console.log(e);
    let {id} = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/player/player?id='+id
    })
  }
})
