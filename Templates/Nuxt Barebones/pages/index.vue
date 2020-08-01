<template>
	<div>
		<cow></cow>
		<cow
			cowText = 'Lorem Ipsum'
		></cow>
	</div>
</template>




<script>
	import cow from "~/components/cow.vue";

	export default {
		components: {
			cow
		}
	}
</script>