import React from 'react'
import './experiences.css'
import Experience from '@/components/cards/experience/Experience'
import useDocumentTitle from '@/assets/js/useDocumentTitle'
import Info from '@/configs/data'
import AnimatedPage from '@/AnimatedPage'
import { Tabs, Tab } from '@nextui-org/react'

const Experiences = () => {
  useDocumentTitle('Experiences')

  return (
    <AnimatedPage>
      <div className="experiences-container">
        <h2>Experience</h2>
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              'gap-6 w-full relative rounded-none p-0 border-b border-divider',
            cursor: 'w-full bg-blue-500',
            tab: 'max-w-fit px-0 h-12',
            tabContent:
              'group-data-[selected=true]:text-blue-500/80 font-semibold uppercase',
          }}
        >
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <span>Professional</span>
              </div>
            }
          >
            <AnimatedPage>
              <Experience experience={Info.proExperience} />
            </AnimatedPage>
          </Tab>
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <span>Volunteering</span>
              </div>
            }
          >
            <AnimatedPage>
              <Experience experience={Info.volExperience} />
            </AnimatedPage>
          </Tab>
        </Tabs>
      </div>
    </AnimatedPage>
  )
}

export default Experiences
