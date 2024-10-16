import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'John Wills',
    description: "Working with Corporate has been a game-changer for our business. The level of professionalism, attention to detail, and the quality of the work delivered exceeded our expectations. We couldn't be happier with the results and look forward to future collaborations!",
    designation: 'Manager'
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    description: 'Corporate provided exactly what we needed and more. Their ability to understand our vision and deliver a product that fit our needs perfectly was impressive. The process was seamless, and the team was responsive and flexible throughout.',
    designation: 'Accountant'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'From start to finish, Corporate was fantastic. They not only provided great solutions but also helped us navigate challenges with ease. Their dedication to our project was evident, and the final product was beyond what we imagined. We highly recommend them!',
    designation: 'CEO'
  }
]

export default function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}
