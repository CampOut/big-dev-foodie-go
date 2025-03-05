import React from 'react'
import PropTypes from 'prop-types'

const Button = ({variant, children, ...rest}) => {
  return (
    <button {...rest} className={`btn btn-${variant || 'primary'}`}>{ children }</button>
  )
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  variant: 'primary'
}

export default Button