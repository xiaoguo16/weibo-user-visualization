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
				//var chartthird=ec.init(document.getElementById('pie-third')); 
				var chartstatis=ec.init(document.getElementById('statis')); 
				// var chartmonth=ec.init(document.getElementById('month')); 
				//var chartword=ec.init(document.getElementById('wordcloud'));
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
						data:['小米手机2S','iPad','iPhone','三星 GALAXY S6','三星GALAXY Note 4','华为Ascend Mate2']
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
							name:'通信工具比例',
							type:'pie',
							radius : '55%',
							center: ['50%', '60%'],
							data: [
									{name : '小米手机2S', value : 93},
									{name : 'iPad', value : 2},
									{name : 'iPhone', value : 5},
									{name : '三星 GALAXY S6', value : 32},
									{name : '三星GALAXY Note 4', value : 23},
									{name : '华为Ascend Mate2', value : 10}
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
							data:[37, 0, 8, 95]
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
                                    url: '../json/3869935931.json',
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
                                    url: '../json/3869935931.json',
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
                                    url: '../json/3869935931.json',
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
                                    url: '../json/3869935931.json',
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
                                    url: '../json/3869935931.json',
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
				//chartthird.setOption(optionthird);
 
				//chartword.setOption(optionword);
            }
			
        );
		