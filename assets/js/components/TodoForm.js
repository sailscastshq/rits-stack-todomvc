import { useState } from 'react'
export default function TodoForm() {
  const [newTodo, setNewTodo] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    Inertia.post('/todos', newTodo)
  }
  function handleChange(event) {
    console.log(event.target.value)
    setNewTodo(event.target.value)
  }
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        autoFocus
        className="w-full border-none text-xl text-purple-900 caret-purple-500 placeholder:text-gray-400/60 focus:outline-none"
        type="text"
        name="name"
        onChange={handleChange}
        value={newTodo}
        placeholder="What do you want to get done?"
      />
    </form>
  )
}
