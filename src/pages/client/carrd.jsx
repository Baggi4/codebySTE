import Head from 'next/head'
import { CheckIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import imageCarrd from '@/images/photos/Carrd.png'
import imageBg from '@/images/photos/grid-blur-purple-on-black.jpg'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const tiers = [
  {
    id: 'tier-hobby',
    name: 'Hobby',
    href: '#',
    priceMonthly: 49,
    description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
      'Vel ipsa esse repudiandae excepturi',
      'Itaque cupiditate adipisci quibusdam',
    ],
  },
  {
    id: 'tier-team',
    name: 'Team',
    href: '#',
    priceMonthly: 79,
    description: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis.',
    features: [
      'Pariatur quod similique',
      'Sapiente libero doloribus modi nostrum',
      'Vel ipsa esse repudiandae excepturi',
      'Itaque cupiditate adipisci quibusdam',
      'Sapiente libero doloribus modi nostrum',
    ],
  },
]

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

function Badge(props) {
  return (
    <span className="py-0.75 flex rounded-full bg-green-100 px-4 text-sm font-medium text-green-800">
      Free
    </span>
  )
}
const projects = [
  {
    name: 'Carrd',
    label: 'one-page builder',
    description: 'User-friendly one-landing-page builder',
    link: { href: 'https://carrd.co' },
    image: imageCarrd,
    // badge: free,
  },
]

export default function Purchase() {
  return (
    <>
      <Head>
        <title>Carrd - codebySte</title>
        <meta
          name="description"
          content="Get your Website with the latest features UI / UX design"
        />
      </Head>
      <SimpleLayout
        title="Get your Website with the latest features UI / UX design."
        intro="Choose one of theses two plans"
      >
        <div className="bg-gray-900">
          <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
            <div>
              <Image
                className="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
                src={imageBg}
                alt="imageBg"
                width={600}
                height={600}

              />
            </div>
            <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <h2 className="text-lg font-semibold leading-8 text-indigo-400">
                  Pricing
                </h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-white">
                  The right price for you,{' '}
                  <br className="hidden sm:inline lg:hidden" />
                  whoever you are
                </p>
                <p className="mt-6 text-lg leading-8 text-white/60">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Velit numquam eligendi quos odit doloribus molestiae
                  voluptatum.
                </p>
              </div>
            </div>
          </div>
          <div className="flow-root bg-white pb-32 lg:pb-40">
            <div className="relative -mt-80">
              <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 lg:gap-8">
                  {tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10"
                    >
                      <div className="p-8 sm:p-10">
                        <h3
                          className="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
                          id={tier.id}
                        >
                          {tier.name}
                        </h3>
                        <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                          ${tier.priceMonthly}
                        </div>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                          {tier.description}
                        </p>
                      </div>
                      <div className="flex flex-1 flex-col p-2">
                        <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                          <ul role="list" className="space-y-6">
                            {tier.features.map((feature) => (
                              <li key={feature} className="flex items-start">
                                <div className="flex-shrink-0">
                                  <CheckIcon
                                    className="h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                </div>
                                <p className="ml-3 text-sm leading-6 text-gray-600">
                                  {feature}
                                </p>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-8">
                            <a
                              href={tier.href}
                              className="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700"
                              aria-describedby={tier.id}
                            >
                              Get started today
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-md lg:max-w-4xl">
                <div className="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
                  <div className="lg:min-w-0 lg:flex-1">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                      Discounted
                    </h3>
                    <div className="mt-2 text-base leading-7 text-gray-600">
                      Get full access to all of standard license features for
                      solo projects that make less than $20k gross revenue for{' '}
                      <span className="font-semibold text-gray-900">$29</span>.
                    </div>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block rounded-lg bg-indigo-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-indigo-700 hover:bg-indigo-100"
                    >
                      Buy discounted license{' '}
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
