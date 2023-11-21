import { useState } from "react"
import {vData} from '../data.js'
import {Container, Row, Col, Card} from 'react-bootstrap';

function GalleryList(){

    //const [myData,setMyData] = useState(vData)
    const [myData] = useState(vData)
    return(
        <Container className='mb-2 mb-md-5'>
            <Row className="gap-4">
                {
                    myData.map(function(item,i){
                        return <CardView product={myData[i]}/>
                    })
                }
            </Row>
    </Container>
    )
}

function CardView({product}){
    return(
       <Col sm={6} md={3} className='mb-2'>
            <Card className='cardView'> 
              <Card.Img variant="top" src={`./img/${product.img}`} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                {product.content}
                </Card.Text>
              </Card.Body>
            </Card>                 
        </Col>
    )
  }

  export  default GalleryList