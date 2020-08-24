/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/"
import { useColorMode } from "theme-ui"
import SEO from "../components/seo"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [colorMode, setColorMode] = useColorMode()

  return (
    <ThemeProvider theme={theme}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <SEO title="Synspective Timeline" />
      <div>{children}</div>
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
