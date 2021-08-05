import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const FourOFour = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="text-gray-700 text-center dark:text-gray-200 font-bold text-5xl pb-2">
          Sorry, I can't find that page.
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-200 mt-4">
          If you think there is something wrong, contact{' '}
          <a href="mailto:atakanzzengin@gmail.com">me</a> or go back to{' '}
          <Link href="/">homepage</Link>
        </p>
      </div>
    </Layout>
  )
}

export default FourOFour
