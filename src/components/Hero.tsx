import * as React from "react"
import styled from "styled-components"
import { Box, Text } from "theme-ui"
import Fade from "react-reveal/Fade"
import TimelineSlider from "./Slider"

const backgroundVideo = require("../images/earth.mp4")
const backgroundVideoWEBM = require("../images/earth.webm")
const fallbackImage = require("../images/earth.jpg")

const HeroVideo = styled.video`
  min-width: 100%;
  min-height: 1000px;

  height: 100vh;
  width: 100%;
  object-fit: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  background-image: url(${fallbackImage});
  background-size: cover;
`

const VideoOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: hsl(209 96% 4% / 0.75);
  z-index: 1;
  min-height: 1000px;
`

const Notification = styled(Box)`
  width: 400px;
  height: 300px;
  background: white;
`

const Hero = ({ language = "english", languageHandler }) => {
  return (
    <Box
      as="section"
      sx={{
        mt: ["-94px", "-98px"],
        minHeight: "1000px",
        background: "#010b13",
      }}
    >
      <VideoOverlay>
        <Box
          sx={{
            margin: "0 auto",
            position: "absolute",
            bottom: ["59%", "45%"],
          }}
        >
          <Box
            sx={{
              paddingLeft: [4, "8rem", "8rem"],
            }}
          >
            <Fade top cascade>
              <Text
                as="h1"
                sx={{
                  color: "white",
                  fontSize: [2, 5, 5],
                  fontWeight: 400,
                  mt: 3,
                  display: "block",
                }}
              >
                {language === "english" ? (
                  <>
                    Explore Our Synspective
                    <br /> Company Milestones
                  </>
                ) : (
                  <>
                    Synspective <br /> 成長の軌跡
                  </>
                )}
              </Text>
              <Text
                sx={{
                  mt: [4, 5],
                  fontSize: ["1rem", 1],
                  color: "white",
                  fontWeight: 500,
                  letterSpacing: ".025rem",
                }}
              >
                {language === "english" ? (
                  <> From Past To Present</>
                ) : (
                  <>創業からの歩み</>
                )}
              </Text>
              <Text
                sx={{
                  mt: 3,
                  fontSize: ["1rem", , 1],
                  color: "hsl(180 7% 50% / 1)",
                  maxWidth: "20rem",
                  lineHeight: 1.5,
                }}
              >
                {language === "english" ? (
                  <>
                    Discover the most pivotal moments in the history of our
                    company.
                  </>
                ) : (
                  <>
                    「持続可能な未来を」宇宙産業
                    <br /> を通して叶える我々の歴史
                  </>
                )}
              </Text>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {languageHandler}
              </Box>
            </Fade>
          </Box>
        </Box>
        <TimelineSlider />
        {/* <Box
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
        </Box> */}
      </VideoOverlay>
      <HeroVideo autoPlay muted loop poster={fallbackImage}>
        <source src={backgroundVideo} type="video/mp4" />
        <source src={backgroundVideoWEBM} type="video/webm" />
      </HeroVideo>
    </Box>
  )
}

export default Hero
