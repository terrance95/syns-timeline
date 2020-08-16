import * as React from "react"
import { Box, Text, Image } from "theme-ui"
const stackedLogo = require("../images/logo_stacked.png") as any

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="muted"
      py={6}
      sx={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <Image src={stackedLogo} width="140px" pb="2rem" />
      <Text
        as="p"
        pb="3rem"
        sx={{
          fontSize: 1,
          width: "608px",
          textAlign: "center",
          lineHeight: "1.5",
          color: "text",
        }}
      >
        Evolve our world by upgrading people’s vision with new data generation
        and understanding.
      </Text>

      <Box as="a" color="accent">
        Visit Our Company's Website
      </Box>
    </Box>
  )
}

export default Footer
