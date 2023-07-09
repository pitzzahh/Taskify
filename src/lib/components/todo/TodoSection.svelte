<script lang="ts">
	import { todos } from '$lib/stores/TodoStore';
	import { scale } from 'svelte/transition';
	import TodoInput from './TodoInput.svelte';
</script>

<section class="mt-8 space-y-4">
	{#each $todos as todo (todo.id)}
		<div transition:scale>
			<TodoInput {todo} />
		</div>
	{/each}
</section>
