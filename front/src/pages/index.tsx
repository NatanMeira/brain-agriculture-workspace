import { DashboardService } from '@/services'
import { HomeTemplate } from '@/templates/Home'
import Head from 'next/head'
import { useQuery } from 'react-query'

export default function Home() {
  const dashboardService = new DashboardService()
  const { data, isLoading } = useQuery('getDashboardData', dashboardService.getDashboardData)
  return (
    <>
      <Head>
        <title>Dashboard | Brain Agriculture</title>
        <meta name="description" content="Área de dashboard" />
      </Head>
      <HomeTemplate data={data} isLoading={isLoading}/>
    </>
  )
}

