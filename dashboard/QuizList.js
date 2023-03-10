import Link from "next/link"
import { AiFillPlayCircle} from "react-icons/ai"

const people = [
  {
    name: 'December',
    quizUrl: './dec2022',
    email: 'leslie.alexander@example.com',
    role: '32 questions',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'November',
    quizUrl: '/',
    email: 'leslie.alexander@example.com',
    role: 'Coming soon...',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'October',
    quizUrl: '/',
    email: 'leslie.alexander@example.com',
    role: 'Coming soon...',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'September',
    quizUrl: '/',
    email: 'leslie.alexander@example.com',
    role: 'Coming soon...',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default function QuizList() {
  return (
    <div className="mt-10 rounded-lg pb-8 w-full md:mt-36 lg:mt-36">
      <div className="">
        <h1 className="text-white text-xl md:text-2xl lg:text-2xl font-bold mt-2 mb-6 text-center">Choose Set</h1>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
        {people.map((person) => (
          <div
            key={person.email}
            className="relative flex items-center space-x-3 rounded-lg border border-zinc-600 bg-zinc-700 px-6 py-2 shadow-sm focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="min-w-0 flex-1 floot-root">
              <Link href={person.quizUrl} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-zinc-200">{person.name}</p>
                <p className="truncate text-sm text-gray-500">{person.role}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
