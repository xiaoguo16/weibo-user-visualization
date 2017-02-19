 // 路径配置
        require.config({
            paths: {
                echarts: '../js/dist'
            }
        });
        
        // 使用
        require(
            [
                'echarts',
				'echarts/chart/pie',// 使用饼图就加载pie模块，按需加载
				'echarts/chart/funnel',//漏斗
				'echarts/chart/bar',//条形图
				'echarts/chart/line',//线图
				'echarts/chart/wordCloud',
				'echarts/chart/map',
				'echarts/chart/force'
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var chartpie=ec.init(document.getElementById('pie-tool')); 
				var chartthird=ec.init(document.getElementById('pie-third')); 
				var chartstatis=ec.init(document.getElementById('statis')); 
				var chartmonth1 =ec.init(document.getElementById('m1'));
                var chartmonth2 =ec.init(document.getElementById('m2'));
                var chartmonth3 =ec.init(document.getElementById('m3'));

				var chartword=ec.init(document.getElementById('wordcloud'));
				var chartattention=ec.init(document.getElementById('attention')); 
				var charttext=ec.init(document.getElementById('textcloud'));
				var chartsex=ec.init(document.getElementById('sex')); 
				var chartbirth=ec.init(document.getElementById('birth')); 
				var chartarea=ec.init(document.getElementById('area')); 
				//var chartego=ec.init(document.getElementById('ego'));
				var chartlabel=ec.init(document.getElementById('label'));				
				
                optiontool = {
					title : {
						text: '通讯工具使用情况',
						//subtext: '纯属虚构',
						x:'center'
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient : 'vertical',
						x : 'left',
						data:['Android客户端','UC浏览器客户端','红围脖Android客户端']
					},
					toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {
								show: true, 
								type: ['pie', 'funnel'],
								option: {
									funnel: {
										x: '25%',
										width: '50%',
										funnelAlign: 'left',
										max: 377
									}
								}
							},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					calculable : true,
					series : [
						{
							name:'通信工具比例',
							type:'pie',
							radius : '55%',
							center: ['50%', '60%'],
							data: [
									{name : 'Android客户端', value : 377},
									{name : 'UC浏览器客户端', value : 42},
									{name : '红围脖Android客户端', value : 69}
								] 
						}
					]
				};
				
				
				
				optionstatis = {
					title : {
						text: '用户统计信息',
						//subtext: '纯属虚构'
						x:'center'
					},
					tooltip : {
						trigger: 'axis'
					},
					
					toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {show: true, type: ['line', 'bar']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					calculable : true,
					xAxis : [
						{
							type : 'category',
							data : ['发帖数','转发数','粉丝数','关注数']
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							name:'数量',
							type:'bar',
							data:[1900, 1396, 295, 204]
						}
					]
				};
                    
				
				
				
                    optionmonth1 = {
                        title : {
                            text: '用户年发帖规律',
                            x:'center'
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient : 'vertical',
                            x : 'left',
                            data:['2009年','2010年','2011年','2012年','2013年','2014年','2015年']
                        },
                        toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true, 
                                type: ['pie', 'funnel'],
                                option: {
                                    funnel: {
                                        x: '25%',
                                        width: '50%',
                                        funnelAlign: 'left',
                                        max: 93
                                    }
                                }
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                        calculable : true,
                        series : [
                            {
                                name:'发帖量',
                                type:'pie',
                                radius : '55%',
                                center: ['50%', '60%'],
                                data:[
                                    {value:0, name:'2009年'},
                                    {value:403, name:'2010年'},
                                    {value:894, name:'2011年'},
                                    {value:520, name:'2012年'},
                                    {value:51, name:'2013年'},
                                    {value:14, name:'2014年'},
                                    {value:5, name:'2015年'}
                                ]
                            }
                        ]
                    };

                    optionmonth2 = {
                        title:{
                        text:'发帖最多年份的规律',
                        // x:'center'
                        },
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {
                                type: 'shadow'
                            }
                        },


                        toolbox: {
                            show : true,
                            // orient : 'vertical',
                            // y : 'center',
                            feature : {
                                mark : {show: true},
                                dataView:{show:true,readOnly:false},
                                magicType : {show: true, type: ['line', 'bar']},
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        calculable : true,
                        xAxis : [
                            {
                                type : 'category',
                                data : ['2011/1','2011/2','2011/3','2011/4','2011/5','2011/6','2011/7','2011/8','2011/9','2011/10','2011/11','2011/12']
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                splitArea : {show : true},
                                axisLabel:{
                                    formatter:'{value}次'
                                }
                            }
                        ],
                        grid: {
                            x2:40
                        },
                        series : [
                            {
                                name:'该月发帖量',
                                type:'line',
                                data:[55,101,88,37,129,116,91,18,58,108,51,42],
                                markPoint:{
                                data:[
                                {type:'max',name:'最大月发帖量'},
                                {type:'average',name:'平均值'}
                                ]
                                }
                            }
                        
                        ]
                    };
                
                    optionmonth3 = {
                        title:{
                        text:'发帖最多月份的规律',
                        // x:'center'
                        },
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {
                                type: 'shadow'
                            }
                        },
        

                        toolbox: {
                            show : true,
                            // orient : 'vertical',
                            // y : 'center',
                            feature : {
                                mark : {show: true},
                                dataView:{show:true,readOnly:false},
                                magicType : {show: true, type: ['line', 'bar']},
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        calculable : true,
                        xAxis : [
                            {
                                type : 'category',
                                data : ['2011/5/1','2011/5/2','2011/5/3','2011/5/4','2011/5/5','2011/5/6','2011/5/7','2011/5/8','2011/5/9','2011/5/10','2011/5/11','2011/5/12','2011/5/13','2011/5/14','2011/5/15','2011/5/16','2011/5/17','2011/5/18','2011/5/19','2011/5/20','2011/5/21','2011/5/22','2011/5/23','2011/5/24','2011/5/25','2011/5/26','2011/5/27','2011/5/28','2011/5/29','2011/5/30']
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value',
                                splitArea : {show : true},
                                axisLabel:{
                                    formatter:'{value}次'
                                }
                            }
                        ],
                        grid: {
                            x2:40
                        },
                        series : [
                            {
                                name:'该日发帖量',
                                type:'line',
                                data:[6,9,6,3,5,1,4,1,5,8,2,2,1,0,3,2,9,5,7,6,3,10,1,4,7,2,5,2,3,7],
                                markPoint:{
                                data:[
                                {type:'max',name:'最大日发帖量'},
                                {type:'average',name:'平均值'}
                                ]
                                }
                            }
                        
                        ]
                    }; 
				
				
				
				
                 optionthird = {
					title : {
						text: '第三方应用使用情况',
						//subtext: '纯属虚构',
						x:'center'
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient : 'vertical',
						x : 'left',
						data:['真心话','搜狗浏览器分享工具','投票','勋章馆','土豆','酷六网','分享按钮']
					},
					toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {
								show: true, 
								type: ['pie', 'funnel'],
								option: {
									funnel: {
										x: '25%',
										width: '50%',
										funnelAlign: 'left',
										max: 7
									}
								}
							},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					calculable : true,
					series : [
						{
							name:'第三方应用使用次数：',
							type:'pie',
							radius : '55%',
							center: ['50%', '60%'],
							data:[
								{value:5, name:'真心话'},
								{value:2, name:'搜狗浏览器分享工具'},
								{value:3, name:'投票'},
								{value:5, name:'勋章馆'},
								{value:7, name:'土豆'},
								{value:3, name:'酷六网'},
								{value:4, name:'分享按钮'}
							]
						}
					]
				}; 
				
			
function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}

optionword = {
    title: {
        text: '用户关注话题分布',
    },
    tooltip: {
        show: true
    },
    series: [{
        name: '关注话题次数',
        type: 'wordCloud',
        size: ['80%', '80%'],
        textRotation : [0, 45, 90, -45],
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 14
        },
        data: [
            {
                name: "海贼王",
                value: 2,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "美图秀秀Android版",
                value: 4,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "有奖转发",
                value: 3,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "微小说",
                value: 3,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "亮相预告",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "优酷问候",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "微博达人",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "安康市区",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "西安生活",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "火影忍者",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "转发分享",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "微博冠军杯",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "SOHO播报",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "IN播报",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "老西安",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "达人积分",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "三剑客LA",
                value: 2,
                itemStyle: createRandomItemStyle()
            }
        ]
    }]
};
                    
optiontext = {
    title: {
        text: '微博文本高频词统计',
    },
    tooltip: {
        show: true
    },
    series: [{
        name: '高频词',
        type: 'wordCloud',
        size: ['80%', '80%'],
        textRotation : [0, 45, 90, -45],
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 14
        },
        data: [
            {
                name: "微博",
                value: 125,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "罐罐",
                value: 105,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "视频",
                value: 100,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "转发",
                value: 78,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "笑话",
                value: 60,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "冷笑",
                value: 59,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "精选",
                value: 59,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "哈哈哈哈",
                value: 39,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "分享",
                value: 39,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "我们",
                value: 37,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "经典",
                value: 36,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "世界杯",
                value: 35,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "西安",
                value: 31,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "一个",
                value: 31,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "这个",
                value: 29,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "现在",
                value: 27,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "排行榜",
                value: 27,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "全球",
                value: 25,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "我的",
                value: 25,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "花心",
                value: 24,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "语录",
                value: 24,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "酷网",
                value: 24,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "热门",
                value: 24,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "口味",
                value: 23,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "这么",
                value: 22,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "都爱",
                value: 21,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "爱重",
                value: 21,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "新浪",
                value: 21,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "手机",
                value: 21,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "哈哈",
                value: 20,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "就是",
                value: 20,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "的人",
                value: 19,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "哈哈哈",
                value: 18,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "热点",
                value: 18,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "明星",
                value: 18,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "你的",
                value: 17,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "音乐",
                value: 16,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "纷华",
                value: 16,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "静默",
                value: 16,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "没有",
                value: 15,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "地址",
                value: 15,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "支持",
                value: 15,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "勋章",
                value: 15,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "不错",
                value: 14,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "还是",
                value: 14,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "来了",
                value: 14,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "到了",
                value: 13,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "亮了",
                value: 13,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "潘石屹",
                value: 13,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "中国",
                value: 13,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "创意",
                value: 13,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "一起",
                value: 13,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "怎么",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "真是",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "是我",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "无聊",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "看看",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "朋友",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "是不",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "今天",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "一下",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "已经",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "是个",
                value: 12,
                itemStyle: createRandomItemStyle()
            }
        ]
    }]
};

optionattention = {
					title : {
						text: '微博情感分析',
						//subtext: '纯属虚构',
						x:'center'
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient : 'vertical',
						x : 'left',
						data:['生气','厌恶','恐惧','高兴','喜欢','悲伤','惊讶']
					},
					toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {
								show: true, 
								type: ['pie', 'funnel'],
								option: {
									funnel: {
										x: '25%',
										width: '50%',
										funnelAlign: 'left',
										max:621
									}
								}
							},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					calculable : true,
					series : [
						{
							name:'微博情感统计：',
							type:'pie',
							radius : '55%',
							center: ['50%', '60%'],
							data:[
								{value:49, name:'生气'},
								{value:209, name:'厌恶'},
								{value:4, name:'恐惧'},
								{value:329, name:'高兴'},
								{value:621, name:'喜欢'},
								{value:152, name:'悲伤'},
								{value:25, name:'惊讶'}
							]
						}
					]
				};  
				
				optionsex = {
					title : {
						text: '关注用户性别比例',
						//subtext: '纯属虚构',
						x:'center'
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient : 'vertical',
						x : 'left',
						data:['男','女']
					},
					toolbox: {
						show : true,
						orient : 'vertical',
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							
							//restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					calculable : true,
					series : [
						{
							name:'性别比例',
							type:'pie',
							radius : '55%',
							center: ['50%', '60%'],
							data: function(){$.ajax({
									type: "get",
									dataType:'json',
									url: '../json/1677605544.json',
									success: function (data) {
										
										console.log(data.sex);
										optionsex.series[0].data = data.sex;
										chartsex.setOption(optionsex);

										},
									error: function (xhr, txt, err) {
	                                       console.log(xhr.status + ":" + txt +", " + err.message);
	                                       }
	
								})
						 }() 
						}
					]
				};


				optionbirth = {
					title : {
						text: '关注用户年龄段',
						//subtext: '纯属虚构',
						x:'center'
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient : 'vertical',
						x : 'left',
						data:['60后','70后','80后','90后','00后','其他']
					},
					toolbox: {
						show : true,
						orient : 'vertical',
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							
							//restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					calculable : true,
					series : [
						{
							name:'出生时间段',
							type:'pie',
							radius : ['15%', '55%'],
							center: ['50%', '60%'],
							roseType : 'radius',
							//width: '40%',       // for funnel
							//max: 35,            // for funnel
							itemStyle : {
								normal : {
									label : {
										show : false
									},
									labelLine : {
										show : false
									}
								},
								emphasis : {
									label : {
										show : true
									},
									labelLine : {
										show : true
									}
								}
							},
							data:function(){$.ajax({
									type: "get",
									dataType:'json',
									url: '../json/1677605544.json',
									success: function (data) {
										
										console.log(data.birth);
										optionbirth.series[0].data = data.birth;
										chartbirth.setOption(optionbirth);

										},
									error: function (xhr, txt, err) {
	                                       console.log(xhr.status + ":" + txt +", " + err.message);
	                                       }
	
								})
						 }() 
						}
					]
				};
				
optionarea = {
    title : {
        text: '关注用户省份分布',
        //subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
		formatter: "{a} <br/>{b} : {c} {d}%"
    },
    
    dataRange: {
        min: 0,
        max: 100,
        x: 'left',
        y: 'bottom',
        text:['高','低'],           // 文本，默认为数值文本
        calculable : true
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            name: '用户比例',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:function(){$.ajax({
									type: "get",
									dataType:'json',
									url: '../json/1677605544.json',
									success: function (data) {
										
										console.log(data.province);
										optionarea.series[0].data = data.province;
										chartarea.setOption(optionarea);

										},
									error: function (xhr, txt, err) {
	                                       console.log(xhr.status + ":" + txt +", " + err.message);
	                                       }
	
								})
						 }()
        }
    ]
};

optionlabel = {
					title : {
						text: '关注用户标签分布',
						//subtext: '纯属虚构'
						x:'center'
					},
					tooltip : {
						trigger: 'axis'
					},
					
					toolbox: {
						show : true,
						feature : {
							mark : {show: true},
							dataView : {show: true, readOnly: false},
							magicType : {show: true, type: ['line', 'bar']},
							restore : {show: true},
							saveAsImage : {show: true}
						}
					},
					calculable : true,
					xAxis : [
						{
							type : 'category',
							//data : ['发帖数','转发数','粉丝数','关注数']
							data:function(){$.ajax({
									type: "get",
									dataType:'json',
									url: '../json/1677605544.json',
									success: function (data) {
										var arr=[];
										console.log(data.label);
										for(i=0;i<10;i++){
											arr[i]=data.label[i].name;
										}
										optionlabel.xAxis[0].data = arr;
										},
									error: function (xhr, txt, err) {
	                                       console.log(xhr.status + ":" + txt +", " + err.message);
	                                       }
	
								})
						 }()
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							name:'数量',
							type:'bar',
							data:function(){$.ajax({
									type: "get",
									dataType:'json',
									url: '../json/1677605544.json',
									success: function (data) {
										var brr=[];
										for(i=0;i<10;i++){
											brr[i]=data.label[i].value;
										}
										optionlabel.series[0].data = brr;
                                          chartlabel.setOption(optionlabel);
										},
									error: function (xhr, txt, err) {
	                                       console.log(xhr.status + ":" + txt +", " + err.message);
	                                       }
	
								})
						 }()
						}
					]
				};
				
        
                // 为echarts对象加载数据 
				chartpie.setOption(optiontool);
				chartstatis.setOption(optionstatis);
				chartthird.setOption(optionthird);
                chartmonth1.setOption(optionmonth1);
                chartmonth2.setOption(optionmonth2);
                chartmonth3.setOption(optionmonth3);
				chartword.setOption(optionword);
				chartattention.setOption(optionattention);
				charttext.setOption(optiontext);
            }
			
        );
		