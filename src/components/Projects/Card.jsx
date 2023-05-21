export default function Card({
  name, content, toYear, toMonth,
}) {
  return (
    <div className="project-card">
      <div className="card-heading mb-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="folder-icon feather feather-folder"
        >
          <title>Folder</title>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-external-link"
        >
          <title>External Link</title>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </div>
      <div className="card-body">
        <h3 className="project-title">{name}</h3>
        <div className="project-description">
          <p className="text-light-slate fs-md">{content}</p>
        </div>
      </div>
      <footer>
        <ul className="project-tech-list">
          <li>
            {toMonth}
            {' '}
            -
            {' '}
            {toYear}
          </li>
        </ul>
      </footer>
    </div>
  );
}
