import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'

import image1 from '@/images/photos/banner_1.png'
import { Container } from '@/components/Container'
import { CheckIcon } from '@heroicons/react/24/solid'
import { SimpleLayout } from '@/components/SimpleLayout'

const steps = [
  { id: '01', name: 'Job details', status: 'complete' },
  { id: '02', name: 'App form', status: 'complete' },
  { id: '03', name: 'Preview', status: 'current' },
  { id: '05', name: 'Revision(s)', status: 'upcoming' },
  { id: '06', name: 'Complete', status: 'upcoming' },
]
export default function AppForm() {
  return (
    <>
      <Head>
        <title>Progress - codebySte</title>
        <meta name="description" content="Your Progress." />
      </Head>
      <Container className="mt-10">
        <SimpleLayout
        title="Progress."
        intro="Your Website progress will be fecth here, password or personals data 'll not be displayed."
      ></SimpleLayout>
        <nav aria-label="Progress">
          <ol
            role="list"
            className="divide-y divide-gray-300 truncate rounded-md border border-gray-300 md:flex md:divide-y-0"
          >
            {steps.map((step, stepIdx) => (
              <li key={step.name} className="relative md:flex md:flex-1">
                {step.status === 'complete' ? (
                  <div className="group flex w-full items-center">
                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 group-hover:bg-teal-800">
                        <CheckIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-900">
                        {step.name}
                      </span>
                    </span>
                  </div>
                ) : step.status === 'current' ? (
                  <div
                    className="flex items-center px-6 py-4 text-sm font-medium"
                    aria-current="step"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-teal-600">
                      <span className="text-teal-600">{step.id}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-teal-600">
                      {step.name}
                    </span>
                  </div>
                ) : (
                  <div className="group flex items-center">
                    <span className="flex items-center px-6 py-4 text-sm font-medium">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                        <span className="text-gray-500 group-hover:text-gray-900">
                          {step.id}
                        </span>
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                        {step.name}
                      </span>
                    </span>
                  </div>
                )}

                {stepIdx !== steps.length - 1 ? (
                  <>
                    {/* Arrow separator for lg screens and up */}
                    <div
                      className="absolute top-0 right-0 hidden h-full w-5 md:block"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 22 80"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 -2L20 40L0 82"
                          vectorEffect="non-scaling-stroke"
                          stroke="currentcolor"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
        <Image className="mt-8 relative rounded-lg object-cover shadow-lg" src={image1} alt="Capt" />
      </Container>
    </>
  )
}
