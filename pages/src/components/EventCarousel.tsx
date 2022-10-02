import { Container, Text } from "@nextui-org/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface EventCarouselInfo {
  events: JSX.Element[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const EventCarousel = ({ events }: EventCarouselInfo) => {
  return (
    <Container>
      <Text
        h1
        size={34}
        color="$sapBlue"
        css={{ marginBottom: -2, paddingLeft: 5 }}
      >
        PARTICIPATE
      </Text>
      <Container
        css={{
          border: 4,
          background: "rgba(245,245,245,0.9)",
          borderColor: "$sapBlue",
          borderStyle: "solid",
          borderRadius: 15,
        }}
      >
        <Container
          css={{
            position: "relative",
            padding: 0,
            width: "90%",
            ".react-multi-carousel-list": {
              position: "unset",
              ".react-multiple-carousel__arrow": {
                position: "absolute",
              },
              ".react-multiple-carousel__arrow--left": {
                left: "calc(-5.5% + 1px)",
              },
              ".react-multiple-carousel__arrow--right": {
                right: "calc(-5.5% + 1px)",
              },
            },
          }}
        >
          <Carousel responsive={responsive} infinite swipeable draggable>
            {events}
          </Carousel>
        </Container>
      </Container>
    </Container>
  );
};

export default EventCarousel;
