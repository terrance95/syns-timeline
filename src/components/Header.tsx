import React, { useState } from "react"
import { Box, Image, Text, Link } from "theme-ui"

import OffCanvasMenu from "./OffCanvasMenu"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: rgb(255 255 255 / 40%);
  text-decoration: none;
  :hover {
    color: white;
    transition: 0.3s ease-in;
  }
`

const logo = require("../images/logo-white.svg") as any

const Header = ({ language, languageHandler }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Box as="header">
      <Box
        py="2rem"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          justifyContent: "space-between",
          position: "relative",
          width: ["calc(100% - 3rem)", "calc(100% - 16rem)"],
          background: "none",
          zIndex: 9999,
          margin: "0 auto",
          // borderBottom: "1px solid hsl(0deg 0% 100% / 11%)",
        }}
      >
        <Image
          src={logo}
          width="156px"
          height="auto"
          sx={{ objectFit: "cover" }}
        />

        <Box sx={{ justifySelf: "flex-end", alignSelf: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column-reverse", "row"],
              alignItems: ["flex-end", "center"],
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mr: [0, 4],
                position: ["absolute", "static"],
                top: 70,
              }}
            >
              {languageHandler}
            </Box>
            <StyledLink
              sx={{
                color: "white",
                fontWeight: 500,
                fontSize: [".75rem", "1rem"],
              }}
              href="https://drive.google.com/file/d/1pk4aDvtOJ33k-eoTViprzcxp1o9Z7wEH/view?usp=sharing"
            >
              {language === "english" ? (
                <>Learn About Our SAR Technologies ›</>
              ) : (
                <>SAR 衛星について</>
              )}
            </StyledLink>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
