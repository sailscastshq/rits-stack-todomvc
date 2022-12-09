import Counter from '@/components/Counter'
import { Link } from '@inertiajs/inertia-react'

export default function Index({ name }) {
  return (
    <main className="mt-10 flex h-screen flex-col items-center space-y-8 text-center text-gray-700">
      <h1 class="text-5xl text-purple-700">todos</h1>
      <Counter />
    </main>
  )
}
