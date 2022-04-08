import Link from 'next/link'


export default function Home() {
    return (
        // three equal size divs separated by a black vertical line 
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1>
                        <Link href="/">
                            <a>Go Home!</a>
                        </Link>
                    </h1>
                </div>
                <div className="col-md-4">
                    <h1>
                        <Link href="/info">
                            <a>Go Info!</a>
                        </Link>
                    </h1>
                </div>
                <div className="col-md-4">
                    <h1>
                        <Link href="/gallery">
                            <a>Go Gallery!</a>
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    )
}

