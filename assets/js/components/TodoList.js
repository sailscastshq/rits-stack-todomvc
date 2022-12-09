export default function TodoList({ todos }) {
  return (
    <ul className="flex items-start justify-start">
      {todos &&
        todos.map((todo, index) => (
          <li className="space-x-2" key={index}>
            <input type="checkbox" className="rounded-full" />
            <label>{todo.name}</label>
          </li>
        ))}
    </ul>
  )
}
