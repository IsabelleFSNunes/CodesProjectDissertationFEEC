import { TabContext, TabList, TabPanel} from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React from 'react'
import Abacuses2D from './Abacuses2D';
import Abacuses3D from './Abacuses3D';
import Contour2Histogram from './Contour2Histogram';

function AbacusesTabs() {
  const [value, setValue] = React.useState<string>('1') 
  const handleChanged = (event:React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{
          borderBotton:1,
          borderColer: 'divider'
        }}>
          <TabList
            // orientation="vertical"
            aria-label='Tabs Phase1'
            onChange={handleChanged}
            textColor='primary'
            indicatorColor='primary'
            scrollButtons='auto'
          >
            <Tab label="2D" value="1"/>
            <Tab label="3D" value="2"/>
          </TabList>
          </Box>
          <TabPanel value='1'> <Contour2Histogram/> </TabPanel>
          {/* <TabPanel value='1'> <Abacuses2D/> </TabPanel> */}
          <TabPanel value='2'> <Abacuses3D/> </TabPanel>
      </TabContext>
    </Box>
  )
}

export default AbacusesTabs;
