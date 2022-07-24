<script lang="ts">
	export default {
		data() {
			return {
				items: [
					{ id: 40, name: "Dickerson", category: "Macdonald" },
					{ id: 21, name: "Larsen", category: "Shaw" },
					{ id: 89, name: "Geneva", category: "Wilson" },
					{ id: 38, name: "Jami", category: "Carney" }
				],
			}
		},
	}
</script>

<template>
	<div class="w-50 m-auto">
		<b-table striped hover :items="items"></b-table>
	</div>
</template>
