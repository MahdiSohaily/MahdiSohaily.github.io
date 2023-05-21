export default function Details({
  name,
  content,
  fromYear,
  toYear,
  fromMonth,
  toMonth,
}) {
  return (
    <div
      id="panel-0"
      role="tabpanel"
      tabIndex="0"
      aria-labelledby="tab-0"
      aria-hidden="false"
      className="jobs__StyledTabPanel-sc-59sdss-5 QgHxr fade-enter-done"
    >
      <h3>
        <span>{name}</span>
      </h3>
      <p className="text-light-slate ff-mono fs-xs">
        {fromMonth}
        {' '}
        {fromYear}
        {' '}
        -
        {' '}
        {toYear}
        {' '}
        {toMonth}
      </p>
      <div>
        <p className="text-slate fs-xl">{content}</p>
      </div>
    </div>
  );
}
