import Head from 'next/head'
import Image from 'next/image'

import image4 from '@/images/photos/banner_3.png'
import image5 from '@/images/photos/Capt_5.png'
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
        className='ml-1.5 h-5 w-5 fill-zinc-100'
      />
      <path
        fillRule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clipRule="evenodd"
        className='ml-1.5 h-5 w-5 fill-zinc-100'
      />
    </svg>
  )
}

const projects = [
  {
    name: 'KawaE',
    label: 'Shopify Ecommerce',
    description: 'Headless ecommerce powered by Vercel & Shopify',
    link: {
      href: 'https://nextjs-demo-ecommerce-psr0vi9iw-codebyste.vercel.app',
    },
    image: image4,
  },
  {
    name: 'Remix',
    label: 'Shopify Digital Ecommerce',
    description: 'Headless digital ecommerce',
    link: { href: 'https://remixshopify.mcan.sh' },
    image: image5,
  },
]

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - Steven.M</title>
        <meta name="description" content="I’ve build many ecomerce website" />
      </Head>
      <SimpleLayout
        title="Let's build something new."
        intro="Lets take a look of this examples of my projects build."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <Image
                    className="relative z-40 rounded-lg object-cover shadow-lg "
                    src={project.image}
                    alt=""
                  />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href} target="_blank">
                    {project.name}
                  </Card.Link>
                </h2>
                <span className="relative z-20 text-sm text-teal-500">
                  {project.label}
                </span>

                <Card.Description>{project.description}</Card.Description>

                <Button
                  type="button"
                  className="inline-flex items-center rounded-lg text-base font-semibold py-3 px-4 bg-slate-900 text-white"
                >
                  <span className="ml-2">Live Demo</span>
                  <LinkIcon
                    className="h-6 w-6 flex-none pl-1"
                    target="_blank"
                  />
                </Button>
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
