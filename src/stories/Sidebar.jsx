import React from 'react';
import PropTypes from 'prop-types';
import { StyledSidebar } from './Sidebar.styles';

/* Forgot to pass props into component - otherwise defaults will not be applied */
export const Sidebar = (props) => {

    return (
      <StyledSidebar {...props}>
          <div><span className="span">Dev</span>challenges.io</div>
          <ul>
              <li>Colors</li>
              <li>Typography</li>
              <li>Spaces</li>
              <li className={!props.active ? "active": "" }>Buttons</li>
              <li className={props.active ? "active": "" }>Inputs</li>
              <li>Grid</li>
          </ul>
      </StyledSidebar>
  );

};

Sidebar.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool
}

Sidebar.defaultProps = {
    background: "#f0f8ff", /* #fafbfd*/
    color: "#a5a5a5",
    onClick: undefined,
    active: false
}