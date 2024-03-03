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
                        Hello there! My name is John Gotheridge.  I am currently a Full Stack Developer, but I have had a rather interesting history in terms of career and education.  Despite being born and raised just outside of Chicago, Illinois, I moved out to Orlando to attend the University of Central Florida.  
                        After studying engineering for 2 years, I decided that I wanted to change my trajectory.  I switched my major to Interdisciplinary studies.  This essentially let me receive 75% of two different majors and a minor.  I truly wanted to learn about how humans think.  
                        I pushed hard to study my new majors of Pyschology and Philosophy and minor in Education.  After graduating in 2018, I moved back to Chicagoland to pursue two different careers.  I started working as a teaching assistant in a behavioral special needs school while spending my weekends and summers working as a groundskeeper for a golf course. 
                        Once I had a couple of years of experience under my belt, I moved back to Orlando to work at the Lake None Golf and Country Club.  The goal was to travel down that path as a career.  While I loved that career field, I realized I couldn't keep up with the career physically anymore after 6 years in the field.  I decided that I would return back towards the dream that I had originally in college.
                        I want to create different products.  I want to solve issues to make products function correctly.  I want to be a Full Stack developer or a software engineer.  In an attempt to move closer to this goal, I left groundskeeping and went back into being a teaching assistant.  I then found my way to becoming a billing analyst for RipplePoint.  This has given me valueable experience working with databases, data analysis, and data entry.
                        While working for RipplePoint, I decided to sign up for a bootcamp through EdX and the University of Central Florida for full stack development.  I have graduated from this course, but I am continuing my learning in these fields and broadening my knowledge into Python, Java, and C# to start.  
                    </p>
                </Col>
            </Row>
        </Container>
    )
}