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
						data:['iPhone客户端','360安全浏览器','新浪博客','微博 weibo.com']
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
										max: 20794
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
									{name : 'iPhone客户端', value : 20794},
									{name : '360安全浏览器', value : 1784},
									{name : '新浪博客', value : 817},
									{name : '微博 weibo.com', value : 3887}
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
							data:[27652, 13339, 21024, 3047]
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
                                        max: 11064
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
                                    {value:0, name:'2010年'},
                                    {value:206, name:'2011年'},
                                    {value:2856, name:'2012年'},
                                    {value:5604, name:'2013年'},
                                    {value:11064, name:'2014年'},
                                    {value:8335, name:'2015年'}
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
                                data : ['2014/1','2014/2','2014/3','2014/4','2014/5','2014/6','2014/7','2014/8','2014/9','2014/10','2014/11','2014/12']
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
                                data:[824,881,1146,809,849,693,1025,1135,907,936,964,895],
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
                                data : ['2014/3/1','2014/3/2','2014/3/3','2014/3/4','2014/3/5','2014/3/6','2014/3/7','2014/3/8','2014/3/9','2014/3/10','2014/3/11','2014/3/12','2014/3/13','2014/3/14','2014/3/15','2014/3/16','2014/3/17','2014/3/18','2014/3/19','2014/3/20','2014/3/21','2014/3/22','2014/3/23','2014/3/24','2014/3/25','2014/3/26','2014/3/27','2014/3/28','2014/3/29','2014/3/30','2014/3/31']
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
                                data:[25,57,40,34,34,50,49,36,41,43,30,70,12,20,19,30,30,43,54,21,42,34,53,48,43,49,44,13,38,30,14],
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
						data:['Qing','未通过审核应用']
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
										max: 177
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
								{value:177, name:'Qing'},
								{value:8, name:'未通过审核应用'}
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
                name: "最新进展",
                value: 296,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "快讯",
                value: 240,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "陕西舆情",
                value: 49,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "反腐",
                value: 45,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "公款吃喝",
                value: 42,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "突发",
                value: 38,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "快评",
                value: 37,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "匪事传奇",
                value: 33,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "独家",
                value: 32,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "每日一呼",
                value: 31,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "书摘",
                value: 30,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "图片新闻",
                value: 30,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "追踪",
                value: 25,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "猛料",
                value: 25,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "关注民生",
                value: 24,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "美丽大荔 周末的家",
                value: 23,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "美女少妇亮家底2700 万",
                value: 23,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "牛行长",
                value: 23,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "寻人",
                value: 22,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "民生大于天",
                value: 22,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "不管你信不信我是信了",
                value: 22,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "圈爆料",
                value: 20,
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
        data: function(){$.ajax({
									type: "get",
									dataType:'json',
									url: '../json/2458371534.json',
									success: function (data) {
										
										console.log(data.cloud);
										for (var i = 1; i < data.cloud.length; i++)
										{
											data.cloud[i].itemStyle = createRandomItemStyle();
										}
										optiontext.series[0].data = data.cloud;
										
								
										//console.log("optiontext.series[0].data ");
										//console.log(optiontext.series[0].data);
										
										charttext.setOption(optiontext);

										},
									error: function (xhr, txt, err) {
	                                       console.log(xhr.status + ":" + txt +", " + err.message);
	                                       }
	
								})
						 }() 
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
										max:17118
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
							data:function(){$.ajax({
									type: "get",
									dataType:'json',
									url: '../json/2458371534.json',
									success: function (data) {
										
										console.log(data.emotion);
										optionattention.series[0].data = data.emotion;
										chartattention.setOption(optionattention);

										},
									error: function (xhr, txt, err) {
	                                       console.log(xhr.status + ":" + txt +", " + err.message);
	                                       }
	
								})
						 }() 
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
									url: '../json/2458371534.json',
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
									url: '../json/2458371534.json',
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
									url: '../json/2458371534.json',
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
									url: '../json/2458371534.json',
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
									url: '../json/2458371534.json',
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
				//chartattention.setOption(optionattention);
				//charttext.setOption(optiontext);
            }
			
        );
		