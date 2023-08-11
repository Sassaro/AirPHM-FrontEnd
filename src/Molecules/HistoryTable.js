/* eslint-disable no-unused-vars */
import { Flex, Text } from '@chakra-ui/react'
import { FaLink } from "react-icons/fa"
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import "./HistoryTable.css"
import { convertDateTimeToString, convertDateToString } from '../Domain/Utils'
import { useLocation, useNavigate } from 'react-router-dom'

export const HistoryTable = (props) => {

    const location = useLocation()
    const navigate = useNavigate()

    const navigateToDetail = (id) => {
          navigate(`/detail/${id}`,{state:{id: location.state.id}})
    }

    return (
        <>
            { props.logList.length > 0 ? 

                <TableContainer width={'95%'}>
                    <Table variant='striped' colorScheme='blue'>
                        <TableCaption>Historial de publicaciones visitadas</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Fecha</Th>
                                <Th>Hora</Th>
                                <Th>Nombre</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            { props.logList.map( (log) => {
                                return(
                                    <Tr key={log.id}>
                                        <Td>{new Date(log.fecha).toLocaleDateString()}</Td>
                                        <Td>{ convertDateToString(new Date(log.fecha)) }</Td>
                                        <Td> <Flex onClick={ () => { navigateToDetail(log.idHospedaje) }} className='table-lodging-name'> <FaLink/> {log.nombreHospedaje} </Flex></Td>
                                    </Tr>
                                )
                            } ) }
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>Fecha</Th>
                                <Th>Hora</Th>
                                <Th>Nombre</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>

            : <Text fontSize={"30px"} fontWeight={"bold"}>Historial Vacio</Text> }
        </>
    )

}

HistoryTable.propTypes = {
    logList: PropTypes.array
}