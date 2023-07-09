<script lang="ts">
	import { addTodo } from '$lib/stores/TodoStore';
	let todo: string = '';
</script>

<section class="flex justify-between items-center">
	<h3 class="text-xl font-bold text-gray-three">CheckList</h3>
	<button
		type="button"
		on:click={addTodo}
		class="group flex items-center rounded-md border-cream-four bg-green-one px-6 py-3 text-lg font-semibold text-gray-five outline outline-2 outline-offset-2 outline-green-one hover:text-green-five focus-visible:text-green-five focus-visible:outline-green-five"
		>AddTask
		<svg width="32" 
        height="32" 
        viewBox="0 0 24 24" fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        class="ml-3 h-4 w-4 text-gray-five group-hover:text-green-five group-focus-visible:text-green-five ">
			<path
				d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
			<path
				d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
			/>
		</svg>
	</button>
</section>
