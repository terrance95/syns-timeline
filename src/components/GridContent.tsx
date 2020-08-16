import * as React from "react"
import { Box, Image, Text } from "theme-ui"

const GridContent = () => {
  return (
    <Box>
      <Box sx={{ p: 4 }}>1</Box>
      <Box sx={{ p: 5 }}>
        <Box pb={4}>
          <Text as="h4" sx={{ fontSize: "2rem", pb: 3 }}>
            StrixX Successfully Launches Into Orbit
          </Text>
          <Text as="p">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical.
          </Text>
        </Box>
        {/* <Image
        src="https://picsum.photos/seed/picsum/1920/1080"
        sx={{ borderRadius: ".5rem" }}
      /> */}
        <Text
          sx={{
            fontFamily: `'IBM Plex Mono', monospace`,
            pt: 2,
            fontSize: 0,
          }}
        >
          May 24th, 2019
        </Text>
      </Box>
    </Box>
  )
}

export default GridContent
