import TodoFooter from '@/components/TodoFooter'
import TodoList from '@/components/TodoList'
import TodoForm from '@/components/TodoForm'
import { Link } from '@inertiajs/inertia-react'

export default function Index({ todos }) {
  return (
    <main className="mx-auto mt-10 flex h-screen w-3/6 flex-col space-y-8 text-gray-700">
      <h1 className="text-center text-5xl text-purple-700">todos</h1>
      <TodoForm />
      <TodoList todos={todos} />
      <TodoFooter todosCount={todos.length} />
    </main>
  )
}
