import * as React from "react"
import { Box } from "theme-ui"
import styled from "styled-components"
import GridContent from "./GridContent"
const Board = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-left: 0;
  border-top: 0;
  display: flex;
  /* align-items: center;
  justify-content: center; */
  color: #000;
`

const Grid = styled(Box)`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);

  padding-left: 8rem;
  padding-right: 8rem;
  margin: 0 auto;

  ${Board} {
    height: 500px;
  }

  ${Board}:nth-child(3n) {
    border-right: 0;
  }

  ${Board}:nth-child(n+7) {
    border-bottom: 0;
  }
`

const GridView = props => {
  return (
    <Grid {...props}>
      <Board>
        <GridContent />
      </Board>
      <Board>
        <GridContent />
      </Board>
      <Board>
        <GridContent />
      </Board>
      <Board>
        <GridContent />
      </Board>
      <Board>
        <GridContent />
      </Board>
      <Board>
        <GridContent />
      </Board>
      <Board>
        <GridContent />
      </Board>
      <Board>
        <GridContent />
      </Board>
      <Board>
        <GridContent />
      </Board>
    </Grid>
  )
}

export default GridView
