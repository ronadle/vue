//首页轮播图
const homeBanner = [
  {
    src:'http://123.56.16.57/shiliao/images/lunbo1.png',
    title:'xxx1',
  },
  {
    src:'http://123.56.16.57/shiliao/images/lunbo1.png',
    title:'xxx2',
  },
  {
    src:'http://123.56.16.57/shiliao/images/lunbo1.png',
    title:'xxx3',
  },
  {
    src:'http://123.56.16.57/shiliao/images/lunbo1.png',
    title:'xxx4',
  }
]
const homeDailyList = [
  {
    path:'dailyTest',
    title:'每日一测',
    img:'http://123.56.16.57/shiliao/images/shouye_06.png'
  },
  {
    path:'dailyRecipes',
    title:'每日食谱',
    img:'http://123.56.16.57/shiliao/images/shouye_08.png'
  }
]
const homeTopicList = [
  {
    id:1,
    path:'topicDetail',
    title:'八大零食安全隐患，你中了几个？',
    img:'http://123.56.16.57/shiliao/images/ttq.png',
    cont:'即使很多标榜“安全”的零食村上春树大额， 也存在很多隐患。',
    readNum:'25388'
  },
  {
    id:2,
    path:'topicDetail',
    title:'感冒了好衰啊...吃什么才好得快？',
    img:'http://123.56.16.57/shiliao/images/ye_03.png',
    cont:'冬天的感冒就仿佛是秋天的盛世嫡妃水了落叶，春天的百花般，总是当时的发生更按时到来。无论现在的你...',
    readNum:'38489'
  },
  {
    id:3,
    path:'topicDetail',
    title:'八大零食安全隐患，你中了几个？',
    img:'http://123.56.16.57/shiliao/images/ttq.png',
    cont:'即使很多标榜“安全”的零食村上春树大额， 也存在很多隐患。',
    readNum:'25388'
  }
]
//话题详情
const topicDetail = [
  {
    id:1,
    titleLeft:'八大零食安全',
    titleRight:'，你中了几个？',
    strong:'隐患',
    author:'王焱',
    img:'http://123.56.16.57/shiliao/images/ttq.png',
    preface:'你是重度零食依赖者吗？无论看书看片，心情好的时候，还是心情 不好的时候，无论忙的时候还是闲的时候，嘴巴可都没闲过！吃吃 喝喝本是人生常态，要不我们为什么要活着！可是如今零食里的添 加剂越来越多，即使很多标榜「安全」的零食，也存在很多隐患。 一定要擦亮眼睛哎呀！',
    contList:[
      {
        title:'1.乳饮料',
        cont:'其实没啥蛋白质。乳饮料≠奶！依据国家标准奶中的蛋白质含量不得低于2.5g／100ml，而乳饮料或乳酸菌饮料蛋白质含量不得低于1g／100ml。乳饮料不能代替奶。有些乳饮料中含有乳酸菌，可以滋润肠道，但每天不宜多喝，不能代替水。所以喝牛奶相关的饮料，一定要看配料表，配料表的成分都是由大到小排的，如果乳饮料第一位是水，我觉得吧，就当水喝吧。别指望有多少蛋白质。'
      },
      {
        title:'2.果汁',
        cont:'主要是含糖量过高。现在很多维生素果汁饮料含糖量普遍较高，一些饮料含糖量为7.5g／100g，那么一瓶300ml的饮品仅含糖量贡献的热量就有90千卡，建议每天不要超过1瓶。果汁中的VC含量不能代替新鲜水果或鲜榨果汁，在生产过程中会加入人工VC。'
      },
      {
        title:'3.冰品',
        cont:'细菌总数很可能超标。吃冰品不能贪多，用餐前两小时、睡前、剧烈运动大量流汗之后，会刺激肠胃黏膜引起痉挛、溃疡等疾病。女生大姨妈期间禁止食用！冰品细菌容易超标，选择品牌很重要。自己做也要注意密封冷冻。'
      },
      {
        title:'4.薯片',
        cont:'细菌总数很可能超标。吃冰品不能贪多，用餐前两小时、睡前、剧烈运动大量流汗之后，会刺激肠胃黏膜引起痉挛、溃疡等疾病。女生大姨妈期间禁止食用！冰品细菌容易超标，选择品牌很重要。自己做也要注意密封冷冻。'
      }
    ]
  },
  {
    id:2,
    titleLeft:'感冒了好衰啊...吃什么才好得快？',
    strong:'',
    author:'王焱',
    img:'http://123.56.16.57/shiliao/images/ye_03.png',
    preface:'你是重度零食依赖者吗？无论看书看片，心情好的时候，还是心情 不好的时候，无论忙的时候还是闲的时候，嘴巴可都没闲过！吃吃 喝喝本是人生常态，要不我们为什么要活着！可是如今零食里的添 加剂越来越多，即使很多标榜「安全」的零食，也存在很多隐患。 一定要擦亮眼睛哎呀！',
    contList:[
      {
        title:'1.乳饮料',
        cont:'其实没啥蛋白质。乳饮料≠奶！依据国家标准奶中的蛋白质含量不得低于2.5g／100ml，而乳饮料或乳酸菌饮料蛋白质含量不得低于1g／100ml。乳饮料不能代替奶。有些乳饮料中含有乳酸菌，可以滋润肠道，但每天不宜多喝，不能代替水。所以喝牛奶相关的饮料，一定要看配料表，配料表的成分都是由大到小排的，如果乳饮料第一位是水，我觉得吧，就当水喝吧。别指望有多少蛋白质。'
      },
      {
        title:'2.果汁',
        cont:'主要是含糖量过高。现在很多维生素果汁饮料含糖量普遍较高，一些饮料含糖量为7.5g／100g，那么一瓶300ml的饮品仅含糖量贡献的热量就有90千卡，建议每天不要超过1瓶。果汁中的VC含量不能代替新鲜水果或鲜榨果汁，在生产过程中会加入人工VC。'
      },
      {
        title:'3.冰品',
        cont:'细菌总数很可能超标。吃冰品不能贪多，用餐前两小时、睡前、剧烈运动大量流汗之后，会刺激肠胃黏膜引起痉挛、溃疡等疾病。女生大姨妈期间禁止食用！冰品细菌容易超标，选择品牌很重要。自己做也要注意密封冷冻。'
      },
      {
        title:'4.薯片',
        cont:'细菌总数很可能超标。吃冰品不能贪多，用餐前两小时、睡前、剧烈运动大量流汗之后，会刺激肠胃黏膜引起痉挛、溃疡等疾病。女生大姨妈期间禁止食用！冰品细菌容易超标，选择品牌很重要。自己做也要注意密封冷冻。'
      }
    ]
  },
  {
    id:3,
    titleLeft:'八大零食安全',
    titleRight:'，你中了几个？',
    strong:'隐患',
    author:'王焱',
    img:'http://123.56.16.57/shiliao/images/ttq.png',
    preface:'你是重度零食依赖者吗？无论看书看片，心情好的时候，还是心情 不好的时候，无论忙的时候还是闲的时候，嘴巴可都没闲过！吃吃 喝喝本是人生常态，要不我们为什么要活着！可是如今零食里的添 加剂越来越多，即使很多标榜「安全」的零食，也存在很多隐患。 一定要擦亮眼睛哎呀！',
    contList:[
      {
        title:'1.乳饮料',
        cont:'其实没啥蛋白质。乳饮料≠奶！依据国家标准奶中的蛋白质含量不得低于2.5g／100ml，而乳饮料或乳酸菌饮料蛋白质含量不得低于1g／100ml。乳饮料不能代替奶。有些乳饮料中含有乳酸菌，可以滋润肠道，但每天不宜多喝，不能代替水。所以喝牛奶相关的饮料，一定要看配料表，配料表的成分都是由大到小排的，如果乳饮料第一位是水，我觉得吧，就当水喝吧。别指望有多少蛋白质。'
      },
      {
        title:'2.果汁',
        cont:'主要是含糖量过高。现在很多维生素果汁饮料含糖量普遍较高，一些饮料含糖量为7.5g／100g，那么一瓶300ml的饮品仅含糖量贡献的热量就有90千卡，建议每天不要超过1瓶。果汁中的VC含量不能代替新鲜水果或鲜榨果汁，在生产过程中会加入人工VC。'
      },
      {
        title:'3.冰品',
        cont:'细菌总数很可能超标。吃冰品不能贪多，用餐前两小时、睡前、剧烈运动大量流汗之后，会刺激肠胃黏膜引起痉挛、溃疡等疾病。女生大姨妈期间禁止食用！冰品细菌容易超标，选择品牌很重要。自己做也要注意密封冷冻。'
      },
      {
        title:'4.薯片',
        cont:'细菌总数很可能超标。吃冰品不能贪多，用餐前两小时、睡前、剧烈运动大量流汗之后，会刺激肠胃黏膜引起痉挛、溃疡等疾病。女生大姨妈期间禁止食用！冰品细菌容易超标，选择品牌很重要。自己做也要注意密封冷冻。'
      }
    ]
  }
]
//话题详情推荐
const topicRecommend = {
  receipes:['http://123.56.16.57/shiliao/images/shipu.png'],
  singleItem:['http://123.56.16.57/shiliao/images/hongdou.png','http://123.56.16.57/shiliao/images/mi.png']
}
//测试结果为你推荐
const testRecommend = [
  {
    path:'productDetails',
    img:'http://123.56.16.57/shiliao/images/ceshi_1.png',
    name:'黑木耳'
  },
  {
    path:'productDetails',
    img:'http://123.56.16.57/shiliao/images/ceshi_2.png',
    name:'清肺汤'
  },
  {
    path:'productDetails',
    img:'http://123.56.16.57/shiliao/images/ceshi_2.png',
    name:'清肺汤'
  }
]
module.exports = {
  homeBanner:homeBanner,
  homeDailyList:homeDailyList,
  homeTopicList:homeTopicList,
  topicDetail:topicDetail,
  topicRecommend:topicRecommend,
  testRecommend:testRecommend
}