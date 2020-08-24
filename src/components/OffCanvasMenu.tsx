import React, { useEffect, FC } from "react"
import styled from "styled-components"
import { Box, Text, Button } from "theme-ui"

const Overlay: FC<any> = styled(Box)`
  height: ${(props: any) => (props.showMenu ? "100%" : `0`)};
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: hsl(208deg 89% 4% / 80%);
  overflow-x: hidden;
  z-index: 998;
  backdrop-filter: blur(20px);
`

const Content = styled(Box)`
  position: relative;
  top: 25%;
  width: 100%;
   
   padding: 2rem 8rem 
}
`

const OffCanvasMenu = ({ showMenu }: any) => {
  //   const
  //   useEffect(() => {
  //       document.style.body =
  //   }, [])

  return (
    <Overlay showMenu={showMenu}>
      <Content>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <Box>
            <Text sx={{ fontSize: 3, fontWeight: 500, mb: 3, color: "white" }}>
              About Us
            </Text>
            <Text sx={{ fontSize: 1, color: "white", lineHeight: 1.5 }}>
              Synspective's mission is to evolve the world by upgrading people’s
              vision through data generation and understanding.
            </Text>
            <Button
              mt="6"
              sx={{
                background: "none",
                border: "2px solid #fff",
                py: 3,
                px: 4,
              }}
            >
              View Tutorial →
            </Button>
          </Box>
          <Box
            sx={{
              justifySelf: "end",
            }}
          >
            <Text
              sx={{
                fontSize: 1,
                fontWeight: 500,
                mb: 3,
                color: "white",
              }}
            >
              Quick Links
            </Text>
          </Box>
        </Box>
      </Content>

      <Box
        sx={{
          position: "absolute",
          bottom: "2rem",
          color: "white",
          px: "8rem",
          width: "calc(100% - 16rem)",
          display: "block",
        }}
      >
        <Box sx={{ width: "100%", margin: "0 auto" }}></Box>
        <Text>© 2020 Synspective</Text>
      </Box>
    </Overlay>
  )
}

export default OffCanvasMenu
