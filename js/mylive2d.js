
OML2D.loadOml2d({
  dockedPosition: "left",
  models: [
    //符玄
    {
      path: '/StarRail/fuxuan/fuxuan.model3.json',
      position: [0,60],
      scale: 0.05,
      stageStyle: {
        height: 400
      }
    },
    // 卡夫卡
    {
      path: '/StarRail/卡夫卡/卡夫卡.model3.json',
      position: [0,60],
      scale: 0.05,
      stageStyle: {
        height: 300
      }
    },
    // 花火
    {
      path: '/StarRail/花火/花火.model3.json',
      position: [0,60],
      scale: 0.08,
      stageStyle: {
        height: 400
      }
    },
    // 霍霍
    {
      path: '/StarRail/藿藿/藿藿.model3.json',
      position: [0,60],
      scale: 0.05,
      stageStyle: {
        height: 300
      }
    },
    // 镜流
    {
      path: '/StarRail/镜流/镜流.model3.json',
      position: [0,60],
      scale: 0.09,
      stageStyle: {
        height: 300
      }
    },
  ],
  tips: {
  idleTips: {
    wordTheDay(wordTheDayData) {
      return `${wordTheDayData.hitokoto}    by.${wordTheDayData.from}`;
    }
  }
},
});