import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoStripe from '@/images/logos/stripe.png'
import logoPhotoshop from '@/images/logos/Ps.png'
import logoShopify from '@/images/logos/shopify.png'
import logoVercel from '@/images/logos/vercel.png'
import logoTailwind from '@/images/logos/Tailwind_CSS_Logo.svg.png'
import logoNextjs from '@/images/logos/next-js-logo.png'
import logoOvh from '@/images/logos/ovh.png'
import logoNetlify from '@/images/logos/logo-netlify.png'
import logoSanity from '@/images/logos/sanity.png'

const projects = [
  {
    name: 'OVHcloud',
    description:
      'Cloud solution based in France, EU. Web hosting, domain, server etc...',
    link: { href: 'https://www.ovhcloud.com/', label: 'ovhcloud.com' },
    logo: logoOvh,
  },
  {
    name: 'Netlify',
    description:
      'The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.',
    link: { href: 'https://www.netlify.com/', label: 'netlify.com' },
    logo: logoNetlify,
  },
  {
    name: 'Sanity',
    description:
      'Sanity is the CMS platform for structured content that powers remarkable digital experiences.',
    link: { href: 'https://www.sanity.io/', label: 'sanity.io' },
    logo: logoSanity,
  },
  {
    name: 'Shopify',
    description:
      'Shopify is the most popular ecommerce platform management in the world. Thrusted by millions of merchants worldwide.',
    link: { href: 'https://www.shopify.com/', label: 'shopify.com' },
    logo: logoShopify,
  },
  {
    name: 'Stripe',
    description: 'Sripe is a Payment processor for online-merchants.',
    link: { href: 'https://www.stripe.com/', label: 'stripe.com' },
    logo: logoStripe,
  },
  {
    name: 'Nextjs',
    description:
      'The React Framework, Next.js gives the best developer experience with all the features you need for production.',
    link: { href: 'https://nextjs.org', label: 'nextjs.com' },
    logo: logoNextjs,
  },
  {
    name: 'Vercel',
    description: 'The Nextjs deployment platform.',
    link: { href: 'https://vercel.com', label: 'vercel.com' },
    logo: logoVercel,
  },
  {
    name: 'Tailwindcss',
    description:
      'Rapidly build modern websites without ever leaving your HTML.',
    link: { href: 'https://tailwindcss.com', label: 'tailwindcss.com' },
    logo: logoTailwind,
  },
  {
    name: 'Photoshop',
    description:
      'Photoshop is the oldest image editing software, it was created in 1988 !',
    link: {
      href: 'https://www.adobe.com/products/photoshop.html',
      label: 'photoshop.com',
    },
    logo: logoPhotoshop,
  },
]
function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Features - Steven.M</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Features"
        intro="I’ve worked on multiples Projects and i show these features that I’m most proud to work with."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full bg-white"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank">
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
      <SimpleLayout
        title="Web3"
        intro="Im already learn a lot about the Web 3, decentralized website and more."
      ></SimpleLayout>
    </>
  )
}
