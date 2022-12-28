import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Code() {
  return (
    <>
      <Head>
        <title>Code - codebySte</title>
        <meta name="description" content="Code" />
      </Head>
      <SimpleLayout
        title="Code"
        intro="These are a collection of code snippets I've used in the past and saved. Some are Serverless Functions, which include set up instructions. Others are anything from random CSS snippets to Node.js scripts."
      >
        <a
          href="https://leerob.io/snippets"
          className="text-teal-500"
          target="_blank"
          without
          rel="noreferrer"
        >
          code snippets link 1
        </a>
        <br />
        <a
          href="https://caspertheghost.me/snippets"
          className="text-teal-500"
          target="_blank"
          without
          rel="noreferrer"
        >
          code snippets link 2
        </a>
      </SimpleLayout>
    </>
  )
}
