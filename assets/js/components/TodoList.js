import { Inertia } from '@inertiajs/inertia'
import { Link } from '@inertiajs/inertia-react'

export default function TodoList({ todos }) {
  function updateTodo(id) {
    Inertia.patch(`/todos/${id}`)
  }

  return (
    todos.length > 0 && (
      <ul className="flex flex-col items-start justify-start space-y-4">
        {todos.map((todo, index) => (
          <li
            className="group flex w-full items-center space-x-2 text-xl"
            key={index}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              className="h-6 w-6 accent-purple-500"
              onChange={() => updateTodo(todo.id)}
            />
            <label
              className={`flex-1 ${
                todo.completed ? 'text-gray-400 line-through' : 'text-gray-600'
              }  `}
            >
              {todo.name}
            </label>
            <Link
              href={`/todos/${todo.id}`}
              method="DELETE"
              as="button"
              title="Remove todo"
              className="justify-self-end text-lg text-gray-400 opacity-0 hover:text-gray-600 group-hover:opacity-100"
            >
              &#10005;
            </Link>
          </li>
        ))}
      </ul>
    )
  )
}
