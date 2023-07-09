<script lang="ts">
	import { todos } from '$lib/stores/TodoStore';
	import ProgressBar from './ProgressBar.svelte';

	export let completePercentage: number = 0;
	export let progressPercentag: number = 0;

	$: totalTodos = $todos.length;
	$: completedTodos = $todos.filter((todo) => todo.completed).length;
	$: notCompletedTodos = $todos.filter((todo) => !todo.completed).length || 0;
	$: completePercentage = Math.round((completedTodos / totalTodos) * 100) || 0;
	$: progressPercentage = Math.round((notCompletedTodos / totalTodos) * 100) || 0;
</script>

<section class="mt-10 ">
	<h3 class="text-xl font-bold text-gray-three">Progress</h3>
	<div class="mt-8 space-y-8">
		<ProgressBar title="In Progress" percentage={progressPercentage} />
		<ProgressBar title="Completed" percentage={completePercentage} />
	</div>
</section>
