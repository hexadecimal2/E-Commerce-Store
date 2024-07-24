import ItemDisplay from "../components/ItemDisplay";
import Sidebag from "../components/Sidebag"
import {Col, Row, Container} from 'react-bootstrap';


const ItemView = () => {

    return(
    <>
        <Container fluid={true}>

        <Row>

            <Col md={2}>
            
            </Col>

            <Col md={7}>
            <ItemDisplay/>
            </Col>

            <Col md={3}>
            <Sidebag/>
            </Col>

        </Row>

      </Container></>
    );

}

export default ItemView;