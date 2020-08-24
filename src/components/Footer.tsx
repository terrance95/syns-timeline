import * as React from "react"
import { Box, Text, Image } from "theme-ui"
import styled from "styled-components"

const logo = require("../images/logo.svg") as any

const Grid = styled(Box)`
  padding-top: 12rem;
  display: grid;
  grid-template-columns: 60% 1fr 1fr;
  grid-column-gap: 6rem;
  padding: 12rem 12rem;
`

const Container = styled(Box)`
  background: #f9f9f9;
`

const Footer = () => {
  return (
    // <Box
    //   as="footer"
    //   bg="muted"
    //   py={6}
    //   sx={{
    //     display: "grid",
    //     placeItems: "center",
    //   }}
    // >
    //   <Image src={stackedLogo} width="140px" pb="2rem" />
    //   <Text
    //     as="p"
    //     pb="3rem"
    //     sx={{
    //       fontSize: 1,
    //       width: "608px",
    //       textAlign: "center",
    //       lineHeight: "1.5",
    //       color: "text",
    //     }}
    //   >
    //     Evolve our world by upgrading people’s vision with new data generation
    //     and understanding.
    //   </Text>

    //   <Box as="a" color="accent">
    //     Visit Our Company's Website
    //   </Box>
    // </Box>
    <Container>
      <Grid>
        <div></div>
        <div></div>
        <div></div>
      </Grid>
    </Container>
  )
}

export default Footer
