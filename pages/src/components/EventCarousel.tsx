import { Container } from "@nextui-org/react";

interface EventCarouselInfo {
  events: JSX.Element[];
}

const ItemCarousel = ({ events }: EventCarouselInfo) => {
  return (
    <Container>
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </Container>
  );
};

export default ItemCarousel;
