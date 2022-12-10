import TodoFooter from '@/components/TodoFooter'
import TodoList from '@/components/TodoList'
import TodoForm from '@/components/TodoForm'

export default function Index({ todos, undoneTodosCount }) {
  return (
    <>
      <main className="mx-auto mt-10 flex h-screen min-h-screen w-full flex-col space-y-8 px-4 text-gray-700 sm:w-2/6">
        <h1 className="text-center text-5xl text-purple-700">todos</h1>
        <TodoForm />
        <TodoList todos={todos} />
        <TodoFooter undoneTodosCount={undoneTodosCount} />
      </main>
      <footer className="flex justify-center space-x-4">
        <p>Built on the RITS Stack</p>
        <p>
          <a
            href="https://github.com/sailscastshq/rits-stack-todomvc"
            target="_blank"
            className="text-purple-800 underline"
          >
            View the source
          </a>
        </p>
      </footer>
    </>
  )
}
