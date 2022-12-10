import { Link } from '@inertiajs/inertia-react'

export default function TodoFooter({ todosCount }) {
  return (
    <footer className="w-full">
      <section className="flex w-full justify-between space-x-4">
        <p className="font-light">
          {!todosCount ? 'No todos left' : `${todosCount} todos left`}
        </p>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/?completed=false">Undone</Link>
          </li>
          <li>
            <Link href="/?completed=true">Done</Link>
          </li>
        </ul>
        <Link
          method="DELETE"
          href="/todos"
          as="button"
          className="font-light hover:underline"
        >
          Clear completed
        </Link>
      </section>
    </footer>
  )
}
