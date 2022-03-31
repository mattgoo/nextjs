import Image from 'next/image'


export default function Home() {
    return (
        <div className="container">
            <h1 className="title">
                Hello World!
            </h1>
            <Image src="/images/chpperHat.png" alt="profile" width={200} height={200} />
        </div>      
    )
}

