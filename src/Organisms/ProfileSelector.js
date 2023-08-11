/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { Box, Button, Flex, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SwitchButton from '../Atoms/SwitchButton'
import FriendCard from '../Molecules/FriendCard'
import HomeCard from '../Molecules/HomeCard'
import Comment from "../Molecules/Comment"
import "./ProfileSelector.css"
import PageSelector from '../Molecules/PageSelector'
import { userService } from '../Services/UserService'
import CustomButton from '../Atoms/CustomButton'
import { useLocation, useNavigate } from 'react-router-dom'
import UserComment from '../Molecules/UserComment'
import NewLodgingButton from '../Atoms/NewLodgingButton'
import { HistoryTable } from '../Molecules/HistoryTable'

export const ProfileSelector = () => {

    const [switchTag, setSwitchTag] = useState(0)
    const toast = useToast()
    const location = useLocation()
    const navigate = useNavigate()
    
    const [ userFriends, setUserFriends ] = useState([])
    const [ userLodgings, setuserLodgings ] = useState([])
    const [ userComments, setUserComments ] = useState([])
    const [ userReservations, setUserReservations ] = useState([])
    const [ userHistory, setUserHistory ] = useState([])

    useEffect( () => {
        callToBackEnd(getUserFriends)
        callToBackEnd(getUserLodgings)
        callToBackEnd(getUserComments)
        callToBackEnd(getUserReservations)
        callToBackEnd( () => {getUserHistory(0)} )
    },[] )


    const callToBackEnd = (backEndFunction) => {
        try{
            backEndFunction()
        }catch(error){
            toast({
                title: 'Error',
                description: getErrorMessage(error),
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
    }

    const getUserFriends = async () => {
        const userFriendList = await userService.getUserFriends(location.state.id)
        setUserFriends(userFriendList)
    }

    const getUserLodgings = async () => {
        const userBookedLodgings = await userService.getUserLodgings(location.state.id)
        setuserLodgings(userBookedLodgings)
    }

    const getUserComments = async () => {
        const userComments = await userService.getUserComments(location.state.id)
        setUserComments(userComments)
    }

    const getUserReservations = async () => {
        const userReservations = await userService.getUserReservations(location.state.id)
        setUserReservations(userReservations)
    }

    const getUserHistory = async (page) => {
        const userHistory = await userService.getUserHistory(location.state.id,page)
        setUserHistory(userHistory)
    }

    const navigateToCreateLodging = () => {
        navigate("/newLodging",{state:{id: location.state.id}})
    }

    const advancePageFunc = () =>{
        getUserHistory(userHistory.number + 1)
    }

    const returnPageFunc = async () =>{
        getUserHistory(userHistory.number - 1)
    }

    return (
        <Box>
        <Flex className='profile-selector'>
            <SwitchButton isOn={switchTag === 0} onClick={() => {setSwitchTag(0)}} label={"Reservas Compradas"}></SwitchButton>
            <SwitchButton isOn={switchTag === 1} onClick={() => {setSwitchTag(1)}} label={"Amigos"}></SwitchButton>
            <SwitchButton dataTestId={"commentsButton"} isOn={switchTag === 2} onClick={() => {setSwitchTag(2)}} label={"Comentarios"}></SwitchButton>
            <SwitchButton dataTestId={"publicationButton"} isOn={switchTag === 3} onClick={() => {setSwitchTag(3)}} label={"Mis publicaciones"}></SwitchButton>
            <SwitchButton isOn={switchTag === 4} onClick={() => {setSwitchTag(4)}} label={"Historial"}></SwitchButton>
        </Flex>
        <Flex className='itemsContainer'>
            {switchTag == 0 ? 
                userReservations.map((reservation) => {
                    return <HomeCard reserved={true} isOwner={false} lodging={reservation} key={reservation.id}></HomeCard>
                } )
            : <></>}
            {switchTag == 1 ? 
                userFriends.map((friend) =>{
                    return <FriendCard updateFunc={getUserFriends} friend={friend} key={friend.id}/>
                })
            : <></>}
            {switchTag == 2 ? 
                userComments.map((comment) => {
                    return <UserComment updateFunc={getUserComments} userComment={comment} key={comment.id}></UserComment>
                })
            : <></>}
            {switchTag == 3 ? <>
                <NewLodgingButton function={navigateToCreateLodging}></NewLodgingButton>
                {userLodgings.map((lodging) => {
                    return (<HomeCard reserved={false} updateFunc={getUserLodgings} isOwner={true} lodging={lodging} key={lodging.id}></HomeCard>)
                } )}
                </>
                : <></>}
            {switchTag == 4 ? <>
                    <PageSelector goBack={returnPageFunc} advance={advancePageFunc} nextPageFlag={userHistory.last} pageNumber={userHistory.number + 1}></PageSelector>
                    <HistoryTable logList={userHistory.content}/>
                </>
                : <></>}
        </Flex>
        </Box>
    )

}

export default ProfileSelector