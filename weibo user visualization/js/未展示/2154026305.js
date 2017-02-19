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
               // var chartpie=ec.init(document.getElementById('pie-tool')); 
				//var chartthird=ec.init(document.getElementById('pie-third')); 
				var chartstatis=ec.init(document.getElementById('statis')); 
				var chartmonth1 =ec.init(document.getElementById('m1'));
                var chartmonth2 =ec.init(document.getElementById('m2'));
                var chartmonth3 =ec.init(document.getElementById('m3')); 
				//var chartword=ec.init(document.getElementById('wordcloud'));
				var chartattention=ec.init(document.getElementById('attention')); 				
				var charttext=ec.init(document.getElementById('textcloud'));
				var chartsex=ec.init(document.getElementById('sex')); 
				var chartbirth=ec.init(document.getElementById('birth')); 
				var chartarea=ec.init(document.getElementById('area')); 
				//var chartego=ec.init(document.getElementById('ego'));
				var chartlabel=ec.init(document.getElementById('label'));
				
                
				
				
				
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
							data:[7, 0, 7, 8]
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
                                    {value:0, name:'2010年'},
                                    {value:6, name:'2011年'},
                                    {value:0, name:'2012年'},
                                    {value:0, name:'2013年'},
                                    {value:0, name:'2014年'},
                                    {value:0, name:'2015年'}
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
                                data:[0,0,0,0,6,0,0,0,0,0,0,0],
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
                                data : ['2011/5/1,','2011/5/2','2011/5/3','2011/5/4','2011/5/5','2011/5/6','2011/5/7','2011/5/8','2011/5/9','2011/5/10','2011/5/11','2011/5/12','2011/5/13','2011/5/14','2011/5/15','2011/5/16','2011/5/17','2011/5/18','2011/5/19','2011/5/20','2011/5/21','2011/5/22','2011/5/23','2011/5/24','2011/5/25','2011/5/26','2011/5/27','2011/5/28','2011/5/29','2011/5/30']
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
                                data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
                                markPoint:{
                                data:[
                                {type:'max',name:'最大日发帖量'},
                                {type:'average',name:'平均值'}
                                ]
                                }
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
                name: "上访",
                value: 6,
                itemStyle: {
                    normal: {
                        color: 'black'
                    }
                }
            },
            {
                name: "陕西省",
                value: 5,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "老汉",
                value: 4,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "西安",
                value: 4,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "公司",
                value: 3,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "案件",
                value: 3,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "单位",
                value: 3,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "监视",
                value: 3,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "殴打",
                value: 3,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "省公安厅",
                value: 3,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "曝光",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "作恶",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "公安厅",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "雇佣",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "王英强",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "一直",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "办理",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "恶的",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "儿子",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
            {
                name: "诉求",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "老人",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "多次",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "长时间",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "几年来",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "汉家",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "进行",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "街头",
                value: 2,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "账目",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "迟迟",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "办案",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "在床",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "游走",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "家门",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "一番",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "删贴",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "截图",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "事情",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "操心",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "狠狠",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "黑幕",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "发布",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "不让",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "每次",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "国有",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "情操",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "先后",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "女儿",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "删除",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "床上",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "后分",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "偷偷",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "处理",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "整理",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "继续",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "不给",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "微博",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "奔赴",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "海内外",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "正义",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "派人",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "干部",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "知法犯法",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "被发",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "喊冤",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "生活",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "奔走",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "势力",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "被单",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "无奈",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "留念",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "单位领导",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "向海",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "包庇",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "威胁",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "门外",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "每日",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "自理",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "文字",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "退休工人",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "省检察院",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "咬伤",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "拖延",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "县公安局",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "让国",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "处于",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "所在单位",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "派出所",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "陕西",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "躺在",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "精神药物",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "不能",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "病死",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "声讨",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "各地",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "老伴",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "非法",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "我会",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "对案",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "恶意",
                value: 1,
                itemStyle: createRandomItemStyle()
            },
			{
                name: "见不得人",
                value:1,
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
										max:4
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
								{value:1, name:'生气'},
								{value:4, name:'厌恶'},
								{value:0, name:'恐惧'},
								{value:0, name:'高兴'},
								{value:0, name:'喜欢'},
								{value:1, name:'悲伤'},
								{value:0, name:'惊讶'}
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
									url: '../json/2154026305.json',
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
									url: '../json/2154026305.json',
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
									url: '../json/2154026305.json',
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
									url: '../json/2154026305.json',
									success: function (data) {
										var arr=[];
										console.log(data.label);
										for(i=0;i<7;i++){
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
									url: '../json/2154026305.json',
									success: function (data) {
										var brr=[];
										for(i=0;i<7;i++){
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
				//chartpie.setOption(optiontool);
				chartstatis.setOption(optionstatis);
				//chartthird.setOption(optionthird);
                chartmonth1.setOption(optionmonth1);
                chartmonth2.setOption(optionmonth2);
                chartmonth3.setOption(optionmonth3);
				//chartword.setOption(optionword);
				chartattention.setOption(optionattention);
				charttext.setOption(optiontext);
            }
			
        );
		