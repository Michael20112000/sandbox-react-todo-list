import { Meta, StoryFn } from '@storybook/react'
import { JSX } from 'react/jsx-runtime'

import { ITodo } from '../model/types'
import { TodoItem, TodoItemProps } from './TodoItem'

export default {
  title: 'Components/TodoItem',
  component: TodoItem,
} as Meta

const Template: StoryFn<TodoItemProps> = (
  args: JSX.IntrinsicAttributes & TodoItemProps,
) => (
  <ul>
    <TodoItem {...args} />
  </ul>
)

export const Default = Template.bind({})
Default.args = {
  todo: {
    id: 1,
    title: 'Complete React project',
    completed: false,
  } as ITodo,
  onToggle: (id: number) => {
    console.log(`Toggled todo with id: ${String(id)}`)
  },
  onRemove: (id: number) => {
    console.log(`Removed todo with id: ${String(id)}`)
  },
  onUpdate: (id: number, newTitle: string) => {
    console.log(`Updated todo with id: ${String(id)}, new title: ${newTitle}`)
  },
}

export const Completed = Template.bind({})
Completed.args = {
  todo: {
    id: 2,
    title: 'Review pull requests',
    completed: true,
  } as ITodo,
  onToggle: (id: number) => {
    console.log(`Toggled todo with id: ${String(id)}`)
  },
  onRemove: (id: number) => {
    console.log(`Removed todo with id: ${String(id)}`)
  },
  onUpdate: (id: number, newTitle: string) => {
    console.log(`Updated todo with id: ${String(id)}, new title: ${newTitle}`)
  },
}

export const Editing = Template.bind({})
Editing.args = {
  todo: {
    id: 3,
    title: 'Update project documentation',
    completed: false,
  } as ITodo,
  onToggle: (id: number) => {
    console.log(`Toggled todo with id: ${String(id)}`)
  },
  onRemove: (id: number) => {
    console.log(`Removed todo with id: ${String(id)}`)
  },
  onUpdate: (id: number, newTitle: string) => {
    console.log(`Updated todo with id: ${String(id)}, new title: ${newTitle}`)
  },
}
