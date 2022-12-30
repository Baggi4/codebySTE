import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import imgSubscribe from '@/images/photos/banner_4.png'
import imgLeerob from '@/images/photos/banner_6.png'
import imgCasper from '@/images/photos/banner_5.png'

import { AcademicIcon } from '@/components/SocialIcons'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function CodeLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" href="" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:scale-110 group-hover:fill-teal-600 dark:fill-zinc-400 dark:group-hover:fill-teal-500" />
    </Link>
  )
}

const teamplates = [
  {
    id: 8,
    name: 'leerob.io',
    price: '$19',
    imageSrc: imgLeerob,
    imageAlt: 'nextjs-mysql-auth',
    link: { href: "https://leerob.io/snippets" },
  },
  {
    id: 9,
    name: 'caspertheghost.me',
    price: '$19',
    imageSrc: imgCasper,
    imageAlt: 'nextjs-mysql-auth',
    link: { href: 'https://caspertheghost.me/snippets' },
  },
  // More products...
]

export default function Code() {
  return (
    <>
      <Head>
        <title>Code - codebySte</title>
        <meta name="description" content="Code" />
      </Head>
      <SimpleLayout
        title="Code"
        intro="These are a collection of code snippets I've found on web. Happy Learning."
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
                  </h3><CodeLink icon={AcademicIcon} />
                </div>
                
              </Card.Link>
            </div>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
