import React from 'react'
import './experiences.css'
import Experience from '../../components/cards/experience/Experience'
import useDocumentTitle from '../../assets/js/useDocumentTitle'
import Info from '../../configs/data'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AnimatedPage from '../../AnimatedPage'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Experiences = () => {
  useDocumentTitle('Experiences')
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <AnimatedPage>
      <div className="experiences-container">
        <h2>Experience</h2>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs className="relative z-0" value={value} onChange={handleChange} aria-label="Experiences">
              <Tab label="Professional" {...a11yProps(0)} />
              <Tab label="Volunteering" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <AnimatedPage>
              <Experience experience={Info.proExperience} />
            </AnimatedPage>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AnimatedPage>
              <Experience experience={Info.volExperience} />
            </AnimatedPage>
          </TabPanel>
        </Box>
      </div>
    </AnimatedPage>
  )
}

export default Experiences
