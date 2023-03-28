import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  .carousel .control-arrow {
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Slider = () => {
  return (
    <SliderWrapper>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000} stopOnHover={false}>
        <div>
          <h1>img1</h1>
          <Image src="/img1.png" alt="img1" width={450} height={450} />
        </div>
        <div>
          <Image src="/img2.png" alt="img2"  width={100} height={200}  />
        </div>
        <div>
          <Image src="/img1.png" alt="img2"  width={450} height={450}  />
        </div>
      </Carousel>
    </SliderWrapper>
  );
};

export default Slider;
