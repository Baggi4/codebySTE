import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  DiscordIcon,
} from '@/components/SocialIcons'
function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:scale-110 group-hover:fill-teal-600 dark:fill-zinc-400 dark:group-hover:fill-teal-500" />
    </Link>
  )
}
function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="lg:px- mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6">
              <div className="-mx-5 -my-2 flex flex-wrap gap-6 justify-center text-base font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/features">Features</NavLink>
                <NavLink href="/work">Work</NavLink>
                <NavLink href="/purchase">Purchase</NavLink>
                <NavLink href="/code">Code</NavLink>
              </div>
              <div className="mt-8 flex justify-center space-x-6">
                <SocialLink
                  href="https://twitter.com/StevenMadec"
                  aria-label="Follow on Twitter"
                  icon={TwitterIcon}
                  target="_blank"
                />
                <SocialLink
                  href="https://www.instagram.com/stevenmadec/"
                  aria-label="Follow on Instagram"
                  icon={InstagramIcon}
                  target="_blank"
                />
                <SocialLink
                  href="https://github.com/Baggi4"
                  aria-label="Follow on GitHub"
                  icon={GitHubIcon}
                  target="_blank"
                />
                <SocialLink
                  href="https://discord.com/users/Baggi4"
                  aria-label="Follow on GitHub"
                  icon={DiscordIcon}
                  target="_blank"
                />
                <SocialLink
                  href="mailto:codebyste@gmail.com"
                  aria-label="Follow on GitHub"
                  icon={MailIcon}
                  target="_blank"
                />
              </div>
              <p className="mt-8 text-center  text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} codebySte. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
