import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const todos = writable(browser ? JSON.parse(window.localStorage.getItem('todos')) ?? [] : [])

todos.subscribe(value => {
    if(browser) {
        localStorage.setItem('todos', JSON.stringify(value));
    }
});

export const addTodo = (title: string) =>  todos.update((current) => [...current, { id: uuidv4(), title, completed: false }])

export const removeTodo = (id: string) => todos.update((current) => current.filter(todo => todo.id !== id));

export const toggleTodo = (id: string) => todos.update((current) => current.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));

export const editTodo = (id: string, newTodo: string) => todos.update((current) => current.map(todo => todo.id === id ? { ...todo, newTodo} : todo));