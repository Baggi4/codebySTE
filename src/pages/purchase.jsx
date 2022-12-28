/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import Image from 'next/image'
import imgSubscribe from '@/images/photos/banner_4.png'
import imgAuth from '@/images/photos/banner_2.png'
import imageCarrd from '@/images/photos/Carrd.png'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}
function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

const products = [
  {
    id: 1,
    name: 'Lande',
    category: 'Landing-one-page',
    price: '$189',
    imageSrc: imageCarrd,
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    link: { href: '/client/landing' },
  },
  {
    id: 2,
    name: 'Fusion',
    category: 'UI',
    price: '$489',
    imageSrc: imageCarrd,
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    link: { href: '/' },
  },
  {
    id: 3,
    name: 'Subscription-payments',
    category: 'UI',
    price: '$1449',
    imageSrc: imgAuth,
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    link: { href: 'https://subscription-payments.vercel.app/' },
  },
  {
    id: 4,
    name: 'Next-Auth',
    category: 'UI',
    price: '$1449',
    imageSrc: imgSubscribe,
    imageAlt: 'nextjs-mysql-auth',
    link: { href: 'https://nextjs-mysql-auth.vercel.app/' },
  },
  // More products...
]
const teamplates = [
  {
    id: 5,
    name: 'Next-Auth',
    category: 'UI',
    price: '$19',
    imageSrc: imgSubscribe,
    imageAlt: 'nextjs-mysql-auth',
    link: { href: 'https://nextjs-mysql-auth.vercel.app/' },
  },
  // More products...

]

export default function Purchase() {
  return (
    <>
      <Head>
        <title>Purchase - codebySte</title>
        <meta name="description" content="Purchase this templates" />
      </Head>
      <SimpleLayout
        title="Purchase"
        intro="You decide, i build your own website. Starting at 189$"
        >
        <div className="mt-6 grid gap-20 sm:grid-cols-1 md:grid-cols-2">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Card.Link href={product.link.href} target="_blank">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center shadow-lg"
                  />
                  <div
                    className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <div className="w-full rounded-md bg-gray-100 bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                      Preview
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900 dark:text-white">
                  <h3>
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <div className="relative z-10 float-right">
                    <span className="py-0.75 flex rounded-full bg-green-100 px-4 text-base font-medium text-green-800">
                      {product.price}
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </Card.Link>
            </div>
          ))}
        </div>
      </SimpleLayout>
      <SimpleLayout
        title="Teamplates"
        intro="Did you have knowledge in coding ? Then, you can purchase theses Templates, ready-to-use and fully customizable projects sources-code"
      >
        <div className="mt-6 grid gap-20 sm:grid-cols-1 md:grid-cols-2">
          {teamplates.map((product) => (
            <div key={product.id} className="group relative">
              <Card.Link href={product.link.href} target="_blank">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center shadow-lg"
                  />
                  <div
                    className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <div className="w-full rounded-md bg-gray-100 bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                      Preview
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900 dark:text-white">
                  <h3>
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <div className="relative z-10 float-right">
                    <span className="py-0.75 flex rounded-full bg-green-100 px-4 text-base font-medium text-green-800">
                      {product.price}
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </Card.Link>
            </div>
          ))}
          </div>
      </SimpleLayout>
    </>
  )
}
