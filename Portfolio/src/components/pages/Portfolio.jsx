import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Portfolio() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>Launch Pad</Card.Title>
                        <Card.Img></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button>Deployed App</Button>
                            <Button>GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>Bookshelf</Card.Title>
                        <Card.Img></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button>Deployed App</Button>
                            <Button>GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>My Anime List</Card.Title>
                        <Card.Img></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button>Deployed App</Button>
                            <Button>GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>E-commerce</Card.Title>
                        <Card.Img></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button>GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>Social Network</Card.Title>
                        <Card.Img></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button>GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>Quiz Game</Card.Title>
                        <Card.Img></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button>Deployed App</Button>
                            <Button>GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}