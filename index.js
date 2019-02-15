import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

/* eslint-disable no-new */
/* 登录 */
const login = resolve => require(['../login.vue'], resolve) 
// 微信登录页面
const author = resolve => require(['../author.vue'], resolve) 
const index = resolve => require(['../index.vue'], resolve) 
// const home = resolve => require(['./home.vue'], resolve) 
import home from '../home.vue'

const deliver = resolve => require(['../Deliver.vue'], resolve) 


/* rdif管理 */
const rfid = resolve => require(['../components/rfid/rfid.vue'], resolve) 
/* 布草管理 */
const linen = resolve => require(['../components/linen/linen.vue'], resolve) 
/* 布草包管理 */
const linenbag = resolve => require(['../components/linenbag/linenbag.vue'], resolve) 
// 布草包使用记录
const linenbagUseLog = resolve => require(['../components/linenbag/linenbagUseLog.vue'], resolve) 

/* 酒店管理 */
const hotel = resolve => require(['../components/hotel/hotel.vue'], resolve) 
/* 酒店地图 */
const hotelMap = resolve => require(['../components/hotel/hotelMap.vue'], resolve)
/* 酒店管理详情 */
// const particulars = resolve => require(['../components/hotel/particulars.vue'], resolve) 
/* 酒店信息详情 */
const IndividualhotelDetail = resolve => require(['../components/hotel/IndividualhotelDetail.vue'], resolve) 
/* 酒店信息修改 */
const hotelInformation = resolve => require(['../components/hotel/hotelInformation.vue'], resolve) 
/* 酒店录入 */
/* 个体 */
// const addIndividualHotel = resolve => require(['../components/hotel/addIndividualHotel1.vue'], resolve) 

/* 集团 */
const addGroupHotel = resolve => require(['../components/hotel/addGroupHotel1.vue'], resolve) 
/* 酒店钱包管理 */
const hotelWallet = resolve => require(['../components/hotel/hotelWallet.vue'], resolve) 
/* 酒店钱包管理详情 */
const hotelWalletDetail = resolve => require(['../components/hotel/hotelWalletDetail.vue'], resolve) 

/* 工厂管理 */
// 工厂列表
const factory = resolve => require(['../components/factory/factory1.vue'], resolve) 
/* 工厂录入 */
const addfactory = resolve => require(['../components/factory/addfactory.vue'], resolve) 
/* 工厂修改 */
const updateFactory = resolve => require(['../components/factory/updateFactory.vue'], resolve) 
/* 配送线路 */
const flow = resolve => require(['../components/flow/flow.vue'], resolve) 

// 单据维护
/* 订单 */
const orderManage = resolve => require(['../components/receipts/orderManage.vue'], resolve) 
/* 订单详情 */
// const orderDetail = resolve => require(['../components/receipts/orderDetail.vue'], resolve) 
/* 任务单 */
const task = resolve => require(['../components/task/task.vue'], resolve) 
/* 非租赁收赃单 task*/
const noleaseViscera = resolve => require(['../components/task/noleaseViscera.vue'], resolve) 
/* 非租赁配送单 */
const noleaseDistribution = resolve => require(['../components/task/noleaseDistribution.vue'], resolve)
/* 配送单 */
const distributionList = resolve => require(['../components/task/distributionList.vue'], resolve) 

/* 配送单详情 */
// const distributionDetail = resolve => require(['../components/task/distributionDetail.vue'], resolve) 
/* 订单维护 */
// const orderMaintenance = resolve => require(['../components/task/orderMaintenance.vue'], resolve) 
/* 订单维护详情 */
// const orderMaintenanceDetail = resolve => require(['../components/task/orderMaintenanceDetail.vue'], resolve) 
/* 订单维护日志 */
// const orderMaintenanceLog = resolve => require(['../components/task/orderMaintenanceLog.vue'], resolve) 
/* 网上下单 */
const newOrder = resolve => require(['../components/task/newOrder.vue'], resolve) 
/* 复核补单 */
const supplementOrder = resolve => require(['../components/task/supplementOrder.vue'], resolve)
/* 订单维护日志 */
const orderLog = resolve => require(['../components/task/orderLog.vue'], resolve) 

/* 通用信息 */
/* 供应商维护 */
const suppliers = resolve => require(['../components/common/suppliers.vue'], resolve) 
/* 酒店品牌维护 */
const hotelGrand = resolve => require(['../components/common/hotelGrand.vue'], resolve) 
/* 酒店集团维护 */
const hotelGroup = resolve => require(['../components/common/hotelGroup.vue'], resolve) 
/* 布草SKU维护 */
const linenSku = resolve => require(['../components/common/linenSKu.vue'], resolve) 
/* 布草SKU基本信息 */
const linenSkuBasic = resolve => require(['../components/common/linenSkuBasic.vue'], resolve) 
/* 非租赁布草SKU维护 */
const noLeaseLinenSKu = resolve => require(['../components/common/noLeaseLinenSKu.vue'], resolve) 
/* 非租赁布草SKU新增 */
const noLeaseLinenSkuAdd = resolve => require(['../components/common/noLeaseLinenSkuAdd.vue'], resolve) 

/* 布草所有者维护 */
const linenAll = resolve => require(['../components/common/linenAll.vue'], resolve) 
/* 标签维护 */
// const labelling = resolve => require(['../components/common/labelling.vue'], resolve) 
/* 科目维护 */
const subject = resolve => require(['../components/common/subject.vue'], resolve) 
/* 字典信息维护 */
const dictionary = resolve => require(['../components/common/dictionary.vue'], resolve) 

/* 对账结算 */
/* 日账单 */
const daybill = resolve => require(['../components/bill/dayBill.vue'], resolve) 
/* 月账单 */
const monthbill = resolve => require(['../components/bill/monthBill.vue'], resolve) 
/* 未出账单 */
const notBill = resolve => require(['../components/bill/notBill.vue'], resolve) 
/* 停车费 */
const parkingBill = resolve => require(['../components/bill/parkingBill.vue'], resolve) 
/* 加急配送费 */
const urgencyBill = resolve => require(['../components/bill/urgencyBill.vue'], resolve)
/* 酒店欠款 */
const oweBill = resolve => require(['../components/bill/oweBill.vue'], resolve)

/* 售后管理 */
const feedBack = resolve => require(['../components/feedBack/feedBack.vue'], resolve) 
/* 赔偿记录 */
const compensateList = resolve => require(['../components/feedBack/compensateList.vue'], resolve)

/* 洗涤数列表 */ 
const cleanList = resolve => require(['../components/clean/cleanList.vue'], resolve)
// 新洗涤报表
const newCleanList = resolve => require(['../components/clean/newCleanList.vue'], resolve)
// 生产计划参考表
const Production = resolve => require(['../components/clean/Production.vue'], resolve)
// 复核报表
// const cleanAlllist = resolve => require(['../components/clean/cleanAlllist.vue'], resolve)
// 复核报表详情
// const skuList = resolve => require(['../components/clean/skuList.vue'], resolve)
// 盘库
const library = resolve => require(['../components/clean/library.vue'], resolve)
// 污物收货
const Dirtcollection = resolve => require(['../components/clean/Dirtcollection.vue'], resolve)
// 净物配货
const Netgoods = resolve => require(['../components/clean/Netgoods.vue'], resolve)
// 日志
const logo = resolve => require(['../components/clean/logo.vue'], resolve)
// 司机复核
const driverReview = resolve => require(['../components/clean/driverReview.vue'], resolve)
// 司机复核详情
const driverReviewDetail = resolve => require(['../components/clean/driverReviewDetail.vue'], resolve)
// 僵尸布草
const linenCorpse = resolve => require(['../components/clean/linenCorpse.vue'], resolve)
// 布草洗涤报表
const linenWashTime = resolve => require(['../components/clean/linenWashTime.vue'], resolve)
// 布草报废报表
const linenScorp = resolve => require(['../components/clean/linenScorp.vue'], resolve)
// 报废洗涤次数统计
const scrapWashingtimes = resolve => require(['../components/clean/scrapWashingtimes.vue'], resolve)
// 报废金额统计
const scrapWashingMoney = resolve => require(['../components/clean/scrapWashingMoney.vue'], resolve)
// 布草登记报表
const registerReport = resolve => require(['../components/clean/registerReport.vue'], resolve)
// 布草修改报表
const linenUpdateStatistics = resolve => require(['../components/clean/linenUpdateStatistics.vue'], resolve)
// 入厂复核差异
const Review = resolve => require(['../components/clean/Review.vue'], resolve)
// 出厂复核差异
const distributionReview = resolve => require(['../components/clean/distributionReview.vue'], resolve) 
// 收货统计报表
const dayCollect = resolve => require(['../components/clean/dayCollect.vue'], resolve) 
// 发货统计报表
const dayDeliver = resolve => require(['../components/clean/dayDeliver.vue'], resolve) 
// 打扎统计表
const lashCount = resolve => require(['../components/clean/lashCount.vue'], resolve)
// 布草返洗统计表
const linenBackwashing = resolve => require(['../components/clean/linenBackwashing.vue'], resolve) 
// 网上下单统计
const onlineOrder = resolve => require(['../components/clean/onlineOrder.vue'], resolve)  
// 网上下单统计明细
const onlineOrderDetails = resolve => require(['../components/clean/onlineOrderDetails.vue'], resolve) 
// 线路收发数量统计
const linesNumber = resolve => require(['../components/clean/linesNumber.vue'], resolve)
// 赔偿纪录报表
const compensationRecord = resolve => require(['../components/clean/compensationRecord.vue'], resolve)  
// 非租赁库存统计
const noleaseStock = resolve => require(['../components/clean/noleaseStock.vue'], resolve)  
// 非租赁库存统计
const allScrap = resolve => require(['../components/clean/allScrap.vue'], resolve) 
// 配比数报表
const standardReport = resolve => require(['../components/clean/standardReport.vue'], resolve) 
// 增补管理
const supplementary = resolve => require(['../components/clean/supplementary.vue'], resolve) 
// 配比数变动
const standardHistory = resolve => require(['../components/clean/standardHistory.vue'], resolve) 
// 厂内回洗统计
const factoryBackWash  = resolve => require(['../components/clean/factoryBackWash.vue'], resolve)
// 回洗基础数据
const backWashBasicsList  = resolve => require(['../components/clean/backWashBasicsList.vue'], resolve)


// 权限
const role = resolve => require(['../components/power/roleManage.vue'], resolve) 
const user = resolve => require(['../components/power/userManage.vue'], resolve) 
// 权限配置页面
// import roleConfig from '../components/power/roleConfig.vue'
const roleConfig = resolve => require(['../components/power/roleConfig.vue'], resolve) 

// 酒店库存列表
const hotelList = resolve => require(['../components/hotelStock/hotelList.vue'], resolve) 
// 酒店库存修改记录
const hotelStockRecord = resolve => require(['../components/hotelStock/hotelStockRecord.vue'], resolve) 

// 收脏汇总单
const visceraOrderList = resolve => require(['../components/Viscera/visceraOrderList.vue'], resolve) 
// 收脏流水单
const visceraFlowList = resolve => require(['../components/Viscera/visceraFlowList.vue'], resolve) 
// 收脏流水单
const floorViscera = resolve => require(['../components/Viscera/floorViscera.vue'], resolve)
// 仓库管理
const warehouseList = resolve => require(['../components/warehouse/WarehouseList.vue'], resolve)
// 库存调拨
const warehouseFlow = resolve => require(['../components/warehouse/warehouseFlow.vue'], resolve)
// 新增库存调拨
const addWarehouseAllocation = resolve => require(['../components/warehouse/addWarehouseAllocation.vue'], resolve)
// 出入库统计
const warehouseLibrary = resolve => require(['../components/warehouse/warehouseLibrary.vue'], resolve)

// 打扎工资
// 员工档案
const packUser = resolve => require(['../components/wages/packUser.vue'], resolve)
// 每日班次定义
const packClass = resolve => require(['../components/wages/packClass.vue'], resolve)
// 员工出勤记录报表
const packClassUser = resolve => require(['../components/wages/packClassUser.vue'], resolve)
// 日常班次工作量输入
const packClassInput = resolve => require(['../components/wages/packClassInput.vue'], resolve)
// 工作任务定义
const packPrice = resolve => require(['../components/wages/packPrice.vue'], resolve)
// 工资
const packWage = resolve => require(['../components/wages/packWage.vue'], resolve)


//采购管理
// 采购订单
const purchaseOrder = resolve => require(['../components/Purchase/purchaseOrder.vue'], resolve)
// 新增采购订单
const addPurchase = resolve => require(['../components/Purchase/addPurchase.vue'], resolve)
// 采购入库
const purchaseStock = resolve => require(['../components/Purchase/purchaseStock.vue'], resolve)
// 新增采购入库
const addPurchaseOrder = resolve => require(['../components/Purchase/addPurchaseOrder.vue'], resolve)


Vue.use(Router)
const routes = [{
    path: '/',
    component: login
  },{
    path: '/index',
    component: index,
    name: 'index',
    meta:{
      name:"首页",
    },
    children: [
        {
          path: '/hotelList',
          components: {
            view: hotelList
          },
          name: 'hotelList',
          meta:{
            name:"酒店库存",
          },
          children:[
            {
              path:"hotelStockRecord",
              component: hotelStockRecord,
              name:"酒店库存明细"
            },
          ]
        },
        {
          path: '/visceraOrderList',
          components: {
            view: visceraOrderList
          },
          name: 'visceraOrderList',
          meta:{
            name:"酒店收脏汇总单",
          },
        },
        {
          path: '/author',
          components: {
            view: author
          },
          name: '微信登录授权'
        },
        {
          path: '/floorViscera',
          components: {
            view: floorViscera
          },
          name: 'floorViscera',
          meta:{
            name:"楼层收脏单",
          },
        },
        {
          path: '/visceraFlowList',
          components: {
            view: visceraFlowList
          },
          name: 'visceraFlowList',
          meta:{
            name:"收脏流水单",
          },
        },{
          path: '/feedBack',
          components: {
            view: feedBack
          },
          name: 'feedBack',
          meta:{
            name:"反馈列表",
          },
        },{
          path: '/compensateList',
          components: {
            view: compensateList
          },
          name: 'compensateList',
          meta:{
            name:"赔偿记录",
          },
        },{
          path: '/home',
          components: {
            view: home
          },
          name: 'home',
          meta:{
            name:"首页",
          }
        },{
          path: '/deliver',
          components: {view:deliver},
          name: 'deliver',
          meta:{
            name:"发货进度表",
          },
        },{
          path: '/Production',
          components: {
            view: Production
          },
          name: 'Production',
          meta:{
            name:"生产计划参考表",
          },
        },{
          path: '/rfid',
          components: {
            view: rfid
          },
          name: 'rfid',
          meta:{
            name:"RFID管理",
          },
        },{
          path: '/linen',
          components: {
            view: linen
          },
          name: 'linen',
          meta:{
            name:"布草管理",
          },
        },{
          path: '/linenbag',
          components: {
            view: linenbag
          },
          name: 'linenbag',
          meta:{
            name:"布草包管理",
          },
          children:[
            {
              path:"linenbagUseLog",
              component:linenbagUseLog,
              name:"布草包使用记录"
            }
          ]
        },{
          path: '/warehouseList',
          components: {
            view: warehouseList
          },
          name: 'warehouseList',
          meta:{
            name:"仓库库存",
          }
        },{
          path: '/warehouseFlow',
          components: {
            view: warehouseFlow
          },
          name: 'warehouseFlow',
          meta:{
            name:"库存调拨",
          },
          children:[
            {
              path: 'addWarehouseAllocation',
              component: addWarehouseAllocation,
              name: '新增库存调拨'
            }
          ]
        },{
          path: '/warehouseLibrary',
          components: {
            view: warehouseLibrary
          },
          name: 'warehouseLibrary',
          meta:{
            name:"出入库统计",
          }
        },{
          path: '/hotel',
          components: {
            view: hotel
          },
          name: 'hotel',
          meta:{
            name:"酒店信息",
          },
          children: [{
            path: 'IndividualhotelDetail',
            component: IndividualhotelDetail,
            name: '酒店信息详情'
          },
          // {
          //   path: 'addIndividualHotel',
          //   component: addIndividualHotel,
          //   name: '个体酒店'
          // }, 
          {
            path: 'addGroupHotel',
            component: addGroupHotel,
            name: '集团酒店'
          }, {
            path: 'hotelInformation',
            component: hotelInformation,
            name: '酒店基本信息修改'
          }]
        },{
          path: '/hotelWallet',
          components: {
            view: hotelWallet
          },
          name: 'hotelWallet',
          meta:{
              name:"酒店钱包",
          },
          children: [{
            path: 'hotelWalletDetail',
            component: hotelWalletDetail,
            name: '酒店钱包交易'
          }]
        },{
            path: '/hotelMap',
            components: {view:hotelMap},
            name: 'hotelMap',
            meta:{
              name:"酒店地图"
            }
          },{
          path: '/factory',
          components: {
            view: factory
          },
          name: 'factory',
          meta:{
              name:"工厂管理",
          },
          children: [{
            path: 'addfactory',
            component: addfactory,
            name: '新增工厂'
          }, {
            path: 'updatefactory',
            component: updateFactory,
            name: '修改工厂'
          }]
        },{
          path: '/suppliers',
          components: {
            view: suppliers
          },
          name: 'suppliers',
          meta:{
              name:"供应商维护",
          },
        },{
          path: '/hotelGrand',
          components: {
            view: hotelGrand
          },
          name: 'hotelGrand',
          meta:{
              name:"酒店品牌维护",
          },
        },{
          path: '/hotelGroup',
          components: {
            view: hotelGroup
          },
          name: 'hotelGroup',
          meta:{
              name:"酒店集团维护",
          },
        },{
          path: '/linenSku',
          components: {
            view: linenSku
          },
          name: 'linenSku',
          meta:{
              name:"租赁布草SKU",
          },
          children: [{
            path: 'linenSkuBasic',
            component: linenSkuBasic,
            name: '新增租赁布草SKU'
          }]
        },{
          path: '/noLeaseLinenSKu',
          components: {
            view: noLeaseLinenSKu
          },
          name: 'noLeaseLinenSKu',
          meta:{
              name:"非租赁布草SKU",
          },
          children: [{
            path: 'noLeaseLinenSkuAdd',
            component: noLeaseLinenSkuAdd,
            name: '新增非租赁布草SKU'
          }]
        },{
          path: '/linenAll',
          components: {
            view: linenAll
          },
          name: 'linenAll',
          meta:{
              name:"布草所有者维护",
          },
        },
        // {
        //   path: '/labelling',
        //   components: {
        //     view: labelling
        //   },
        //   name: 'labelling',
        //   meta:{
        //       name:"标签维护",
        //   },
        // },
        {
          path: '/subject',
          components: {
            view: subject
          },
          name: 'subject',
          meta:{
              name:"科目维护",
          },
        },{
          path: '/dictionary',
          components: {
            view: dictionary
          },
          name: 'dictionary',
          meta:{
              name:"字典维护",
          },
        }, 
        // {
        //   path: '/equipment',
        //   components: {
        //     view: equipment
        //   },
        //   name: 'equipment',
        //   meta:{
        //       name:"设备管理维护",
        //   },
        // }, 
        {
          path: '/daybill',
          components: {
            view: daybill
          },
          name: 'daybill',
          meta:{
              name:"日结账单",
          },
        },{
          path: '/monthbill',
          components: {
            view: monthbill
          },
          name: 'monthbill',
          meta:{
              name:"月结账单",
          },
        },{
          path: '/notBill',
          components: {
            view: notBill
          },
          name: 'notBill',
          meta:{
              name:"未出账单",
          },
        },{
          path: '/parkingBill',
          components: {
            view: parkingBill
          },
          name: 'parkingBill',
          meta:{
              name:"停车费",
          },
        },{
          path: '/urgencyBill',
          components: {
            view: urgencyBill 
          },
          name: 'urgencyBill',
          meta:{
              name:"加急配送费",
          },
        },{
          path: '/oweBill',
          components: {
            view: oweBill
          },
          name: 'oweBill',
          meta:{
              name:"酒店欠款总表",
          },
        },{
          path: '/flow',
          components: {
            view: flow
          },
          name: 'flow',
          meta:{
              name:"线路列表",
          },
          children: [
          // {
          //   path: 'addRoute',
          //   component: addRoute,
          //   name: '增加线路'
          // }, 
          // {
          //   path: 'flowInformation',
          //   component: flowInformation,
          //   name: '线路信息'
          // }
          ]
        }, 
        // {
        //   path: '/hotelAbnormailty',
        //   components: {
        //     view: hotelAbnormailty
        //   },
        //   name: 'hotelAbnormailty',
        //   meta:{
        //       name:"酒店异常统计",
        //   },
        // }, 
        // {
        //   path: '/logistics',
        //   components: {
        //     view: logistics
        //   },
        //   name: 'logistics',
        //   meta:{
        //       name:"物流配送统计",
        //   },
        // }, 
        // {
        //   path: '/linenTakeUp',
        //   components: {
        //     view: linenTakeUp
        //   },
        //   name: 'linenTakeUp',
        //   meta:{
        //       name:"布草占用阀值预警",
        //   },
        // }, 
        // {
        //   path: '/linenLife',
        //   components: {
        //     view: linenLife
        //   },
        //   name: 'linenLife',
        //   meta:{
        //       name:"布草等级及寿命统计",
        //   },
        // }, 
        // {
        //   path: '/hotelInventory',
        //   components: {
        //     view: hotelInventory
        //   },
        //   name: 'hotelInventory',
        //   meta:{
        //       name:"酒店库存呆滞预警",
        //   },
        // },
        {
          path: '/orderManage',
          components: {
            view: orderManage
          },
          name: 'orderManage',
          meta:{
              name:"订单",
          },
          children: [
            // {
            //   path: 'orderDetail',
            //   component: orderDetail,
            //   name: '订单详情'
            // }
          ]
        },{
          path: '/logo',
          components: {
            view: logo
          },
          name: 'logo',
          meta:{
              name:"日志查询",
          },
        },{
          path: '/driverReview',
          components: {
            view: driverReview
          },
          name: 'driverReview',
          meta:{
              name:"司机复核差异",
          },
          children:[
            {
              path:'driverReviewDetail',
              component:driverReviewDetail,
              name:"司机复核差异详情"
            }
          ]
        },{
          path: '/linenCorpse',
          components: {
            view: linenCorpse
          },
          name: 'linenCorpse',
          meta:{
              name:"僵尸布草",
          },
        },{
          path: '/linenScorp',
          components: {
            view: linenScorp
          },
          name: 'linenScorp',
          meta:{
              name:"布草报废统计",
          },
        },{
          path: '/scrapWashingtimes',
          components: {
            view: scrapWashingtimes
          },
          name: 'scrapWashingtimes',
          meta:{
              name:"报废洗涤次数统计",
          },
        },{
          path: '/scrapWashingMoney',
          components: {
            view: scrapWashingMoney
          },
          name: 'scrapWashingMoney',
          meta:{
              name:"报废金额统计",
          },
        },{
          path: '/linenWashTime',
          components: {
            view: linenWashTime
          },
          name: 'linenWashTime',
          meta:{
              name:"布草洗涤次数统计",
          },
        },{
          path: '/registerReport',
          components: {
            view: registerReport
          },
          name: 'registerReport',
          meta:{
              name:"布草登记统计",
          },
        },{
          path: '/linenUpdateStatistics',
          components: {
            view: linenUpdateStatistics
          },
          name: 'linenUpdateStatistics',
          meta:{
              name:"布草修改统计",
          },
        },{
          path: '/Review',
          components: {
            view: Review
          },
          name: 'Review',
          meta:{
              name:"入厂复核差异",
          },
        },{
          path: '/distributionReview',
          components: {
            view: distributionReview
          },
          name: 'distributionReview',
          meta:{
              name:"出厂复核差异",
          },
        },{
          path: '/dayCollect',
          components: {
            view: dayCollect
          },
          name: 'dayCollect',
          meta:{
              name:"收货统计报表",
          },
        },{
          path: '/dayDeliver',
          components: {
            view: dayDeliver
          },
          name: 'dayDeliver',
          meta:{
              name:"发货统计报表",
          },
        },{
          path: '/lashCount',
          components: {
            view: lashCount
          },
          name: 'lashCount',
          meta:{
              name:"打扎统计表",
          },
        },{
          path: '/linenBackwashing',
          components: {
            view: linenBackwashing
          },
          name: 'linenBackwashing',
          meta:{
              name:"布草返洗统计表",
          },
        },{
          path: '/onlineOrder',
          components: {
            view: onlineOrder 
          },
          name: 'onlineOrder',
          meta:{
              name:"网上下单统计表",
          },
          children:[
            {
              path: 'onlineOrderDetails',
              component: onlineOrderDetails,
              name: '网上下单明细'
            }
          ]
        },{
          path: '/linesNumber',
          components: {
            view: linesNumber 
          },
          name: 'linesNumber',
          meta:{
              name:"线路收发数量统计",
          },
        },{
          path: '/compensationRecord',
          components: {
            view: compensationRecord
          },
          name: 'compensationRecord',
          meta:{
              name:"赔偿纪录报表",
          },
        },{
          path: '/noleaseStock',
          components: {
            view: noleaseStock 
          },
          name: 'noleaseStock',
          meta:{
              name:"非租赁库存",
          },
        },{
          path: '/allScrap',
          components: {
            view: allScrap 
          },
          name: 'allScrap',
          meta:{
              name:"报废总表",
          },
        },{
          path: '/standardReport',
          components: {
            view: standardReport 
          },
          name: 'standardReport',
          meta:{
              name:"配比数报表",
          },
        },{
          path: '/supplementary',
          components: {
            view: supplementary
          },
          name: 'supplementary',
          meta:{
              name:"增补管理",
          },
        },{
          path: '/standardHistory',
          components: {
            view: standardHistory 
          },
          name: 'standardHistory',
          meta:{
              name:"配比数变动",
          },
        },{
          path: '/factoryBackWash',
          components: {
            view: factoryBackWash
          },
          name: 'factoryBackWash',
          meta:{
              name:"厂内回洗统计",
          },
        },{
          path: '/backWashBasicsList',
          components: {
            view: backWashBasicsList
          },
          name: 'backWashBasicsList',
          meta:{
              name:"回洗基础数据",
          },
        },{
          path: '/library',
          components: {
            view: library
          },
          name: 'library',
          meta:{
              name:"盘库记录",
          },
        },{
          path: '/Dirtcollection',
          components: {
            view: Dirtcollection
          },
          name: 'Dirtcollection',
          meta:{
              name:"污物收货月报表",
          },
        },{
          path: '/Netgoods',
          components: {
            view: Netgoods
          },
          name: 'Netgoods',
          meta:{
              name:"净物配货月报表",
          },
        },{
          path: '/cleanList',
          components: {
            view: cleanList
          },
          name: 'cleanList',
          meta:{
              name:"洗涤报表",
          },
        },{
          path: '/newCleanList',
          components: {
            view: newCleanList
          },
          name: 'newCleanList',
          meta:{
              name:"洗涤报表(新)",
          },
        },
        // {
        //   path: '/skuList',
        //   components: {view:skuList},
        //   name: 'skuList',
        //   meta:{
        //       name:"复核报表详情",
        //   },
        // },
        // {
        //   path: '/cleanAlllist',
        //   components: {view:cleanAlllist},
        //   name: 'cleanAlllist',
        //   meta:{
        //       name:"复核报表",
        //   },
        // },
        {
          path: '/task',
          components: {
            view: task
          },
          name: 'task',
          meta:{
              name:"任务单",
          },
          children: [
            // {
            //   path: 'taskDetail',
            //   component: taskDetail,
            //   name: '任务单详情'
            // }
          ]
        },{
          path: '/distribution',
          components: {
            view: distributionList
          },
          name: 'distribution',
          meta:{
              name:"配送单",
          },
          children: [
            // {
            //   path: 'distributionDetail',
            //   component: distributionDetail,
            //   name: '配送单管理'
            // }
          ]
        },
        // {
        //   path: '/orderMaintenance',
        //   components: {
        //     view: orderMaintenance
        //   },
        //   name: 'orderMaintenance',
        //   meta:{
        //       name:"订单维护",
        //   },
        //   children: [{
        //     path: 'orderMaintenanceDetail',
        //     component: orderMaintenanceDetail,
        //     name: '订单维护详情'
        //   },
        //   // {
        //   //   path: 'orderMaintenanceLog',
        //   //   component: orderMaintenanceLog,
        //   //   name: '订单维护日志'
        //   // }
        //   ]
        // },
        {
          path: '/newOrder',
          components: {
            view: newOrder
          },
          name: 'newOrder',
          meta:{
              name:"网上下单",
          },
        },{
          path: '/noleaseViscera',
          components: {
            view: noleaseViscera
          },
          name: 'noleaseViscera',
          meta:{
              name:"非租赁收赃单",
          },
        },{
          path: '/noleaseDistribution',
          components: {
            view: noleaseDistribution
          },
          name: 'noleaseDistribution',
          meta:{
              name:"非租赁配送单",
          },
        },{
          path: '/supplementOrder',
          components: {
            view: supplementOrder
          },
          name: 'supplementOrder',
          meta:{
              name:"补单",
          },
        },{
          path: '/orderLog',
          components: {
            view: orderLog
          },
          name: 'orderLog',
          meta:{
              name:"订单维护日志",
          },
        },{
          path: '/role',
          components: {
            view: role
          },
          name: 'role',
          meta:{
              name:"角色",
          },
        },{
          path: '/packUser',
          components: {
            view: packUser
          },
          name: 'packUser',
          meta:{
              name:"员工档案",
          },
        },{
          path: '/packClass',
          components: {
            view: packClass
          },
          name: 'packClass',
          meta:{
              name:"每日班次定义",
          },
        },{
          path: '/packClassUser',
          components: {
            view: packClassUser
          },
          name: 'packClassUser',
          meta:{
              name:"员工出勤记录报表",
          },
        },{
          path: '/packClassInput',
          components: {
            view: packClassInput
          },
          name: 'packClassInput',
          meta:{
              name:"日常班次工作量输入",
          },
        },{
          path: '/packPrice',
          components: {
            view: packPrice
          },
          name: 'packPrice',
          meta:{
              name:"工作任务定义",
          },
        },{
          path: '/packWage',
          components: {
            view: packWage
          },
          name: 'packWage',
          meta:{
              name:"工资",
          },
        },{
          path: '/user',
          components: {
            view: user
          },
          name: 'user',
          meta:{
              name:"用户",
          },
          children:[
            {
              path: 'roleConfig',
              component: roleConfig,
              name: '权限配置'
            }
          ]
        },{
          path: '/purchaseOrder',
          components: {
            view: purchaseOrder
          },
          name: 'purchaseOrder',
          meta:{
              name:"采购订单",
          },
          children:[
            {
              path: 'addPurchase',
              component: addPurchase,
              name: '新增采购订单'
            }
          ]
        },{
          path: '/purchaseStock',
          components: {
            view: purchaseStock
          },
          name: 'purchaseStock',
          meta:{
              name:"采购入库",
          },
          children:[
            {
              path: 'addPurchaseOrder',
              component: addPurchaseOrder,
              name: '新增入库单'
            }
          ]
        },
      ]
    }
  ]
export default new Router({
  routes
})
