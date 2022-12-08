import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'

export default function Purchase() {
  return (
    <>
      <Head>
        <title>Purchase - codebySte</title>
        <meta
          name="description"
          content="Purchase this themes and develop your own website with these ready and fully customizable projects sources code"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
            <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
              Purchase theses themes, develop and design by yourself the Future.get started with one of our Templates.
            </h1>
            <p>get started with one of my Templates.</p>
      </Container>
    </>
  )
}
