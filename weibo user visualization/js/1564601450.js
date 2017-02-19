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
						data:['Android客户端','三星Galaxy NOTE III','三星GALAXY Note 4','三星Galaxy Note II']
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
										max: 26
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
									{name : 'Android客户端', value : 23},
									{name : '三星Galaxy NOTE III', value : 26},
									{name : '三星GALAXY Note 4', value : 5},
									{name : '三星Galaxy Note II', value :13}
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
							data:[78, 23, 19517, 227]
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
                            data:['2011年','2012年','2013年','2014年','2015年']
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
                                        max: 32
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
                                    {value:18, name:'2011年'},
                                    {value:5, name:'2012年'},
                                    {value:21, name:'2013年'},
                                    {value:32, name:'2014年'},
                                    {value:8, name:'2015年'}
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
                                data : ['2014/1','2014/2','2014/6','2014/4','2014/5','2014/6','2014/7','2014/8','2014/9','2014/10','2014/11','2014/12']
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
                                data:[0,0,0,4,1,18,3,2,3,0,0,1],
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
                                data : ['2014/6/1','2014/6/2','2014/6/3','2014/6/4','2014/6/5','2014/6/6','2014/6/7','2014/6/8','2014/6/9','2014/6/10','2014/6/11','2014/6/12','2014/6/13','2014/6/14','2014/6/15','2014/6/16','2014/6/17','2014/6/18','2014/6/19','2014/6/20','2014/6/21','2014/6/22','2014/6/23','2014/6/24','2014/6/25','2014/6/26','2014/6/27','2014/6/28','2014/6/29','2014/6/30']
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
                                data:[0,0,0,3,0,0,0,0,0,0,2,6,1,3,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,3,0],
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
						data:['Qing','新浪博客','QQ音乐']
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
										max:9
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
								{value:1, name:'Qing'},
								{value:9, name:'新浪博客'},
								{value:1, name:'QQ音乐'}
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
                name: "微提醒",
                value: 1,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "驾校黑幕，都来说说",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "小寨便衣在行动",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "官员抢夺记者证的哪些事儿",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "网友爆料",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "这一年",
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
										max:36
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
									url: '../json/1564601450.json',
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
        data: function(){$.ajax({
									type: "get",
									dataType:'json',
									url: '../json/1564601450.json',
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
									url: '../json/1564601450.json',
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
									url: '../json/1564601450.json',
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
									url: '../json/1564601450.json',
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
									url: '../json/1564601450.json',
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
									url: '../json/1564601450.json',
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
		