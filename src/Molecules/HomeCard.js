/* eslint-disable no-unused-vars */
import { Card, CardBody,Heading,Stack,Text,Image,Divider, Box, Flex, IconButton } from '@chakra-ui/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import DeleteButton from '../Atoms/DeleteButton'
import { hospService } from '../Services/HospService'
import './HomeCard.css'


export const HomeCard = (props) => {

  const location = useLocation()
  const navigate = useNavigate()

  const deleteFunc = async () => {
    await hospService.deleteLodging(props.lodging.id)
    props.updateFunc()
  }

  const navigateToDetail = () => {
    if(location.state){      
      hospService.saveClickLog({
        idUsuario: location.state.id,
        idHospedaje: props.lodging.id,
      })
      navigate(`/detail/${props.lodging.id}`,{state:{id: location.state.id}})
    }else{
      navigate(`/detail/${props.lodging.id}`)
    }
    
  }

  return (    
    
    <Card className='CardContainer' data-testid = {"mainCard_" + props.lodging.id} >

        <Flex data-testid={"homeCard_" + props.lodging.id} onClick={navigateToDetail} className='imageContainer-home-card'>
          <Image src={props.lodging.urlImagen} alt='Green double couch with wooden legs' className='imagenHome'/>
        </Flex>
        
        <CardBody className='cardBody'>
          
          <Box className='textContainer'>

            <Heading fontSize={'20px'} className='heading'>{props.lodging.nombre} </Heading>
            <Text noOfLines={2} className='text'>
            {props.lodging.descripcion}
            </Text>

            <Flex className='card-section'>
              <Text className='text'><b>Ubicacion:</b> {props.lodging.ubicacion.country + "-" + props.lodging.ubicacion.city}</Text>
            </Flex>

            <Flex className='costos'>
              <Text className='text'>
                <b>Costo por Noche:</b> {props.lodging.costoNoche}
              </Text>
              { props.reserved && <Text className='text'><b>Costo total:</b> {props.lodging.costoTotal}</Text>}
              { props.isOwner && <DeleteButton dataTestId={"deleteButton_" + props.lodging.id} function={deleteFunc}></DeleteButton>}
            </Flex>

          </Box>
        </CardBody>
      </Card>
  )
}

HomeCard.propTypes = {
  lodging: PropTypes.object.isRequired,
  isOwner: PropTypes.bool,
  updateFunc: PropTypes.func.isRequired,
  reserved: PropTypes.bool.isRequired
  }
  
  export default HomeCard