<template>
    <div class="shipAddress">
        <div class="shipAddressHead">
            <headers hLeft="返回" hCont="收货地址"></headers>
        </div>
        <div class="forgotInput">
            <div class="shipContent1" v-for="(item,index) in infoList" :key="index">
                <div class="Content">
                    <span class="addName">{{item.addName}}</span>
                    <span class="addPhone">{{item.addPhone}}</span>
                </div>
                <div class="Content2">
                    <span class="detailCon">{{item.detailCon}}</span>
                </div>
                <div class="Content3 clearfix">
                    <div class="defaultLeft">
                        <div class="pitch" @click="handclick(index)" :class="{color:index == currentIndex}"></div>
                        <span class="pitchCon">设为默认地址</span>
                    </div>
                    <div class="defaultRight">
                        <span class="delete">删除</span>
                        <span class="compile">编辑</span>
                    </div>
                </div>
            </div>
        </div>
        <router-link :to="{path:'/deliveryAddress'}">
            <button class="forgotBtn">
                新增地址
            </button>
        </router-link>
    </div>
</template>
<script>
import headers from '../../components/common/header';
export default {
    name: 'shipAddress',
    components: {
        headers
    },
    created(){
        let flag = this.$axios.defaults.baseURL !== '/net/axsl/static';
        let url = flag ? "/user/getAddress" : '/userInfo.json';
        this.$axios.get(url).then(res=>{
           this.infoList = res.data.getAddress
        })
    },
    data() {
        return {
            currentIndex:0,
            item:[],
            infoList: [
                {
                    addName: "李鑫",
                    addPhone: "18404908540",
                    detailCon: "北京市海淀区西三旗桥东金燕龙大厦101北京市海淀区西三旗桥东金燕龙大厦101"
                }
            ]
        }
    },
    methods: {
        handclick: function (index) {
            this.currentIndex = index;
        }
    }
}
</script>
<style scoped lang="less">
.shipAddress {
    width: 100%;
    height: 1334/100rem;
    background: #fff;
}

// li
.shipAddressHead {
    width: 100%;
    height: 88/100rem;
    background: #43bf92;
}

// 退出
.forgotBtn {
    width: 600/100rem;
    height: 76/100rem;
    margin: auto 65/100rem;
    margin-top: 66/100rem;
    text-align: center;
    border-radius: 10/100rem;
    border: none;
    background: #43bf92;
    color: #fff;
    font-size: 34/2px;
    a {
        color: #fff;
    }
}

.shipContent1 {
    width: 100%;
    height: 248/100rem;
    border-bottom: 1px solid #888;
}

.color {
    background: #43bf92;
}

.Content {
    display: block;
    width: 90%;
    height: 40/100rem;
    text-align: left;
    margin: 0 auto;
    margin-top: 50/100rem;
    font-size: 30/2px;
    color: #888;
    .addName {
        float: left;
        display: block;
        width: 150/100rem;
        height: 40/100rem;
    }
    .addPhone {
        float: left;
        display: block;
        width: 200/100rem;
        height: 40/100rem;
    }
}

.Content2 {
    width: 90%;
    height: 100/100rem;
    text-align: left;
    margin: 0 auto;
    margin-top: 26/100rem;
    font-size: 30/2px;
    color: #888;
}

.Content3 {
    width: 90%;
    height: 80/100rem;
    text-align: center;
    margin: 30/100rem auto;

    .defaultLeft {
        float: left;
        font-size: 26/2px;
        color: #43bf92;
        .pitch {
            display: block;
            float: left;
            width: 30/100rem;
            height: 30/100rem;
            border-radius: 50%;
            border: 1/100rem solid #43bf92;
        }
        .pitchCon {
            display: block;
            margin-left: 20/100rem;
            float: left;
        }
    }
    .defaultRight {
        float: right;
        font-size: 28/2px;
        color: #888;
    }
}

.clearfix:after {
    height: 0;
    content: " ";
    display: block;
    overflow: hidden;
    clear: both;
}
</style>