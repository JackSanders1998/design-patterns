import type { NextPage } from 'next'
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <>
            <Link href={'patterns/strategy'}>
                Strategy Pattern
            </Link>
            <Link href={'patterns/observer'}>
                Observer Pattern
            </Link>
        </>
    )
}

export default Home
