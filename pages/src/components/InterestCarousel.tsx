/* eslint-disable react/jsx-key */
import { Badge, Container, Text } from "@nextui-org/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface InterestCarousel {
  tags: string[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 15,
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

const InterestCarousel = ({ tags }: InterestCarousel) => {
  const badges = tags.map((e) => <Badge color={"success"}>{e}</Badge>);
  return (
    <Container>
      <Text
        h1
        size={34}
        color="success"
        css={{ marginBottom: -2, paddingLeft: 5 }}
      >
        PARTICIPATE
      </Text>
      <Container
        css={{
          border: 4,
          background: "rgba(245,245,245,0.9)",
          borderColor: "$success",
          borderStyle: "solid",
          borderRadius: 15,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {badges}
      </Container>
    </Container>
  );
};

export default InterestCarousel;
