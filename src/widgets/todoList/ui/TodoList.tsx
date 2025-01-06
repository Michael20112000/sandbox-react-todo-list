import { FC } from 'react'

import { type ITodo, TodoItem } from '@entities/todo'

interface TodoListProps {
  todos: ITodo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
  onUpdate: (id: number, newTitle: string) => void
}

export const TodoList: FC<TodoListProps> = ({
  todos,
  onToggle,
  onRemove,
  onUpdate,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  )
}
