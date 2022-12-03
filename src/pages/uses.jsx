import Head from 'next/head'

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

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Steven.M</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="34” Msi Optix MAG341CQ + 2* Asus VE247">
              3 screens for more productivity, i guess !
            </Tool>
            <Tool title="Custom Desktop Case">
              <p>UserBenchmarks: Game 93%, Desk 114%, Work 98%</p>
              <p>&nbsp;</p>• CPU: Intel Core i5-12600K
              <p>&nbsp;</p>• GPU: Nvidia GTX1070
              <p>&nbsp;</p>• SSD: SAMSUNG 980 PRO 500Go M.2 NVMe
              <p>&nbsp;</p>• HDD: Seagate 8TB
              <p>&nbsp;</p>• RAM: Corsair Vengeance LPX DDR4 3200 C16 2x8GB
              <p>&nbsp;</p>• MBD: MSI PROZ690-A DDR4
              <p>&nbsp;</p>• PWR: MSI A-750w Gold+
            </Tool>
            <Tool title="Steelseries Apex Pro Keyboard">
              They don&apos;t make keyboards the way they used to but, these one
              is the most adjustable mechanical keyboard and offer customizable
              per-key sensitivity.
            </Tool>
            <Tool title="Msi GM41 Wireless Mouse">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Vscode">
              Visual Studio Code is still the best text editor ever made.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various Projects
              over the years.
            </Tool>
            <Tool title="Coolors">
              Generate beautiful palettes right from the browser tab.
            </Tool>
            <Tool title="Ghostery">Ads block for Chrome</Tool>
            <Tool title="React Developer Tools">
              Adds React debugging tools to the Chrome Developer Tools. Created
              from revision
            </Tool>
            <Tool title="Text Blaze">
              Create smart text expansions to get more done and streamline your
              work. Billions of keystrokes saved!
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Photoshop">
              I started using Photoshop since i have a computer.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Vscode extensions">
            <Tool title="Emmet"></Tool>
            <Tool title="Prettier"></Tool>
            <Tool title="Sublime Text Keymap and Sett"></Tool>
            <Tool title="Tailwind CSS"></Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
