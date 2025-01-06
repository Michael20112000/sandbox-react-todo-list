import { type FC, useState } from 'react'

import { TodoList } from '@widgets/todoList'

import { AddTodoForm } from '@features/addTodo'

import { ITodo } from '@entities/todo'

export const AboutPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleAddTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ])
  }

  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const handleRemoveTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const handleUpdateTodo = (id: number, newTitle: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    )
  }

  return (
    <div className='p-32'>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onRemove={handleRemoveTodo}
        onUpdate={handleUpdateTodo}
      />
    </div>
  )
}
