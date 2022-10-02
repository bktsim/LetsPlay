import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "@nextui-org/react";

interface EventCarouselInfo {
  events: JSX.Element[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 2048, min: 1200 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ItemCarousel = ({ events }: EventCarouselInfo) => {
  return (
    <Container>
      <Carousel responsive={responsive} ssr swipeable transitionDuration={500}>
        {events}
      </Carousel>
    </Container>
  );
};

export default ItemCarousel;
