<template>
	<div>
		<div class="dict-detail">
			<div class="top">
				字典详情
			</div>
			<div class="detail">
				<p>
					点击字典查看详情
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
.dict-detail{
  width: 900px;
  box-shadow: 0 0 10px #eee;
	>.top{
		border-bottom: 1px solid #eee;
		padding: 20px 0;
		text-indent: 20px;
		font-size: 20px;
	}
	.detail{
		padding: 20px;
		>p{
			display: inline-block;
			border-left: 5px solid #ccc;
			padding: 15px;
		}
	}
}
</style>