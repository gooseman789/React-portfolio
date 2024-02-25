import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Aboutme() {
    return (
        <Container fluid='xs' className='aboutMe'>
            <Row>
                <Col md={12} className='mb-4'>
                    <h1></h1>
                </Col>
            </Row>
            <Row>
                <Col md={12} lg={6}>    </Col>
                <Col md={12} lg={6}>
                    <p className=''>
                        Hello there! My name is John Gotheridge and I am a full stack web developer.  
                    </p>
                </Col>
            </Row>
        </Container>
    )
}