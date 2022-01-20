import React from "react";
import { useSpring, animated } from "@react-spring/web";
import styled from "styled-components";
import "./styles.css";

export default function App() {
  const [flipped, setFlipped] = React.useState(false);
  const styles = useSpring({
    opacity: flipped ? 1 : 0,
    rotateY: flipped ? "180deg" : "0deg"
  });
  return (
    <div
      className="App"
      style={{
        perspective: "500px"
      }}
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <Card style={styles} />
      <BlueCard
        style={{
          opacity: styles.opacity.to((o) => 1 - o),
          rotateY: styles.rotateY
        }}
      />
    </div>
  );
}

const Card = styled(animated.div)({
  position: "absolute",
  width: 500,
  height: 300,
  backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
  borderRadius: 20
});

const BlueCard = styled(animated.div)({
  position: "absolute",
  width: 500,
  height: 300,
  backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
  borderRadius: 20
});
