<script lang="ts">
	import { removeTodo, editTodo, toggleTodo } from '$lib/stores/TodoStore';
	import type { Todo } from '$lib/Types';

	export let todo: Todo;

	$: completeClass = todo.completed ? 'bg-green-three' : 'bg-leaf-one';
</script>

<div class="flex items-center justify-between rounded-md border-2 border-gray-one px-5 py-4">
	<div class="flex w-full max-w-lg items-center justify-start">
		<label class="sr-only" for={`${todo.id}-checkbox`}>Complete Todo</label>
		<input
			type="checkbox"
			id={`${todo.id}-checkbox`}
			checked={todo.completed}
			on:change={() => toggleTodo(todo.id)}
			class="h-4 w-4 rounded border border-gray-three bg-cream-four text-green-four focus:border-green-five focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-five"
		/>
		<label class="sr-only" for={`${todo.id}-text`}>Edit Todo</label>
		<input
			type="text"
			id={`${todo.id}-text`}
			placeholder="Enter a Todo"
			value={todo.text ?? ''}
			on:input={(event) => editTodo(todo.id, event.currentTarget.value)}
			class="ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed border-b-gray-two bg-cream-four px-0 pb-1 text-base font-normal text-gray-three placeholder:text-gray-two focus:border-gray-three focus:outline-none focus:ring-0"
		/>
		<span
			class="p-2 ml-5 hidden {completeClass} rounded-full text-sm font-normal text-gray-five md:block"
		>
			{todo.completed ? 'Completed' : 'In Progress'}
		</span>
	</div>
	<button
		type="button"
		on:click={() => removeTodo(todo.id)}
		class="group fml-4 flex items-center justify-center rounded-md bg-cream-four p-2 hover:bg-steel-one focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-five">
		<span class="sr-only">Remove Todo</span>
		<svg
			viewBox="0 0 24 24"
			fill="none"
			width="32"
			height="32"
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 group-hover:text-error-dark"
			><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			/><g id="SVGRepo_iconCarrier">
				<path d="M14 14H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
				<path
					d="M22 11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975M21.9913 16C21.9554 18.4796 21.7715 19.8853 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V11"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
				/>
			</g></svg
		>
	</button>
</div>
