/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const products = [
  {
    id: 1,
    name: 'Fusion',
    category: 'UI Kit',
    price: '$49',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    link: { href: '/' },
  },
    {
    id: 1,
    name: 'Fusion',
    category: 'UI Kit',
    price: '$949',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    link: { href: '/' },
  },
    {
    id: 1,
    name: 'Paykit',
    category: 'UI Kit',
    price: '$1449',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    link: { href: '/' },
  },
  // More products...
]

export default function Purchase() {
  return (
    <>
      <Head>
        <title>Purchase - codebySte</title>
        <meta
          name="description"
          content="Purchase this themes and develop by yourself your own website with these ready and fully customizable projects sources code"
        />
      </Head>
      <SimpleLayout
        title="Purchase theses Themes, developed & designed by myself for your benefits."
        intro="Landing Pages, Product Pages Links Pages"
      >
        <div className="mt-6 grid md:grid-cols-2 gap-20 sm:grid-cols-1">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Card.Link href={product.link.href}>
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center"
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
            </Card.Link></div>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
