<template>
	<div class="fivebox">
		<div id="fiveone" class="item"></div>
		<div id="fivetwo" class="item"></div>
	</div>
</template>

<script  setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue'

onMounted(() => {
	setTimeout(fiveone(), 500)
})
onMounted(() => {
	setTimeout(fivetwo(), 500)
})

const fiveone = () => {
	var chartDom = document.getElementById('fiveone');
	var myChart = echarts.init(chartDom);
	var option;

	const data = [
		[
			[28604, 77, 17096869, 'Australia', 1990],
			[31163, 77.4, 27662440, 'Canada', 1990],
			[1516, 68, 1154605773, 'China', 1990],
			[13670, 74.7, 10582082, 'Cuba', 1990],
			[28599, 75, 4986705, 'Finland', 1990],
			[29476, 77.1, 56943299, 'France', 1990],
			[31476, 75.4, 78958237, 'Germany', 1990],
			[28666, 78.1, 254830, 'Iceland', 1990],
			[1777, 57.7, 870601776, 'India', 1990],
			[29550, 79.1, 122249285, 'Japan', 1990],
			[2076, 67.9, 20194354, 'North Korea', 1990],
			[12087, 72, 42972254, 'South Korea', 1990],
			[24021, 75.4, 3397534, 'New Zealand', 1990],
			[43296, 76.8, 4240375, 'Norway', 1990],
			[10088, 70.8, 38195258, 'Poland', 1990],
			[19349, 69.6, 147568552, 'Russia', 1990],
			[10670, 67.3, 53994605, 'Turkey', 1990],
			[26424, 75.7, 57110117, 'United Kingdom', 1990],
			[37062, 75.4, 252847810, 'United States', 1990]
		],
		[
			[44056, 81.8, 23968973, 'Australia', 2015],
			[43294, 81.7, 35939927, 'Canada', 2015],
			[13334, 76.9, 1376048943, 'China', 2015],
			[21291, 78.5, 11389562, 'Cuba', 2015],
			[38923, 80.8, 5503457, 'Finland', 2015],
			[37599, 81.9, 64395345, 'France', 2015],
			[44053, 81.1, 80688545, 'Germany', 2015],
			[42182, 82.8, 329425, 'Iceland', 2015],
			[5903, 66.8, 1311050527, 'India', 2015],
			[36162, 83.5, 126573481, 'Japan', 2015],
			[1390, 71.4, 25155317, 'North Korea', 2015],
			[34644, 80.7, 50293439, 'South Korea', 2015],
			[34186, 80.6, 4528526, 'New Zealand', 2015],
			[64304, 81.6, 5210967, 'Norway', 2015],
			[24787, 77.3, 38611794, 'Poland', 2015],
			[23038, 73.13, 143456918, 'Russia', 2015],
			[19360, 76.5, 78665830, 'Turkey', 2015],
			[38225, 81.4, 64715810, 'United Kingdom', 2015],
			[53354, 79.1, 321773631, 'United States', 2015]
		]
	];
	option = {
		backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
			{
				offset: 0,
				color: '#f7f8fa'
			},
			{
				offset: 1,
				color: '#fff'
			}
		]),
		title: {
			text: '1990 与 2015 年各国家人均寿命与 GDP',
			left: '5%',
			top: '3%',
			textStyle: {
				color: '#2a9cd5'
			}
		},
		legend: {
			right: '10%',
			top: '3%',
			data: ['1990', '2015']
		},
		
		grid: {
			left: '8%',
			top: '10%'
		},
		xAxis: {
			splitLine: {
				lineStyle: {
					type: 'dashed'
				}
			}
		},
		yAxis: {
			splitLine: {
				lineStyle: {
					type: 'dashed'
				}
			},
			scale: true
		},
		series: [
			{
				name: '1990',
				data: data[0],
				type: 'scatter',
				symbolSize: function (data) {
					return Math.sqrt(data[2]) / 5e2;
				},
				emphasis: {
					focus: 'series',
					label: {
						show: true,
						formatter: function (param) {
							return param.data[3];
						},
						position: 'top'
					}
				},
				itemStyle: {
					shadowBlur: 10,
					shadowColor: 'rgba(120, 36, 50, 0.5)',
					shadowOffsetY: 5,
					color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
						{
							offset: 0,
							color: 'rgb(251, 118, 123)'
						},
						{
							offset: 1,
							color: 'rgb(204, 46, 72)'
						}
					])
				}
			},
			{
				name: '2015',
				data: data[1],
				type: 'scatter',
				symbolSize: function (data) {
					return Math.sqrt(data[2]) / 5e2;
				},
				emphasis: {
					focus: 'series',
					label: {
						show: true,
						formatter: function (param) {
							return param.data[3];
						},
						position: 'top'
					}
				},
				itemStyle: {
					shadowBlur: 10,
					shadowColor: 'rgba(25, 100, 150, 0.5)',
					shadowOffsetY: 5,
					color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
						{
							offset: 0,
							color: 'rgb(129, 227, 238)'
						},
						{
							offset: 1,
							color: 'rgb(25, 183, 207)'
						}
					])
				}
			}
		]
	};

	option && myChart.setOption(option);

}
const fivetwo = () => {
	var chartDom = document.getElementById('fivetwo');
	var myChart = echarts.init(chartDom);
	var option;

	option = {
		backgroundColor: '#fff', // 设置保存图片的背景颜色为白色
		toolbox: {
			show: true,
			feature: {
				saveAsImage: {
					show: true,// 保存图表
					excludeComponents: ['toolbox'],
					pixelRatio: 2
				}
			}
		},
		color: '#D87A80',
		title: {
			text: 'Graph 简单示例',
			textStyle: {
				color: '#2a9cd5'
			}
		},
		tooltip: {},
		animationDurationUpdate: 1500,
		animationEasingUpdate: 'quinticInOut',
		series: [
			{
				type: 'graph',
				layout: 'none',
				symbolSize: 50,
				roam: true,
				label: {
					show: true,
					color: '#fff'
				},
				edgeSymbol: ['circle', 'arrow'],
				edgeSymbolSize: [4, 10],
				edgeLabel: {
					fontSize: 20
				},
				data: [
					{
						name: 'Node 1',
						x: 300,
						y: 300
					},
					{
						name: 'Node 2',
						x: 800,
						y: 300
					},
					{
						name: 'Node 3',
						x: 550,
						y: 100
					},
					{
						name: 'Node 4',
						x: 550,
						y: 500
					}
				],
				// links: [],
				links: [
					{
						source: 0,
						target: 1,
						symbolSize: [5, 20],
						label: {
							show: true
						},
						lineStyle: {
							width: 5,
							curveness: 0.2
						}
					},
					{
						source: 'Node 2',
						target: 'Node 1',
						label: {
							show: true
						},
						lineStyle: {
							curveness: 0.2
						}
					},
					{
						source: 'Node 1',
						target: 'Node 3'
					},
					{
						source: 'Node 2',
						target: 'Node 3'
					},
					{
						source: 'Node 2',
						target: 'Node 4'
					},
					{
						source: 'Node 1',
						target: 'Node 4'
					}
				],
				lineStyle: {
					opacity: 0.9,
					width: 2,
					curveness: 0
				}
			}
		]
	};

	option && myChart.setOption(option);
}

</script>

<style lang="scss" scope>
.fivebox {
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-color: #F0F2F5;


	.item {
		width: 49%;
		height: 300px;
		background-color: #fff;
		box-sizing: border-box;
		padding: 20px;
	}
}
</style>
