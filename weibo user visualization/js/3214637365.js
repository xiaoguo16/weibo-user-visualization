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
						data:['红米Note','微博 weibo.com','Android平板客户端']
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
										max: 2218
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
									{name : '红米Note', value : 2218},
									{name : '微博 weibo.com', value : 38},
									{name : 'Android平板客户端', value : 11}
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
							data:[2294, 1586, 6476, 578]
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
                                        max: 2156
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
                                    {value:0, name:'2011年'},
                                    {value:0, name:'2012年'},
                                    {value:0, name:'2013年'},
                                    {value:139, name:'2014年'},
                                    {value:2156, name:'2015年'}
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
                                data : ['2015/1','2015/2','2015/3','2015/4','2015/5','2015/6','2015/7','2015/8','2015/9','2015/10']
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
                                data:[129,107,279,269,383,342,171,231,197,48],
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
                                data : ['2015/5/1','2015/5/2','2015/5/3','2015/5/4','2015/5/5','2015/5/6','2015/5/7','2015/5/8','2015/5/9','2015/5/10','2015/5/11','2015/5/12','2015/5/13','2015/5/14','2015/5/15','2015/5/16','2015/5/17','2015/5/18','2015/5/19','2015/5/20','2015/5/21','2015/5/22','2015/5/23','2015/5/24','2015/5/25','2015/5/26','2015/5/27','2015/5/28','2015/5/29','2015/5/30']
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
                                data:[1,2,17,20,12,30,19,33,9,9,7,17,10,7,6,0,0,11,14,23,12,7,18,4,13,18,5,25,14,10,10],
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
						data:['今日头条','未通过审核应用','JiaThis分享按钮','分享按钮','同城征稿']
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
								{value:1, name:'今日头条'},
								{value:1, name:'未通过审核应用'},
								{value:7, name:'JiaThis分享按钮'},
								{value:5, name:'分享按钮'},
								{value:1, name:'同城征稿'}
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
                name: "名博评论",
                value: 26,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "西安多彩商城数千商铺转租涉嫌偷税",
                value: 18,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "名博关注",
                value: 17,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "谁在应急抢险专用道上私设路障",
                value: 16,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "钢丝视点•求证",
                value: 14,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "求证",
                value: 14,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "名博曝光",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "这样的水人畜能饮用吗？",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "实时发布",
                value: 12,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "是国家政策有问题还是个别人起了歹心？",
                value: 11,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "美丽大荔 周末的家",
                value: 10,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "看今天微博",
                value: 10,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "名博跟踪",
                value: 10,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "环境污染随手拍",
                value: 9,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "陕西眉县卫生局也学会“挖坑”埋人？",
                value: 9,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "西安身边事",
                value: 9,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "陕西榆林市榆阳区人大法制工委主任张静常年吃空饷",
                value: 9,
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
									url: '../json/3214637365.json',
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
										max:852
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
									url: '../json/3214637365.json',
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
                                    url: '../json/3214637365.json',
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
                                    url: '../json/3214637365.json',
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
                                    url: '../json/3214637365.json',
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
                                    url: '../json/3214637365.json',
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
                                    url: '../json/3214637365.json',
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
		