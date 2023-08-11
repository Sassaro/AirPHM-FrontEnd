/* eslint-disable no-unused-vars */
import React from 'react'
import {Menu,MenuButton,MenuList,MenuItem,Box,Flex,Text} from '@chakra-ui/react'
import { FaBars,FaHome,FaSignOutAlt,FaUser } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom'
import "./Dropdown.css"

export const Dropdown = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const onClickProfile = () => {

        if(location.state){
            //este state id esta puesto actualmente para pruebas.
            navigate("/profile",{state:{id: location.state.id}})
            console.log(location.state.id)
        }else{
            navigate("/login")
        }
    }

    const onClickHome = () => {
        //este state id esta puesto actualmente para pruebas.

        if(location.state){
            navigate("/home",{state:{id: location.state.id}})
        }else{
            navigate("/home")
        }
    }

    const onClickLeave = () =>{
        navigate("/home")
        //no me gusta pero ahorra algunos problemas
        window.location.reload(false)
    }

    const profileText = () =>{

        if(location.state){
            return "Perfil"
        }else{
            return "Ingresar"
        }
    }

    return (
        <>
       
        <Menu>
            <MenuButton className="dropdown"> <FaBars className='icon'></FaBars> </MenuButton>
            <MenuList className='dropdownList'>
                <MenuItem onClick={ onClickHome} className='dropdownItem'> Home </MenuItem>
                <MenuItem onClick={ onClickProfile} className='dropdownItem'>{profileText()}</MenuItem>
                <MenuItem onClick={ onClickLeave} className='dropdownItem'>Cerrar Sesion</MenuItem>
            </MenuList>
        </Menu>
        <Box className="pageSelection">
            <Flex className="buttonGroup" onClick={ onClickHome }>
                <FaHome className='icon'></FaHome>
                <Text>Home</Text>
            </Flex>

            <Flex data-testid={"profileButton"} className="buttonGroup" onClick={ onClickProfile } >
                <FaUser className='icon'></FaUser>
                <Text>{profileText()}</Text>
            </Flex>

            {(location.state) && 
            <Flex className="buttonGroup" onClick={ onClickLeave } >
                <FaSignOutAlt className='icon'></FaSignOutAlt>
                <Text>Cerrar Sesion</Text>
            </Flex>}

        </Box>
        </>
    )
}

export default Dropdown