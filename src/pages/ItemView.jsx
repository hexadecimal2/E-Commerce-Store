import ItemDisplay from "../components/ItemDisplay";
import Sidebag from "../components/Sidebag"
import {Col, Row, Container} from 'react-bootstrap';


const ItemView = () => {

    return(
    <>
        <Container fluid={true}>

        <Row>

            <Col md={3} style={{border: '1px solid green'}}>
            
            </Col>

            <Col md={6} style={{border: '1px solid green'}}>
            <ItemDisplay/>
            </Col>

            <Col md={3} style={{border: '1px solid green'}}>
            <Sidebag/>
            </Col>

        </Row>

      </Container></>
    );

}

export default ItemView;