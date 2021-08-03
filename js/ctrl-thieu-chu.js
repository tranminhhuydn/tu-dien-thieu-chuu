var bothuCode = [
        {net:1,arr:["一", "丨", "丶", "丿"]},
        {net:2,arr:["乙", "亅", "二", "亠", "人","儿", "入", "八", "冂", "冖", "冫", "几", "凵", "刀", "力","勹", "匕", "匚", "匸", "十", "卜", "卩", "厂", "厶", "又"]},
        {net:3,arr:["口", "囗", "土", "士", "夂", "夊", "夕", "大", "女", "子", 
            "宀", "寸", "小", "尢", "尸", "屮", "山", "川", "工", "己", 
            "巾", "干", "幺", "广", "廴", "廾", "弋", "弓", "彐", "彡", 
            "彳"]},
        {net:4,arr:["心", "戈", "戶", "手", "支", "攴", "文", "斗", "斤", 
            "方", "无", "日", "曰", "月", "木", "欠", "止", "歹", "殳", 
            "毋", "比", "毛", "氏", "气", "水", "火", "爪", "父", "爻", 
            "爿", "片", "牙", "牛", "犬"]}, 
        {net:5,arr:["玄", "玉", "瓜", "瓦", "甘", 
            "生", "用", "田", "疋", "疒", "癶", "白", "皮", "皿", "目", 
            "矛", "矢", "石", "示", "禸", "禾", "穴", "立"]},
        {net:6,arr:["竹", "米", 
            "糸", "缶", "网", "羊", "羽", "老", "而", "耒", "耳", "聿", 
            "肉", "臣", "自", "至", "臼", "舌", "舛", "舟", "艮", "色", 
            "艸", "虍", "虫", "血", "行", "衣", "襾"]}, 
        {net:7,arr:["見", "角", "言", "谷", "豆", "豕", "豸", "貝", "赤", "走", "足", "身", "車", "辛", "辰", "辵", "邑", "酉", "釆", "里", "金"]}, 
        {net:8,arr:["長", "門", "阜", "隶", "隹", "雨", "青", "非"]},
        {net:9,arr:["面", "革", "韋", "韭", "音", "頁", "風", "飛", "食", "首", "香"]},
        {net:10,arr:["馬", "骨", "高", "髟", "鬥", "鬯", "鬲", "鬼"]}, 
        {net:11,arr:["魚", "鳥", "鹵", "鹿", "麥", "麻"]}, 
        {net:12,arr:["黃", "黍", "黑", "黹"]},
        {net:13,arr:["黽", "鼎", "鼓", "鼠"]},
        {net:14,arr:["鼻", "齊"]}, 
        {net:15,arr:["齒"]}, 
        {net:16,arr:["龍", "龜"]}, 
        {net:17,arr:["龠"]}
        ];
var tenBo = [];
(function(angular) {
'use strict';
var
{log} = console

// các dị dạng phồn thể
//4,4,5,5,9,9,18,18,26,39,39,39,43,43,47,47,52,58,58,61

  var soNet = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214]
  ,soNet = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]
  ,paneSelected = null;
function ctrlThieuChu($scope, $http, $templateCache,$location,$anchorScroll) {
  $scope.result = ''
  $scope.result1 = ''
  $scope.result2 = ''
  $scope.resultSoNetConLai = ''
  $scope.key =''
  $scope.boThu = bothuCode
  $scope.soNet = soNet

  $scope.getAmHanCuaBo = (key,bs)=>{
    var r = $scope.findChuHan(key)[0]
    if(!Array.isArray(bs.am_han))
      bs.am_han = []
    bs.am_han.push(r.am_han)

    if(!Array.isArray(bs.bo_thu))
      bs.bo_thu = []
    bs.bo_thu.push(r.bo_thu)
    tenBo.push({bo:r.bo_thu,am:r.am_han,net:r.so_net_2})
    //log(r.bo_thu)
    return r.am_han
  }
  $scope.getTenBo = (n)=>{
    var 
    find = (v,k,s) => { return v.bo == n }; 
    return tenBo.filter(find)[0].am
  }
  $scope.findBo = (sf)=>{
    var 
    find = (v,k,s) => { return v.bo_thu == sf }; 
    return data.filter(find)
  }
  $scope.findAmHan = (sf)=>{
    var 
    find = (v,k,s) => {
      var arr = v.am_han.split(',')
      if(Array.isArray(arr)){
        arr = arr.map((v1,k1,s1)=>{return v1.trim()})
        if(arr.indexOf(sf)!=-1)
          return v
      }
      return v.am_han == sf 
    }; 
    return data.filter(find)
  }
  $scope.findPinyin = (sf)=>{
    var
    find = (v,k,s) => { 
      var arr = v.pinyin.split(',')
      if(Array.isArray(arr)){
        arr = arr.map((v1,k1,s1)=>{return v1.trim()})
        if(arr.indexOf(sf)!=-1)
          return v
      }
      return v.pinyin == sf 
    }; 
    return data.filter(find)
  }
  $scope.findChuHan = (sf)=>{
    var
    find = (v,k,s) => { return v.ky_tu == sf }; 
    return data.filter(find)
  }
  $scope.findNet2 = (sf)=>{
    var
    find = (v,k,s) => { return v.so_net_2 == sf }; 
    return data.filter(find)
  }

  $scope.findBoConLai = (net1)=>{
    var
    find = (v,k,s) => { return v.so_net_1 == net1 }; 
    $scope.result2 = $scope.result1.filter(find)
  }
  $scope.findChiTiet = (sf)=>{
      var find = (v,k,s) => { return v.ky_tu == sf },
      r = $scope.result2.filter(find)
      $scope.result = r
      log(r[0])
  }
  $scope.search=(key)=>{
    //log(key)
    //log(paneSelected)
    var
    onlyUnique = (value, index, self) => {
          return self.indexOf(value) === index;
    }
    switch(paneSelected.title){
      case 'Pinyin':
        var r = $scope.findPinyin(key)
        traChuVaTraNet(r)
      break;
      case 'Chử Hán':
        var 
        r = $scope.findChuHan(key)
        traChuVaTraNet(r)
      break;
      case 'Tra Bộ':
        var r = $scope.findChuHan(key)
        r = $scope.findBo(r[0].bo_thu)
        traChuVaTraNet(r)
        $scope.ctrlTabs.select($scope.ctrlTabs.panes[2])
      break;
      case 'Tra Nét':
        var r = $scope.findNet2(key)
        traChuVaTraNet(r)
      break;
      case 'Âm Hán':
      default:
      var r = $scope.findAmHan(key)
      traChuVaTraNet(r)

      break;
    }
  }
  $scope.findBoThu = (key)=>{
    $scope.search(key)
  }
  $scope.getCtrlTabs = (obj) =>{
    $scope.ctrlTabs = obj
  }
  $scope.selectTab= (pane) =>{
    //log(pane)
    paneSelected = pane
    $scope.key =''
    $scope.result = ''
    $scope.result1 = ''
    $scope.result2 = ''
  }
  var traChuVaTraNet =(r)=>{
        var unique = [...new Set(r.map(item => item.so_net_1))];
        unique = unique.sort((a,b)=>{return a-b})
        r = r.sort((a,b)=>{return a.so_net_1-b.so_net_1})
        $scope.resultSoNetConLai = unique
        //console.clear()
        log(r)
        $scope.result1 = r
        $scope.result2 = $scope.result1
        $scope.result = '';//r
  }
}
angular.module('myApp', [])
.directive('myTabs', function() {
    return {
      //require: 'ctrlUsers',
      restrict: 'E',
      transclude: true,
      scope: {
        init:'&onInit',
        click:'&onClick'
      },
      controller: ['$scope', function MyTabsController($scope) {
        var panes = $scope.panes = [];
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        };

        this.addPane = function(pane) {
          if (panes.length === 0) {
            $scope.select(pane);
          }
          panes.push(pane);
        };
        $scope.self = $scope
      }],
      //templateUrl: 'my-tabs.html'
      template:'<div class="header">'+
                '<div class="container">'+

                '<ul class="nav nav-tabs">'+
                  '<li '+
                    'ng-repeat="pane in panes"' +
                    'ng-class="[{active:pane.selected}]">'+
                    '<a href="#"'+
                    'ng-click="click({obj:pane});select(pane);">'+
                    '<span aria-hidden="true"></span> {{pane.title}}</a>'+
                  '</li>'+
                '</ul>'+
              '</div>'+
     
            '</div>'+
            '<div ng-init="init({obj:self})" class="tab-content" ng-transclude></div>'
    };
  })
  .directive('myPane', function() {
    return {
      require: '^myTabs',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@',
        icon: '@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
       },
      //templateUrl: 'my-pane.html'
      template:'<div class="tab-pane" ng-show="selected">'+
      '  <div class="container">'+
      '    <div ng-transclude></div>'+
      '  </div>'+
      '</div>'
    };
  })
.controller('ctrlThieuChu', [
  '$scope'
  ,'$http'
  ,'$templateCache'
  ,'$location'
  ,'$anchorScroll'
  ,ctrlThieuChu])
})(window.angular);