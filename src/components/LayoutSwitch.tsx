import * as React from "react"
import { Box, Text } from "theme-ui"
import { Grid, List } from "react-feather"

const LayoutSwitch = () => {
  return (
    <Box sx={{ display: "inline-block" }}>
      <Box
        bg="pill"
        sx={{
          borderRadius: "3rem",
          height: "2.5rem",
          display: "flex",
          alignContent: "center",
          px: "1rem",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Grid />
          <Text sx={{ pl: "1rem" }}>Grid</Text>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            pl: "2rem",
          }}
        >
          <List />
          <Text sx={{ pl: "1rem" }}>List</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default LayoutSwitch
