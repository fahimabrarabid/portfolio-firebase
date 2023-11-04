import React from 'react'
import './certification.css'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import Info from '../../configs/data'
import SimpleSquareCard from '../../components/cards/simpleSquareCard/SimpleSquareCard'
import AnimatedPage from '../../AnimatedPage'
import { Tabs, Tab } from '@nextui-org/react'

const Certification = () => {
  useDocumentTitle('Certification & Participation')
  return (
    <AnimatedPage>
      <div className="certification-container">
        <h2>Certification & Participation</h2>

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
                <span>Certification</span>
              </div>
            }
          >
            <AnimatedPage>
              <SimpleSquareCard data={Info.certification} />
            </AnimatedPage>
          </Tab>
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <span>Participation</span>
              </div>
            }
          >
            <AnimatedPage>
              <SimpleSquareCard data={Info.participation} />
            </AnimatedPage>
          </Tab>
        </Tabs>
      </div>
    </AnimatedPage>
  )
}

export default Certification
