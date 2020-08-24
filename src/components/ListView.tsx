import * as React from "react"
import styled from "styled-components"
import { Box, Text, Image, AspectImage } from "theme-ui"
import Reveal from "react-reveal/Reveal"
import Zoom from "react-reveal/Zoom"

const tokyoSkyline = require("../images/tokyo-skyline.jpg")
const nasaEarth = require("../images/nasa-earth.jpg")
const singaporePhoto = require("../images/singapore.jpg")

const Shadow = styled(Image)`
  /* box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07); */
  border-radius: 0.5rem;
  /* background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.2455357142857143) 50%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${nasaEarth});
  background-size: cover;
  background-position: top; */
  height: 1200px;
`

const Container = styled(Box)`
  /* transition: width 0.7s 0s ease; */

  &:hover {
    /* top: -20px; */
  }
`

const GridItemTwo = ({ heading, description, short, image }) => {
  return (
    <Container
      sx={{ position: "relative", transition: "top ease 0.5s", mt: 6 }}
    >
      <Box sx={{ height: "100%", width: "100%", borderRadius: ".5rem" }}>
        <Box sx={{ position: "absolute", bottom: "4rem", left: "4rem" }}>
          <Text
            as="span"
            sx={{
              fontSize: 1,
              fontFamily: "IBM Plex Mono",
              fontWeight: 400,
              color: "white",
            }}
          >
            {short}
          </Text>
          <Text
            as="h1"
            sx={{
              color: "white",
              fontSize: [2, "2.0rem"],
              fontWeight: 600,
              mt: 3,
              width: "40rem",
            }}
          >
            {heading}
          </Text>
          <Text
            sx={{
              mt: 2,
              fontSize: 2,
              color: "white",
              width: "38rem",
            }}
          >
            {description}
          </Text>
        </Box>
      </Box>
      <Box sx={{ gridArea: "1 / 3 / 2 / 4" }}>
        <Box>
          <Shadow
            src={
              image
                ? image
                : "https://via.placeholder.com/2000x600.png?text=%20"
            }
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Container>
  )
}

const ListView = () => {
  return (
    <Box sx={{ px: "12rem", pb: "6rem", maxWidth: "2800px", margin: "0 auto" }}>
      <Zoom cascade>
        <GridItemTwo
          heading="Synspective SG Pte. Ltd. was established as a local subsidiary in Singapore"
          description="From past to present: discover the most pivotal moments in story of our company.
    "
          image={singaporePhoto}
          short="One"
        />
        <GridItemTwo
          heading="Cumulative amount of funds raised through a third-party allocation of new shares to ¥10.9 billion"
          description="From past to present: discover the most pivotal moments in story of our company.
    "
          short="One"
        />
        <GridItemTwo
          heading="Euroconsult Award For Strategic Transaction for EO Business"
          description="From past to present: discover the most pivotal moments in story of our company.
    "
          short="One"
        />
        <GridItemTwo
          heading="Signed an agreement with Kongsberg Satellite Service (KSAT) for the use of ground station services"
          description="From past to present: discover the most pivotal moments in story of our company.
    "
          short="One"
        />
        <GridItemTwo
          heading="Synspective SG Pte. Ltd. was established as a local subsidiary in Singapore"
          description="From past to present: discover the most pivotal moments in story of our company.
    "
          short="February 22, 2020"
        />
      </Zoom>
    </Box>
  )
}

export default ListView
