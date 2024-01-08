<template>
	<div class="box">
		<ul>
			<li>
				<div class="left">
					<el-icon><UserFilled style="color: #40c9c6;"/></el-icon>
				</div>
				<div class="ringht">
					<span>New Vistis</span>
					<p>102,400</p>
				</div>
			</li>
			<li>
				<div class="left">
					<el-icon><Comment style="color: #36a3f7;"/></el-icon>
				</div>
				<div class="ringht">
					<span>Message</span>
					<p>81,212</p>
				</div>
			</li>
			<li>
				<div class="left">
					<el-icon><HomeFilled style="color: #f4516c;"/></el-icon>
				</div>
				<div class="ringht">
					<span>Purchasee</span>
					<p>9,280</p>
				</div>
			</li>
			<li>
				<div class="left">
					<el-icon><Ticket style="color: #34bfa3;"/></el-icon>
				</div>
				<div class="ringht">
					<span>Shoppings</span>
					<p>13,600</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang='ts' setup>
import { UserFilled, Ticket, Comment,HomeFilled  } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
ul{
	display: flex;
	justify-content: space-between;
	width: 100%;
	>li{
		display: flex;
		width: 300px;
		height: 100px;
		background-color: #f0f2f5;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
		span{
			font-size: 13px;
			color: #8c8c8c;
		}
		p{
			color: #666666;
			font-weight: 800;
		}
	}
	.left{
		width: 70px;
		height: 70px;
		text-align: center;
		padding-top: 10px;
	}
}
.el-icon{
	font-size: 50px;
}
</style>