import React from "react"
import Layout from "../components/layout"
import { Box, Image, Text } from "theme-ui"

const logo = require("../images/logo.png") as any
import { useColorMode } from "theme-ui"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import LayoutSwitch from "../components/LayoutSwitch"
import GridView from "../components/GridView"
import styled from "styled-components"

const Description = styled(Box)`
  display: flex;
  align-items: center;
  width: 56rem;
  height: 320px;
  borderradius: 1rem;

  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -28.9vw;
    width: 50vw;
    height: 100%;
    background-color: #f1f1f1;
  }
`

const IndexPage = props => {
  return (
    <Layout>
      <Header />
      <Hero />
      {/* <Box
        sx={{
          margin: "0 auto",
          maxWidth: "1600px",
          marginTop: "-160px",
          zIndex: 1,
          position: "relative",
        }}
      >
        <Description
          bg="muted"
          sx={{
            px: 6,
          }}
        >
          <Box>
            <Text sx={{ fontSize: 1, lineHeight: 1.5, pb: "2rem" }}>
              Curabitur a posuere nulla. Suspendisse nisl purus, viverra ut
              condimentum non, convallis sed enim. Praesent tempor dolor varius,
              mollis est a, hendrerit mauris. Aenean et eros ut sem dignissim
              hendrerit accumsan cursus ex.
            </Text>
            <LayoutSwitch />
          </Box>
        </Description>
      </Box> */}
      {/* <Box>
        <Box
          sx={{
            pl: "4rem",
            textAlign: "right",
            display: "inline-block",
            transform: "rotate(-90deg)",
          }}
        >
          <Text sx={{ fontSize: 1, fontWeight: 700 }}>Last Updated</Text>
          <Box>August 2020</Box>
        </Box>
      </Box> */}
      <Box pb={5}>
        <Text pl="8rem" pt="12rem" pb="1rem" sx={{ fontSize: 5 }}>
          Milestones
        </Text>
        <Text sx={{ fontSize: 3, lineHeight: 1.5, pb: "2rem" }} pl="8rem">
          Suspendisse nisl purus, viverra ut condimentum non, convallis sed
          enim.
        </Text>
        {/* <LayoutSwitch /> */}
      </Box>
      <Box>
        <GridView
          sx={{
            py: 6,
          }}
        />
      </Box>
      {/* <Footer /> */}
    </Layout>
  )
}

export default IndexPage
