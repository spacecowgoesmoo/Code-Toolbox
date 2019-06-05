<template>
	<div>
		<h3>{{ cowText }}</h3>
		<img src='~/assets/images/slime.png'>
	</div>
</template>








<script>
	export default {
		props: {
			cowText: {
    			type: String,
    			default: ""
    		}
    	}
    }
</script>
