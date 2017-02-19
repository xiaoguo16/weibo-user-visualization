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
						data:['微博 weibo.com','iOS','Android客户端','新浪微博4G版','中国移动定制终端']
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
										max: 1619
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
									{name : '微博 weibo.com', value : 1619},
									{name : 'iOS', value : 40},
									{name : 'Android客户端', value : 10},
									{name : '新浪微博4G版', value :55},
									{name : '中国移动定制终端', value : 52}
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
							data:[1900, 1085, 90401, 1897]
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
                            data:['2010年','2011年','2012年','2013年','2014年','2015年']
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
                                        max: 703
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
                                    {value:39, name:'2010年'},
                                    {value:613, name:'2011年'},
                                    {value:703, name:'2012年'},
                                    {value:371, name:'2013年'},
                                    {value:73, name:'2014年'},
                                    {value:101, name:'2015年'}
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
                                data : ['2012/1','2012/2','2012/3','2012/4','2012/5','2012/6','2012/7','2012/8','2012/9','2012/10','2012/11','2012/12']
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
                                data:[12,58,73,92,47,30,12,58,34,25,90,130],
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
                                data : ['2012/12/1','2012/12/2','2012/12/3','2012/12/4','2012/12/5','2012/12/6','2012/12/7','2012/12/8','2012/12/9','2012/12/10','2012/12/11','2012/12/12','2012/12/13','2012/12/14','2012/12/15','2012/12/16','2012/12/17','2012/12/18','2012/12/19','2012/12/20','2012/12/21','2012/12/22','2012/12/23','2012/12/24','2012/12/25','2012/12/26','2012/12/27','2012/12/28','2012/12/29','2012/12/30','2012/12/31']
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
                                data:[1,0,2,0,8,5,6,8,0,5,5,6,7,2,0,0,3,3,6,3,0,2,2,2,7,2,3,3,4,2,0],
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
						data:['中国移动定制终端','分享按钮']
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
										max:50
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
								
								{value:50, name:'中国移动定制终端'},
								{value:50, name:'分享按钮'}
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
            minSize: 12
        },
        data: [
            {
                name: "段章取义",
                value: 1,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "隆重推荐BBC纪录片《英国最高法院》",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "普京",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "西外新传通识大讲堂",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "第一时评",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "本官博让你重拾记忆",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "微电影《身度》",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "我在读的几本书",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "箴言",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "时事点评",
                value: 1,
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
										max:718
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
									url: '../json/1461611585.json',
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
        data: 
		function(){$.ajax({
									type: "get",
									dataType:'json',
									url: '../json/1461611585.json',
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
									url: '../json/1461611585.json',
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
									url: '../json/1461611585.json',
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
									url: '../json/1461611585.json',
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
									url: '../json/1461611585.json',
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
									url: '../json/1461611585.json',
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
		