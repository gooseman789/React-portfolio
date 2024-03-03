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
                        <Card.Img src="../../assets/LaunchPad.png"></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button href="https://launch-pad-4e24e93f1929.herokuapp.com/">Deployed App</Button>
                            <Button  href="https://github.com/andrewross4224/Launchpad">GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <Card>
                        <Card.Title>Bookshelf</Card.Title>
                        <Card.Img></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button href="https://obscure-brook-37683-7269a533acb8.herokuapp.com/profile">Deployed App</Button>
                            <Button href="https://github.com/AFitzgerald95/Group-9-Project-2">GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row> */}
            <Row>
                <Col>
                    <Card>
                        <Card.Title>My Anime List</Card.Title>
                        <Card.Img src="../../assets/AnimeList.png"></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button href="https://github.com/gooseman789/Project-1">Deployed App</Button>
                            <Button href="https://gooseman789.github.io/Project-1/">GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>E-commerce</Card.Title>
                        <Card.Img src="../../assets/ECommerce.png"></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button href="https://github.com/gooseman789/E-commerce">GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>Social Network</Card.Title>
                        <Card.Img src="../../assets/SocialNetwork.png"></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button href="https://github.com/gooseman789/Social-Network">GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Title>Quiz Game</Card.Title>
                        <Card.Img src="../../assets/Quiz.png"></Card.Img>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <ButtonGroup>
                            <Button href="https://gooseman789.github.io/Quiz/">Deployed App</Button>
                            <Button href="https://github.com/gooseman789/Quiz">GitHub</Button>
                        </ButtonGroup>
                        <Card.Text></Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}