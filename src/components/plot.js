import PropTypes from "prop-types"
import React from "react"

const Plot = ({ siteTitle }) => (
  <div>
    Plot goes here!
  </div>
)

Plot.propTypes = {
  siteTitle: PropTypes.string,
}

Plot.defaultProps = {
  siteTitle: ``,
}

export default Plot
