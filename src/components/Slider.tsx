import * as React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import styled from "styled-components"
import { Box, Text, Link } from "theme-ui"
import { motion } from "framer-motion"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2400 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 2400, min: 1400 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1400, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
}

const CardContainer = styled(Box)`
  background: hsl(208deg 89% 4%);
  margin-right: 2rem;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 0.5rem;
`
const Card = ({ title, date, href, language }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <CardContainer
        sx={{
          userSelect: "none",
          minHeight: ["175px", "  272px "],
          padding: ["1rem", "2rem"],
        }}
      >
        <Text
          as="span"
          sx={{
            fontSize: 0,
            fontFamily: "IBM Plex Mono",
            fontWeight: 400,
            color: "white",
            pb: ["1rem", "1.5rem"],
            display: "block",
            userSelect: "none",
          }}
        >
          {date}
        </Text>
        <Text
          sx={{
            fontSize: ["1rem", "1rem", "1.20rem"],
            color: "white",
            fontWeight: 500,
            letterSpacing: ".025rem",
            lineHeight: 1.5,
            userSelect: "none",
          }}
        >
          {title}
        </Text>
        {href ? (
          <Link
            sx={{
              fontSize: ".875rem",
              color: "hsl(208 90% 60% / 1)",
              letterSpacing: ".025rem",
              lineHeight: 1.5,
              userSelect: "none",
              bottom: ["1rem", "2rem"],
              position: "absolute",
              textDecoration: "none",
            }}
            href={href}
          >
            {language === "english" ? <> Read More ›</> : <>詳細</>}
          </Link>
        ) : null}

        {/* <Text>
        Synspective, which is developing a small synthetic aperture radar
      </Text> */}
      </CardContainer>
    </motion.div>
  )
}

const Container = styled.div`
  position: absolute;
  /* height: 400px; */
  width: 100%;
  margin: 0 auto;
  bottom: 0;
  height: 400px;

  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    position: absolute;
    bottom: -96px;
  }
  @media (max-width: 768px) {
    height: 300px;
  }

  .react-multi-carousel-list {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: absolute;
    /* top: -526px; */
    z-index: 997;
    bottom: 0px;
    width: 100%;
    height: 400px;
    @media (max-width: 768px) {
      height: 300px;
    }
  }

  .slide-dots {
    bottom: 20px;
  }

  .slide-dots button {
    border-width: 1px;
    height: 8px;
    width: 8px;
    background: transparent;
  }

  .react-multi-carousel-dot--active button {
    background: white;
  }

  .react-multiple-carousel__arrow {
    background: hsl(180 90% 6% / 1);
    min-width: 32px;
    min-height: 32px;
    bottom: 1rem;
  }

  .react-multiple-carousel__arrow::before {
    font-size: 12px;
    color: #fff;
    display: block;
    font-family: revicons;
    text-align: center;
    z-index: 2;
    position: relative;
  }

  .react-multiple-carousel__arrow--right {
    right: 8rem;
  }

  .react-multiple-carousel__arrow--left {
    left: 8rem;
  }
`

const TimelineSlider = ({ language = "english" }) => {
  return (
    <Container>
      {language == "english" ? (
        <>
          <Text
            sx={{
              fontSize: "14px",
              color: "#aeb1b4",
              fontWeight: 500,
              letterSpacing: ".025rem",
              zIndex: 997,
              position: "relative",
              paddingLeft: [4, "8rem"],
              letterSpacing: "3px",
              textTransform: "uppercase",
              mt: 3,
            }}
          >
            Timeline ›
          </Text>
          <Carousel
            responsive={responsive}
            showDots={true}
            keyBoardControl={true}
            dotListClass="slide-dots"
            transitionDuration={500}
            customTransition="transform 500ms ease-in-out"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable
            draggable
            swipable
          >
            <Card title="Founded" date="February 22, 2018" />
            <Card
              title="Synspective SG Pte. Ltd. was established as a local subsidiary in Singapore"
              date="September 27, 2018"
              href=""
              language={language}
            />
            <Card
              title="Signed a contract with Arianespace to launch"
              date="April 18, 2019"
            />
            <Card
              title="Cumulative amount of funds raised through a third-party allocation of new shares to ¥10.9 billion"
              date="July 26, 2019"
              href="https://thebridge.jp/2019/07/synspective-series-a-round-funding"
              language={language}
            />
            <Card
              title="Euroconsult Award For Strategic Transaction for EO Business"
              date="September 13, 2019"
            />
            <Card
              title="Head office moved to a new office"
              date="October 1, 2019"
            />
            <Card
              title="Signed an agreement with Kongsberg Satellite Service (KSAT) for the use of ground station services"
              date="October 9, 2019"
              href="https://www.spacenewsfeed.com/index.php/news/3841-new-alliance-begins-between-ksat-and-japanese-sar-satellite-startup-synspective"
              language={language}
            />
            <Card
              title="Signed a contract with Rocket Lab to launch"
              date="April 15, 2020"
              href="https://www.rocketlabusa.com/news/updates/rocket-lab-to-launch-dedicated-mission-for-japanese-space-industry-start-up-company-synspective/"
              language={language}
            />
          </Carousel>
        </>
      ) : (
        <>
          <Text
            sx={{
              fontSize: "14px",
              color: "#aeb1b4",
              fontWeight: 500,
              letterSpacing: ".025rem",
              zIndex: 997,
              position: "relative",
              paddingLeft: [4, "8rem"],
              letterSpacing: "3px",
              textTransform: "uppercase",
              mt: 3,
            }}
          >
            Timeline ›
          </Text>
          <Carousel
            responsive={responsive}
            showDots={true}
            keyBoardControl={true}
            dotListClass="slide-dots"
            transitionDuration={500}
            customTransition="transform 500ms ease-in-out"
            removeArrowOnDeviceType={["mobile"]}
            swipeable
            draggable
            swipable
          >
            <Card title="創立" date="２０１８年２月２２日" />
            <Card
              title="シンガポール現地法人として、Synspective SG Pte. Ltd. 設立"
              date="２０１８年９月２７日"
              href=""
            />
            <Card
              title="Arianespaceと衛星打ち上げの契約を締結"
              date="２０１９年４月１８日"
            />
            <Card
              title="第三者割当増資により累計資⾦調達額が 109 億円に"
              date="２０１９年７月２６日"
              href="https://thebridge.jp/2019/07/synspective-series-a-round-funding"
              language={language}
            />
            <Card
              title={`Euroconsult Award For “Strategic Transaction for EO Business” 受賞`}
              date="２０１９年９月１３日"
            />
            <Card title="新オフィスに本社移転" date="２０１９年１０月１日" />
            <Card
              title="Kongsberg Satellite Service 社（KSAT）と
地上局サービス利⽤に関する契約を締結"
              date="２０１９年１０月９日"
              href="https://www.spacenewsfeed.com/index.php/news/3841-new-alliance-begins-between-ksat-and-japanese-sar-satellite-startup-synspective"
              language={language}
            />
            <Card
              title="Rocket Lab (ロケットラボ)社と打ち上げの契約を締結
"
              language={language}
              date=" ２０２０年４月１５日 "
              href="https://www.rocketlabusa.com/news/updates/rocket-lab-to-launch-dedicated-mission-for-japanese-space-industry-start-up-company-synspective/"
            />
          </Carousel>
        </>
      )}
    </Container>
  )
}

export default TimelineSlider
