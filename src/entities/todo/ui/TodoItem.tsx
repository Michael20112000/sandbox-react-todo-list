import React, { useState } from 'react'

import { ITodo } from '../model/types'

export interface TodoItemProps {
  todo: ITodo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
  onUpdate: (id: number, newTitle: string) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onRemove,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)

  const handleSave = () => {
    onUpdate(todo.id, title)
    setIsEditing(false)
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <button onClick={handleSave}>Зберегти</button>
        </>
      ) : (
        <>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => {
              onToggle(todo.id)
            }}
          />
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.title}
          </span>
          <button
            onClick={() => {
              setIsEditing(true)
            }}
          >
            Редагувати
          </button>
        </>
      )}
      <button
        onClick={() => {
          onRemove(todo.id)
        }}
      >
        Видалити
      </button>
    </li>
  )
}
