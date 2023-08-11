/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CheckboxGroup,Stack,Checkbox,Text, Flex, Box } from '@chakra-ui/react'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './CheckBox.css'


export const CheckBox = ({updatePuntaje}) => {

    const [selectedValue, setSelectedValue] = useState()

    const handleCheckboxChange = (value) => {
        setSelectedValue(value)
        updatePuntaje(value)
    }

    return (
        <Box className='checkboxContainer'>
            <CheckboxGroup className='checkboxes' colorScheme='green' value={selectedValue} >
                <Stack spacing={[1, 5]}>
                    <Text as={"b"} fontSize='5x1' alignSelf="center">Filtrar por Puntaje</Text>
                    <Checkbox as={"b"} value='5' 
                              isChecked={selectedValue ==='5'}
                              onChange={(e) => handleCheckboxChange(e.target.value)}>5 puntos</Checkbox>
                    <Checkbox as={"b"} value='4' 
                              isChecked={selectedValue ==='4'}
                              onChange={(e) => handleCheckboxChange(e.target.value)}>4 puntos o mas</Checkbox>
                    <Checkbox as={"b"} value='3' 
                              isChecked={selectedValue ==='3'}
                              onChange={(e) => handleCheckboxChange(e.target.value)}>3 puntos o mas</Checkbox>
                    <Checkbox as={"b"} value='2' 
                              isChecked={selectedValue ==='2'}
                              onChange={(e) => handleCheckboxChange(e.target.value)}>2 puntos o mas</Checkbox>
                    <Checkbox as={"b"} value='0' 
                              isChecked={selectedValue ==='1'}
                              onChange={(e) => handleCheckboxChange(e.target.value)}>Todos</Checkbox>                    
                </Stack>
        </CheckboxGroup>
        </Box>
        
    )
}

CheckBox.propTypes = {
    updatePuntaje: PropTypes.func.isRequired,
}
  
export default CheckBox
