import { Container } from '@mui/system'
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Box, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';

import React from 'react'

export default function TabGridConnected() {
	const [nameDatabaseSolarRadiation, setNameDatabaseSolarRadiation] = React.useState<string>('DbPvgisSarah');
	const [typePvTechnology, setTypePvTechnology] = React.useState<string>('Unknown');
	const [peakPowerPV, setPeakPowerPV] = React.useState<number>(0); // Installed peak PV power [kWp]
	const [percentLoss, setPercentLoss] = React.useState<number>(0);  // System loss [%]
  const [moutingPosition, setMoutingPosition] = React.useState<string>('Free-Standing');  // mounting position 1. Free-standing   2. Roof Added
	const [slopeDegree, setSlopeDegree] = React.useState<number>(0);  // Slope - Degree - number
	const [azimuthDegree, setAzimuthDegree] = React.useState<number>(0);  // Slope - Degree - number
	const [isOptimizeSlope, setisOptimizeSlope] = React.useState<boolean>(false); // Optimize slope - check
  const [isOptimizeSlopeAzimuth, setisOptimizeSlopeAzimuth] = React.useState<boolean>(false); // Optimize slope and azimuth - check

	const handleDatabaseSolarRadiation = (
    event: SelectChangeEvent<string>
  ) => {
    setNameDatabaseSolarRadiation(event.target.value as string);
  };

  const handlePvTechnology = (
    event: SelectChangeEvent<string>
  ) => {
    setTypePvTechnology(event.target.value);
  };

  const handlePeakPowerPV = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPeakPowerPV((prev) => +event.target.value || prev);
  };

  const handlePercentLoss = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPercentLoss((prev) => +event.target.value || prev);
  };

  const handleMountingPosition = (event: SelectChangeEvent<string>) => {
    setMoutingPosition(event.target.value)
  }

  const handleSlopeDegree = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlopeDegree((prev) => +event.target.value || prev)
  }

  const handleAzimuthDegree = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAzimuthDegree((prev) => +event.target.value || prev)
  }

  const handleIsAzimuthSlope = (event: React.ChangeEvent<HTMLInputElement>) => {
    setisOptimizeSlope(!event.target.checked)
  }

  const handleIsOptimizeSlopeAzimuth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setisOptimizeSlopeAzimuth(!event.target.checked)
  }

  return (
    <Container sx={{width: '100%', display: 'flex', flexDirection:'column', justifyContent:'center', gap:'10px'}}>
      {/* Solar Radiation */}

      <FormControl>
        <InputLabel id="solarDB">Solar radiation database</InputLabel>
        <Select
          labelId="solarDB"
          id="solarDB"
          value={nameDatabaseSolarRadiation}
          label="Solar radiation database"
          onChange={handleDatabaseSolarRadiation}
          sx={{width: "100%"}}
        >
            <MenuItem value={"DbPvgisSarah"}> PVGIS-SARAH </MenuItem>
            <MenuItem value={"DbPvgisCmsaf"}> PVGIS-CMSAF </MenuItem>
            <MenuItem value={"DbPvgisNsrdb"}> PVGIS-NSRDB </MenuItem>
        </Select>
      </FormControl>

        {/* PV Technology */}
        <FormControl>
        <InputLabel id="pvTechnology">PV Technology </InputLabel>
        <Select
            labelId="pvTechnology"
            id="pvTechnology"
            value={typePvTechnology}
            label="PV Technology "
            onChange={handlePvTechnology}
            sx={{width: "100%"}}
          >
          <MenuItem value={"Unknown"}> Unknown </MenuItem>
          <MenuItem value={"Crystallize"}> Crystallize Silicon</MenuItem>
          <MenuItem value={"Cis"}> CIS  </MenuItem>
          <MenuItem value={"CdTe"}> CdTe </MenuItem>
          </Select>
        </FormControl>

        {/* peak PV power [kWp] */}
        <TextField
            id="peakPowerPV"
            value={peakPowerPV}
            label="Installed peak PV power [kWp]"
            onChange={handlePeakPowerPV}
            sx={{width: "100%"}}
          >
        </TextField>

        <Typography>
          Fixed mounting options
        </Typography>

        {/* Mounting Position */}
        <FormControl>
          <InputLabel id="mountingPosition">Mounting Position </InputLabel>
          <Select
              labelId="mountingPosition"
              id="mountingPosition"
              value={moutingPosition}
              label="Mounting Position "
              onChange={handleMountingPosition}
              sx={{width: "100%"}}
            >
            <MenuItem value={"Free-Standing"}>Free-Standing</MenuItem>
            <MenuItem value={"Roof added / Building integrated"}>Roof added / Building integrated</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="percentLoss"
          value={percentLoss}
          label=" System loss [%]"
          type="number"
          onChange={handlePercentLoss}
          sx={{width: "100%"}}
        >
        </TextField>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px'
        }}>
          <TextField
              id=""
              value={slopeDegree}
              label="Slope [°]"
              onChange={handleSlopeDegree}
            >
          </TextField>
          <FormControlLabel
            control={<Checkbox value={isOptimizeSlope} onChange={handleIsAzimuthSlope} />}
            label="Optimize slope"
          />
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px'
        }}>
          <TextField
              id=""
              value={azimuthDegree}
              label="Azimiuth [°]"
              onChange={handleAzimuthDegree}
            >
          </TextField>

          <FormControlLabel
            control={<Checkbox value={isOptimizeSlopeAzimuth} onChange={handleIsOptimizeSlopeAzimuth}/>}
            label="Optimize slope and azimuth"
          />
        </Box>

      </Container>
  )
}
