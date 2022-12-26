import Image from 'next/image'
import Link from 'next/link'
import donkey from '../../public/images/donkey.jpg'
import Head from 'next/head'

const post1 = () => {
  return (
    <>
    <Head>
        <title>Post1</title>
    </Head>
    <Link href={"/"}>Go Home</Link>
    <h1>Post1</h1>
    <Image src={donkey} alt="donkey" width={300} height={300}/>
    </>
  )
}

export default post1