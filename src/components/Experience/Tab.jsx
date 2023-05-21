/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function Tab({ id, title, handleActive, active }) {
  return (
    <li className={id === active ? "active" : ""}>
      <span
        className="text-slate ff-mono fs-xs pointer tab-option"
        onClick={(e) => handleActive(id)}
      >
        {title}
      </span>
    </li>
  );
}
