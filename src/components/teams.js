import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
const teamsData = [
    {
        id: 1,
        image: require('../assets/images/team1.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Gabriel Hart',
        designation: 'CEO',
        description: "Leadership is not about being in charge. It's about taking care of those in your charge."
    },
    {
        id: 2,
        image: require('../assets/images/team2.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'David Antony',
        designation: 'Manager',
        description: "Management is doing things right; leadership is doing the right things."
    },
    {
        id: 3,
        image: require('../assets/images/team3.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Nicholas Perry',
        designation: 'UX Designer',
        description: "Design is not just what it looks like and feels like. Design is how it works."
    },
    {
        id: 4,
        image: require('../assets/images/team4.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Sarah Wills',
        designation: 'Developer',
        description: "Code is like humor. When you have to explain it, it’s bad."
    },
    {
        id: 5,
        image: require('../assets/images/team5.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Sophia Pitt',
        designation: 'Developer',
        description: "First, solve the problem. Then, write the code." 
    },
    {
        id: 6,
        image: require('../assets/images/team6.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Taylor Lopez',
        designation: 'Developer',
        description: "Programs must be written for people to read, and only incidentally for machines to execute."
    },
    {
        id: 7,
        image: require('../assets/images/team7.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'Ryan Giggs',
        designation: 'Content Writer',
        description: "Good content isn’t about good storytelling. It’s about telling a true story well."
    },
    {
        id: 8,
        image: require('../assets/images/team8.jpg'),
        fbLink: 'https://www.facebook.com',
        twitterLink: 'https://www.twitter.com',
        linkedinLink: 'https://www.linkedin.com',
        name: 'David Smith',
        designation: 'SEO Expert',
        description: "The best place to hide a dead body is page two of Google search results." 
    }
]
export default function AppTeams() {
    return (
        <section id="teams" className="block teams-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our Teams</h2>
                    <div className="subtitle">Some of our experts.</div>
                </div>
                <Row>
                    {
                        teamsData.map(teams => {
                            return (
                                <Col sm={3} key={teams.id}>
                                    <div className='image'>
                                        <Image src={teams.image}/>

                                        <div className='overlay'>
                                            <div className='socials'>
                                                <uL>
                                                    <li><a href={teams.fbLink}><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href={teams.twitterLink}><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href={teams.linkedinLink}><i class="fab fa-linkedin-in"></i></a></li>
                                                </uL>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <h3>{teams.name}</h3>
                                        <span className='designation'>{teams.designation}</span>
                                        <p>{teams.description}</p>
                                    </div>
                                </Col>

                            )
                        })
                    }

                </Row>
            </Container>
        </section>
    );
}