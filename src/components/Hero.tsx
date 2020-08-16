import * as React from "react"
import styled from "styled-components"
import { Box, Text } from "theme-ui"
import VideoCover from "react-video-cover"

const heroImage = require("../images/earth.jpg")
const backgroundVideo = require("../images/earth-2.mp4")

const Background = styled(Box)`
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(${heroImage}) no-repeat center;
  height: calc(100vh - 128px);
  max-height: 1000px;
  display: flex;
  align-items: center;
  background-size: cover;
`

const HeroVideo = styled.video`
  min-width: 100%;
  min-height: 100%;
  height: 98vh;
  width: 100%;
  object-fit: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
`

const VideoOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 98vh;
  background-color: hsl(209 96% 4% / 0.75);
  z-index: 1;
  display: flex;
  align-items: center;
`

const Hero = () => {
  return (
    <Box as="section" sx={{ height: "98vh", mt: "-92px" }}>
      <VideoOverlay>
        <Box
          sx={{
            paddingLeft: 5,
            maxWidth: "1600px",
            width: "100%",
            margin: "0 auto",
            position: "absolute",
            top: "40%",
          }}
        >
          <Box
            sx={{
              paddingLeft: 5,
            }}
          >
            <Text
              as="span"
              color="accent"
              sx={{
                fontSize: 1,
                fontFamily: "IBM Plex Mono",
                fontWeight: 300,
              }}
            >
              #CabotProject
            </Text>
            <Text
              as="h1"
              sx={{
                color: "white",
                fontSize: [5, "4.768rem"],
                fontWeight: 400,
                mt: 4,
              }}
            >
              Explore Our Synspective
              <br /> Company Milestones
            </Text>
            <Text sx={{ mt: 4, fontSize: 3, color: "hsl(180deg 16% 50%)" }}>
              From Past to Present: A Timeline of Our Accomplishments
            </Text>
          </Box>
        </Box>
        <Box
          as="span"
          pl="8rem"
          sx={{
            position: "absolute",
            bottom: "2rem",
            color: "rgb(255 255 255 / 50%)",
            fontFamily: "IBM Plex Mono",
            textTransform: "uppercase",
            letterSpacing: "0.125rem",
            fontSize: "0.875rem",
          }}
        >
          Scroll down
        </Box>
      </VideoOverlay>
      <HeroVideo autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </HeroVideo>
    </Box>
  )
}

export default Hero
