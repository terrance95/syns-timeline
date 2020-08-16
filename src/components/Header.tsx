import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Image, Text } from "theme-ui"
import { useColorMode } from "theme-ui"
const logo = require("../images/logo-white.svg") as any

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Box as="header">
      <Box
        py="2rem"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "space-between",
          position: "relative",
          width: "calc(100% - 16rem)",
          background: "none",
          zIndex: 9999,
          margin: "0 auto",
          borderBottom: "1px solid hsl(0deg 0% 100% / 11%)",
        }}
      >
        <Image
          src={logo}
          width="156px"
          height="auto"
          sx={{ objectFit: "cover" }}
        />
        {/* <button
        onClick={e => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </button> */}
      </Box>
    </Box>
  )
}

export default Header
