import React from 'react'
import { useState } from 'react'
import {Box , Tab} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import TabGridConnected from '../Phase2/TabGridConnected'
// import TabTrackingPV from './TabTrackingPV'
// import TabOffGrid from './TabOffGrid'
import TabMonthlyData from './TabMonthlyData'
// import TabHourlyData from './TabHourlyData'
// import TabDailyData from './TabDailyData'
// import TabTMYData from './TabTMYData'
// import TabCSVData from './TabCSVData'

export default function OptionsTabs() {
	const [value, setValue] = React.useState<string>('5')
	const handleChanged = (event:React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}
  return (
    // <div>OptionsTabs</div>
    <Box>
        <TabContext value={value}>
            <Box sx={{
                borderBotton:1,
                borderColer: 'divider'
            }}>
                <TabList
									aria-label='Tabs Example'
									onChange={handleChanged}
									textColor='secondary'
									indicatorColor='secondary'
                                    variant='scrollable'
                                    scrollButtons='auto'
								>
                    {/* <Tab label='CSV'            value='1'/>
                    <Tab label='TMY'            value='2'/>
                    <Tab label='Hourly Data'    value='3'/>
                    <Tab label='Daily Data'     value='4'/> */}
                    <Tab label='Montly Data'    value='5'/>
                    <Tab label='Grid Connected' value='6'/>
                    {/* <Tab label='Tracking PV'    value='7'/>
                    <Tab label='Off-Grid'       value='8'/> */}


                </TabList>
            </Box>
            {/* <TabPanel value='1'> <TabCSVData/>          </TabPanel>
            <TabPanel value='2'> <TabTMYData/>          </TabPanel>
            <TabPanel value='3'> <TabHourlyData/>       </TabPanel>
            <TabPanel value='4'> <TabDailyData/>        </TabPanel> */}
            <TabPanel value='5'> <TabMonthlyData/>      </TabPanel>
            <TabPanel value='6'> <TabGridConnected/>    </TabPanel>
            {/* <TabPanel value='7'> <TabTrackingPV/>       </TabPanel>
            <TabPanel value='8'> <TabOffGrid/>          </TabPanel> */}

        </TabContext>
    </Box>
  )
}
