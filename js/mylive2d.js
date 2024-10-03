
OML2D.loadOml2d({
  dockedPosition: "left",
  models: [
  {
      path: 'https://model.oml2d.com/HK416-2-normal/model.json',
      position: [0,60],
      scale: 0.08,
      stageStyle: {
        height: 400
      }
    },
    //符玄
    {
      path: 'https://model.kisssssssss.space/https://raw.githubusercontent.com/kisssssssss/model/main/live2d/StarRail/%E7%AC%A6%E7%8E%84/%E7%AC%A6%E7%8E%84.model3.json',
      position: [0,60],
      scale: 0.08,
      stageStyle: {
        height: 400
      }
    },
    // 知更鸟
    {
      path: 'https://model.kisssssssss.space/https://raw.githubusercontent.com/kisssssssss/model/main/live2d/StarRail/%E7%9F%A5%E6%9B%B4%E9%B8%9F/%E7%9F%A5%E6%9B%B4%E9%B8%9F.model3.json',
      position: [0,60],
      scale: 0.08,
      stageStyle: {
        height: 400
      }
    },
    // 花火
    {
      path: 'https://model.kisssssssss.space/https://raw.githubusercontent.com/kisssssssss/model/main/live2d/StarRail/%E8%8A%B1%E7%81%AB/%E8%8A%B1%E7%81%AB.model3.json',
      position: [0,60],
      scale: 0.08,
      stageStyle: {
        height: 400
      }
    },
    // 霍霍
    {
      path: 'https://model.kisssssssss.space/https://raw.githubusercontent.com/kisssssssss/model/main/live2d/StarRail/%E8%97%BF%E8%97%BF/%E8%97%BF%E8%97%BF.model3.json',
      position: [0,60],
      scale: 0.08,
      stageStyle: {
        height: 400
      }
    },
    // 镜流
    {
      path: 'https://model.kisssssssss.space/https://raw.githubusercontent.com/kisssssssss/model/main/live2d/StarRail/%E9%95%9C%E6%B5%81/%E9%95%9C%E6%B5%81.model3.json',
      position: [0,60],
      scale: 0.15,
      stageStyle: {
        height: 400
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