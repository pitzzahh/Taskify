<script>
	import AddTodoSection from '$lib/components/todo/AddTodoSection.svelte';
	import TodoSection from '$lib/components/todo/TodoSection.svelte';
	import ProgressSection from '$lib/components/progress/ProgressSection.svelte';
</script>

<svelte:head>
	<title>Taskify</title>
	<meta
		name="description"
		content="A sleek and intuitive task management app designed to help users stay organized and focused."
	/>
	<meta name="keywords" content="todo list, todoapp" />
	<meta name="author" content="Peter John Arao" />
	<meta name="og:title" content="Taskify" />
	<meta
		name="og:description"
		content="A sleek and intuitive task management app designed to help users stay organized and focused."
	/>
	<meta property="og:site_name" content="Taskify" />
</svelte:head>

<div class="min-h-screen bg-olive-one p-0 selection:bg-green-two md:py-24 md:px-8">
	<main
		class="mx-auto min-h-screen max-w-none rounded-none bg-cream-four px-5 py-10 outline-none
	md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline-4 md:outline-offset-8 md:outline-cream-four"
	>
		<h1 class="text-3xl font-bold text-gray-three">Taskify</h1>
		<p class="font-medium text-gray-five my-3">
			A sleek and intuitive task management app designed to help users stay organized and focused.
		</p>
		<div class="mt-10">
			<AddTodoSection />
			<TodoSection />
			<ProgressSection />
		</div>
	</main>
</div>
