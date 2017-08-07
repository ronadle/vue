import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue';
//钟斌
//组件
import footers from  '../components/common/footer.vue';
import personalOrder from '../components/common/personalOrder.vue';
import personalNav from '../components/common/personalNav.vue';
//页面
import home from '../pages/home/home';
import dailyTest from '../pages/dailyTest/dailyTest';
import dailyRecipes from '../pages/dailyRecipes/dailyRecipes';
import lungTest from '../pages/lungTest/lungTest';
import testResult from '../pages/testResult/testResult';
import topicDetail from '../pages/topicDetail/topicDetail';
import chooseAddress from '../pages/chooseAddress/chooseAddress';
import foodTherapy from '../pages/foodTherapy/foodTherapy.vue';
import dailyRecord from '../pages/dailyRecord/dailyRecord.vue';
import symptomCondition from '../pages/symptomCondition/symptomCondition.vue';


//姚鹏程
import myCollect from '../pages/myCollect/myCollect';
import constitution from '../pages/constitution/constitution';
import collectSick from '../pages/collectSick/collectSick';
import onlineService from '../pages/onlineService/onlineService';
import resetPassword from '../pages/resetPassword/resetPassword';
import register from '../pages/register/register';
import profession from '../pages/profession/profession';
import deliveryAddress from '../pages/deliveryAddress/deliveryAddress';
import calendar from '../pages/calendar/calendar';
import myOrder from '../pages/myOrder/myOrder.vue';
import form from '../pages/form'

//刘娟娟
import helpAndFeedback from '../pages/helpAndFeedback/helpAndFeedback';
import test from '../pages/test/test';
import login from '../pages/login/login';
import baseInfo from '../pages/baseInfo/baseInfo';
import notTestIll from '../pages/notTestIll/notTestIll';
import familyFriend from '../pages/familyFriend/familyFriend';
import shopCart from '../pages/shopCart/shopCart';
import productDetails from '../pages/productDetails/productDetails.vue';
import confirmOrder from '../pages/confirmOrder/confirmOrder.vue';

//徐可
import forgotPassword from '../pages/forgotPassword/forgotPassword'; 
import setSetting from '../pages/setSetting/setSetting'; 
import informationMsg from '../pages/informationMsg/informationMsg';
import addFriends from '../pages/addFriends/addFriends';
import healthData from '../pages/healthData/healthData';
import expresseEition from '../pages/expresseEition/expresseEition';
import myPages from '../pages/myPages/myPages.vue';
import shipAddress from '../pages/shipAddress/shipAddress';
import shopClose from '../pages/shopClose/shopClose';



Vue.use(Router)

export default new Router({
  model:history,
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path:'/',
          component:footers,
          children:[
            {
              path:'',
              redirect:'home'
            },
            {
              path:'/home',
              component:home
            },
            {
              path:'/foodTherapy',
              component:foodTherapy
            },
            {
              path:'/personalOrder',
              component:personalOrder,
              children:[
                {
                  path:'',
                  component:personalNav,
                  children:[
                    {
                      path:'',
                      component:dailyRecord
                    },
                    {
                      path:'symptomCondition',
                      component:symptomCondition
                    }
                  ]
                },
                {
                  path:'calendar',
                  component:calendar
                },
              ]
            },
            {
              path:'/myPages',
              component:myPages
            }
          ]
        },
        //每日测试页
        {
          path:'/dailyTest',
          component:dailyTest
        },
        //每日食谱页
        {
          path:'/dailyRecipes',
          component:dailyRecipes
        },
        //肺部测试页
        {
          path:'/lungTest',
          component:lungTest
        },
        //肺部测试结果页
        {
          path:'testResult',
          component:testResult
        },
        //首页话题详情页
        {
          path:'/topicDetail/:id',
          component:topicDetail
        },
        //购物车
        {
          path:'/shopCart/:id',
          component:shopCart
        },
        //选择地址
        {
          path:'/chooseAddress',
          component:chooseAddress
        },  
        //食疗坊
        {
          path:'/foodTherapy',
          component:foodTherapy
        },
        //姚鹏程
        {
          path:'/form',
          component:form
        },
        //我的收藏
        {
          path:'/myCollect',
          component:myCollect
        },
        //显示体质
        {
          path:'/constitution',
          component:constitution
        },
        //选择慢性病
        {
          path:'/collectSick',
          component:collectSick
        },
        //在线客服
        {
          path:'/onlineService',
          component:onlineService
        },
        //重置密码
        {
          path:'/resetPassword',
          component:resetPassword
        },
        //注册
        {
          path:'/register',
          component:register
        },
        //专业版
        {
          path:'/profession',
          component:profession
        },
        //新建收货地址
        {
          path:'/deliveryAddress',
          component:deliveryAddress
        },
        //我的订单
        {
          path:'/myOrder',
          component:myOrder
        },
        //刘娟娟
        //帮助和反馈
        {
          path:'/helpAndFeedback',
          component:helpAndFeedback
        },
        //测试
        {
          path:'/test',
          component:test
        },
         //登录
        {
          path:'/login',
          component:login
        },
         //基础信息
        {
          path:'/baseInfo',
          component:baseInfo
        },
        //商品详情
        {
          path:'/productDetails/:id',
          component:productDetails
        },
        //家人和朋友尚未测试慢性病
        {
          path:'/notTestIll',
          component:notTestIll
        },
        //家人和朋友
        {
          path:'/familyFriend',
          component:familyFriend
        },
        //确认订单
        {
          path:'/confirmOrder',
          component:confirmOrder
        }, 
        //徐可
        //找回密码forgotPassword
        {
          path:'/forgotPassword',
          component:forgotPassword
        },
        //设置
          {
          path:'/setSetting',
          component:setSetting
        },
        //收到的消息
        {
          path:'/informationMsg',
          component:informationMsg
        },
        //添加家人和朋友
        {
          path:'/addFriends',
          component:addFriends
        },
        //健康信息
        {
          path:'/healthData',
          component:healthData
        
        },
        //简易版体质测试
        {
          path:'/expresseEition',
          component:expresseEition
        },
        //新增地址
        {
          path:'/shipAddress',
          component:shipAddress
        },
        //购物车主页
        {
          path:'/shopClose',
          component:shopClose
        }
      ]
    }    
  ]   
})
