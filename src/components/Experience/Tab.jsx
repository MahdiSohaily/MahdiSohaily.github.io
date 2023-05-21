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
