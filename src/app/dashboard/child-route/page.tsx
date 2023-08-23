import Image from 'next/image'
import Link from 'next/link'

export default function ChildRoute() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Child page </h1>
            <Link href='/'>Click to go back</Link>
        </main>
    )
}
