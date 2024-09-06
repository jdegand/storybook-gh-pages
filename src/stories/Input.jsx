import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledTextArea } from './Input.styles';

export const Input = ({ disabled, error, helperText, label, multiline, row, startIcon, value, alt, ...props }) => {

  // add state to control value prop and for onChange

  const style = {
    textIndent: startIcon ? "20px" : "0",
  }

  const style2 = {
    color: error ? "#d32f2f" : "inherit"
  }

  return (
    <form style={{ position: 'relative' }}>
      <label style={style2} htmlFor="input">{label}</label>
      {startIcon &&
        <img style={{ width: '20px', height: '20px', position: 'absolute', bottom: '10px', left: '15px', zIndex: '2' }} src={startIcon} alt={alt} />
      }

      {multiline ? <StyledTextArea
        type="text"
        placeholder=" Placeholder"
        value={value || null}
        disabled={disabled}
        error={error} rows={row} {...props} /> :
        <StyledInput
          type="text"
          id="label"
          placeholder=" Placeholder"
          value={value || null}
          disabled={disabled}
          error={error}
          {...props}
          style={style}
        />
      }
      <span style={style2}>{helperText}</span>
    </form>
  );

};

Input.propTypes = {
  alt: PropTypes.string,
  background: PropTypes.string,
  blackBorder: PropTypes.bool, /*added for display purpose */
  color: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  endIcon: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  row: PropTypes.number,
  startIcon: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  alt: "",
  background: 'default',
  blackBorder: false,
  color: '#5d5d5d',
  disabled: false,
  endIcon: '',
  error: false,
  helperText: 'Some interesting text',
  label: 'Label',
  multiline: false,
  row: 1,
  startIcon: '',
  size: 'medium',
  variant: 'default',
  value: '',
  onChange: undefined,
};