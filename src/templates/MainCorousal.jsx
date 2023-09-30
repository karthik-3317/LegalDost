import Carousel from 'react-bootstrap/Carousel';
import hammer from '../court-hammer.jpg';
import sign from '../sign.jpg';
import si from '../si.jpg';


function MainCorousal() {
  return (
    <Carousel style={{ width:"100%",maxHeight:"70vh", margin: '0 auto' }}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={hammer} style={{ width:"100%",maxHeight:"70vh", margin: '0 auto' }} alt="" />
        <Carousel.Caption>
          <h3>Courts of Law</h3>
          <p>Learn about the various types of courts and their functions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={sign} style={{ width:"100%",maxHeight:"70vh", margin: '0 auto' }} alt="" />
        <Carousel.Caption>
          <h3>Legal Procedures</h3>
          <p>Delve into the step-by-step processes involved in legal matters</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={si} style={{ width:"100%",maxHeight:"70vh", margin: '0 auto' }} alt="" />
        <Carousel.Caption>
          <h3>Legal Precedents</h3>
          <p>
            Examine the significance of legal precedents in decision-making
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCorousal;