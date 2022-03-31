import Link from 'next/link'

export default function Home() {
    return (
        <div className="container">
            <h1>Gallery Display Page</h1>
            <Link href="/gallery/display">
                <a>Go to Gallery Page</a>
            </Link>
        </div>
    )
}

