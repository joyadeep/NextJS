
import { Inter } from '@next/font/google'
import Section1 from '../components/Section1'
import Layout from '../layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Section1/>
    </Layout>
  )
}
