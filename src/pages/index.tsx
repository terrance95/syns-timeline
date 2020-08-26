import React, { useState } from "react"
import Layout from "../components/layout"
import { Box, Text, Image } from "theme-ui"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import GridView from "../components/GridView"
import ListView from "../components/ListView"
import AnimatedCursor from "react-animated-cursor"
import { grid } from "react-icons-kit/entypo/grid"

import "react-multi-carousel/lib/styles.css"
import TImelineSlider from "../components/Slider"

import styled from "styled-components"

const EnglishButton = styled(Box)`
  color: ${(props: any) =>
    props.language === "english" ? `white` : `hsl(0deg 0% 100% / 33%)`};
  cursor: pointer;
`

const JapaneseButton = styled(Box)`
  color: ${(props: any) =>
    props.language === "japanese" ? `white` : `hsl(0deg 0% 100% / 33%)`};
  cursor: pointer;
`
const IndexPage = props => {
  const [language, setLanguage] = useState("english")
  return (
    <Layout>
      <Header
        language={language}
        languageHandler={
          <>
            <EnglishButton
              onClick={() => setLanguage("english")}
              language={language}
              sx={{
                fontSize: [".750rem", ".875rem"],
              }}
            >
              EN
            </EnglishButton>
            <Box
              sx={{
                mx: 2,
                color: "hsl(0deg 0% 100% / 33%)",
                fontSize: [".750rem", ".875rem"],
              }}
            >
              /
            </Box>
            <JapaneseButton
              onClick={() => setLanguage("japanese")}
              language={language}
              sx={{
                fontSize: [".750rem", ".875rem"],
              }}
            >
              JP
            </JapaneseButton>
          </>
        }
      />
      <Hero language={language} />

      <Box>{/* <TImelineSlider language={language} /> */}</Box>
    </Layout>
  )
}

export default IndexPage
