
import { Inter } from '@next/font/google'
import Categories from '../components/Categories'
import LatestPost from '../components/LatestPost'
import MostPopular from '../components/MostPopular'
import Section1 from '../components/Section1'
import Layout from '../layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Section1/>
      <LatestPost/>
      <MostPopular/>
      <Categories/>
    </Layout>
  )
}
