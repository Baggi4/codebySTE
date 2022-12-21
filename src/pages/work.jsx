import Head from 'next/head'
import Image from 'next/image'

import image4 from '@/images/photos/banner_3.png'
import logoThirdweb from '@/images/logos/ThirdWeb-logo.jpg'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function WorkSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}
function LinkIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
        clipRule="evenodd"
        className="ml-1.5 h-5 w-5 fill-zinc-100"
      />
      <path
        fillRule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clipRule="evenodd"
        className="ml-1.5 h-5 w-5 fill-zinc-100"
      />
    </svg>
  )
}

const projects = [
  {
    name: 'Occount',
    label: 'Shopify Headless Ecommerce',
    description: 'Headless ecommerce pwd by Vercel & Shopify',
    link: {
      href: 'https://nextjs-demo-ecommerce-codebyste.vercel.app/',
    },
    image: image4,
    status: 'online',
  },
  {
    name: 'NFT Gated Website',
    label: 'Web3 NFT Gated Website',
    description: 'The Future',
    link: { href: '#' },
    image: logoThirdweb,
    progress: 'soon',
  },
]

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - codebySte</title>
        <meta name="description" content="I actually work on this websites" />
      </Head>
      <SimpleLayout
        title="Let's build something new."
        intro="Lets take a look of my projects build."
      >
        <div className="mt-6 grid md:grid-cols-2 gap-20 sm:grid-cols-1">
          {projects.map((project) => (
              <div key={project.name} className="group relative">
                <Card.Link href={project.link.href}>
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      className="object-cover object-center shadow-lg "
                      src={project.image}
                      alt={project.alt}
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
                  <h2 className="mt-4 flex items-center justify-between space-x-8 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                    {project.name}
                  </h2>
                  <div className="relative z-10 float-right">
                    <span className="py-0.75 flex rounded-full bg-green-100 px-4 text-base font-medium text-green-800">
                      {project.status}
                    </span>
                    <span className="py-0.75 flex rounded-full bg-yellow-100 px-4 text-base font-medium text-yellow-900">
                      {project.progress}
                    </span>
                  </div>
                  <span className="relative z-20 text-sm text-teal-500">
                    {project.label}
                  </span>

                  <Card.Description>{project.description}</Card.Description>
                </Card.Link>
              </div>
            
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
