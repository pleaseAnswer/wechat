//index.js
//获取应用实例
const app = getApp()
import regeneratorRuntime from 'regenerator-runtime'

Page({
  data: {
    recommend: [],
    keyword:''
  },

  onLoad: async function () {
    let data = await app.getData({
      type: 2,
      data: {
        size: 15
      }
    })
    let hotList = data.song_list;

    //轮播图数据
    let recommend = hotList.slice(0, 5);

    // 搜索关键字：获取最热门的歌
    let hotest = hotList.sort((a, b) => b.hot - a.hot)[0];

    // 热门歌曲
    hotList = hotList.slice(5);

    // 获取最新歌曲
    let { song_list: newList } = await app.getData({
      type: 1,
      data: {
        size: 10
      }
    })
  },
  gotoPlayer(e){
    console.log(e);
    let {id} = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/player/player?id='+id
    })
  },
  gotoSearch(){
    let {keyword}= this.data
    wx.navigateTo({
      url: '/pages/search/search?keyword=' + keyword
    })
  }
})
