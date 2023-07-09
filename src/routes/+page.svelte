<script>
	import AddTodoSection from '$lib/components/todo/AddTodoSection.svelte';
	import TodoSection from '$lib/components/todo/TodoSection.svelte';
	import ProgressSection from '$lib/components/progress/ProgressSection.svelte';
</script>

<div class="min-h-screen bg-olive-one p-0 selection:bg-green-two md:py-24 md:px-8">
	<main
		class="mx-auto min-h-screen max-w-none rounded-none bg-cream-four px-5 py-10 outline-none
	md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline-4 md:outline-offset-8 md:outline-cream-four"
	>
		<h1 class="text-3xl font-bold text-gray-three">Taskify</h1>
		<p class="font-medium text-gray-five my-3">
			Taskify is a sleek and intuitive task management app designed to help users stay organized and
			focused. With its user-friendly interface and powerful features, Taskify allows you to easily
			create, prioritize, and track your tasks in one place. From personal to professional tasks,
			Taskify streamlines your productivity and empowers you to achieve your goals with ease.
		</p>
		<div class="mt-10">
			<AddTodoSection />
			<TodoSection />
			<ProgressSection />
		</div>
	</main>
</div>
