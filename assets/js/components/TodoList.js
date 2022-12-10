import { Inertia } from '@inertiajs/inertia'
export default function TodoList({ todos }) {
  function completeTodo(id) {
    Inertia.patch(`/todos/${id}`)
  }

  return (
    <ul className="flex flex-col items-start justify-start space-y-4">
      {todos?.map((todo, index) => (
        <li className="space-x-2" key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            className="accent-purple-500"
            onChange={() => completeTodo(todo.id)}
          />
          <label
            className={`${
              todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
            }  `}
          >
            {todo.name}
          </label>
        </li>
      ))}
    </ul>
  )
}
