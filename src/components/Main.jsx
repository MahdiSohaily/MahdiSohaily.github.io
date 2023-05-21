/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

export default function Main({ children }) {
  return <main>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
