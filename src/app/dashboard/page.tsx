import Image from 'next/image'
import Link from 'next/link'

export default function Dashboard() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Dashboard page </h1>
            <Link href='/'>Click to go back</Link>
        </main>
    )
}
