<template>
	<div class="box">
		<heatEcharts></heatEcharts>
		<div class="chartbox">
			<pieChart></pieChart>
			<sunriseChart></sunriseChart>
			<guideChart></guideChart>
		</div>
		<div class="chartbox">
			<nestedGraph></nestedGraph>
		</div>
		<div class="chartbox">
			<coordinateChart></coordinateChart>
		</div>
		<div class="chartbox">
			<chartfive></chartfive>
		</div>
		<div class="chartbox">
			<chartsix></chartsix>
		</div>
	</div>
</template>

<script setup lang="ts">
import heatEcharts from './components/heatEcharts.vue'
import pieChart from './components/pieChart.vue'
import sunriseChart from './components/sunriseChart.vue'
import guideChart from './components/guideChart.vue'
import nestedGraph from './components/nestedGraph.vue'
import coordinateChart from './components/coordinateChart.vue'
import chartfive from './components/chartfive.vue'
import chartsix from './components/chartsix.vue'
</script>

<style lang="scss"  scope>
.box {
	width: 100%;
	overflow: scroll;
	height: calc(100vh - 100px);
	background-color: #F0F2F5;
	.chartbox {
		margin: 20px 0;
		display: flex;
		justify-content: space-between;
	}
}
</style>
