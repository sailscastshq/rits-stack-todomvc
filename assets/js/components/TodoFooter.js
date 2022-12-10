import { Link } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react'
export default function TodoFooter({ undoneTodosCount }) {
  const { url } = usePage()
  console.log(url)
  const footerLinks = [
    {
      label: 'All',
      url: '/',
    },
    {
      label: 'Undone',
      url: '/?completed=false',
    },
    {
      label: 'Done',
      url: '/?completed=true',
    },
  ]
  return (
    <footer className="w-full">
      <section className="flex w-full justify-between space-x-4">
        <p className="font-light text-slate-400">
          {!undoneTodosCount ? 'No todos' : `${undoneTodosCount} todos left`}
        </p>
        <ul className="flex justify-center space-x-4">
          {footerLinks?.map((footerLink, index) => (
            <li key={index}>
              <Link
                href={footerLink.url}
                className={
                  url == footerLink.url
                    ? 'rounded-sm border border-purple-500 p-2 text-purple-900'
                    : ''
                }
              >
                {footerLink.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          method="DELETE"
          href="/todos"
          as="button"
          className="font-light decoration-purple-800 hover:underline"
        >
          Clear completed
        </Link>
      </section>
    </footer>
  )
}
