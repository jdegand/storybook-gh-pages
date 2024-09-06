import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

export const Button = ({ disabled, endIcon, label, startIcon, alt, ...props }) => {

  return (
    <StyledButton
      type="submit"
      {...props}
      disabled={disabled}
    >
      {startIcon &&
        <span>
          <img style={{ width: '20px', height: '20px', marginInlineEnd: '3px' }} src={startIcon} alt={alt} />
        </span>
      }
      {label}
      {endIcon &&
        <span>
          <img style={{ width: '20px', height: '20px', marginInlineStart: '3px' }} src={endIcon} alt={alt} />
        </span>
      }
    </StyledButton>
  );
};

Button.propTypes = {
  alt: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  disableShadow: PropTypes.bool,
  endIcon: PropTypes.string,
  fullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  startIcon: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  alt: "",
  background: 'default',
  color: '#5d5d5d',
  disabled: false,
  disableShadow: false,
  endIcon: '',
  fullWidth: false,
  label: 'Default',
  startIcon: '',
  size: 'medium',
  variant: 'default',
  onClick: undefined,
};