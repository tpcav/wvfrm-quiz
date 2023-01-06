import Link from "next/link"

const people = [
  {
    name: 'December',
    quizUrl: './dec2022',
    email: 'leslie.alexander@example.com',
    role: '22 questions',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'November',
    quizUrl: './dec2022',
    email: 'leslie.alexander@example.com',
    role: '20 questions',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'October',
    quizUrl: './dec2022',
    email: 'leslie.alexander@example.com',
    role: '25 questions',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'September',
    quizUrl: './dec2022',
    email: 'leslie.alexander@example.com',
    role: '25 questions',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default function QuizList() {
  return (
    <div className="mt-10 bg-zinc-800 p-4 rounded-lg pb-8">
      <div className="">
        <h1 className="text-white text-2xl font-bold mt-2 mb-6 text-center">Choose Quiz</h1>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-2">
        {people.map((person) => (
          <div
            key={person.email}
            className="relative flex items-center space-x-3 rounded-lg border border-zinc-600 bg-zinc-700 px-6 py-2 shadow-sm focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="min-w-0 flex-1">
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
