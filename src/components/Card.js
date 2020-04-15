import React , { Component } from 'react'
import { Card } from 'react-bootstrap'
import Formik from './Formik'

class CardForm extends Component{
    render(){
        return(
            <Card>
            <Card.Img
                style={{
                    height:"100px",
                    width:"300px"
                }} 
                variant="top" 
                src={`https://darunnajah.com/wp-content/uploads/2019/08/Ulama-dibalik-kemerdekaan-indonesia.jpeg}`} 
            />
            <Card.Body>
                <Card.Text>
                    <Formik/>
                </Card.Text>
            </Card.Body>
            </Card>
        )
    }
}

export default CardForm;