/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';

export default function Tab({
  id = null, title, handleActive, active,
}) {
  return (
    <li className={id === active ? 'active' : ''}>
      <span
        className="text-slate ff-mono fs-xs pointer tab-option"
        onClick={() => handleActive(id)}
      >
        {title}
      </span>
    </li>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  handleActive: PropTypes.string.isRequired,
};
