/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { Flex, IconButton,Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import CustomButton from '../Atoms/CustomButton'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"
import "./PageSelector.css"



export const PageSelector = (props) => {

    return (
        <Flex className='pageSelector'>

        <IconButton onClick={props.goBack} isDisabled={props.pageNumber <= 1} aria-label={"previous page"} icon={<FaAngleLeft />}></IconButton>
        <Text>{props.pageNumber}</Text>
        <IconButton onClick={props.advance} isDisabled={props.nextPageFlag} aria-label={"next page"} icon={<FaAngleRight />}></IconButton>

        </Flex>
    )

}

PageSelector.propTypes ={
    pageNumber: PropTypes.number,
    handleChange: PropTypes.func,
    nextPageFlag: PropTypes.bool,
    advance: PropTypes.func,
    goBack: PropTypes.func,
}

export default PageSelector