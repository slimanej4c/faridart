import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;
  .carousel .control-arrow {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    z-index: 2;
    background-color: green;
    border: 1px solid lightgreen;
    padding: 10px;
    border-radius: 5px;
  }
  .carousel .control-prev {
    left: 0;
  }
  .carousel .control-next {
    right: 0;
  }
  .carousel .thumbs-wrapper {
    display: none;
  }
  .carousel .slide {
    display: flex;
    justify-content: center;
  }
`;

const Slider = () => {
  return (
    <SliderWrapper>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000} stopOnHover={false}>
        <div>
          <h1>img1</h1>
          <Image src={"/static/images/img1.png"} alt="img_1" width={450} height={450} />
        </div>
        <div>
          <Image src={"/static/images/img2.png"}  alt="img_2" width={100} height={200}  />
        </div>
        <div>
          <Image src={"/static/images/img1.png"} alt="img_3" width={450} height={450}  />
        </div>
      </Carousel>
    </SliderWrapper>
  );
};

export default Slider;

