<template>
	<div class="not-found__container container">
		<img v-if="img" class="not-found__img" :src="img" alt="" />
		<h1 class="not-found__title page-title">{{ title }}</h1>
		<p class="not-found__descr">{{ message }}</p>
    <ButtonBase mode="nuxt-link" link="/" name="primary" class="not-found__btn">Перейти на главную</ButtonBase>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: 'Error',
	},
	message: {
		type: String,
		default: 'Error message',
	},
	img: {
		type: String,
		default: '',
	},
})
</script>

<style lang="scss">
.not-found {
	&__container {
		min-height: calc(100vh - 100px - 50px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 60px;
		@media (max-width: 767px) {
			gap: 30px;
		}
	}
	&__btn {
		margin-top: 20px;
	}
	&__title {
		margin-bottom: 0;
	}
}
</style>
