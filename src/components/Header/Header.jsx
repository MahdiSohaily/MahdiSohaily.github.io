export default function Header() {
  return (
    <header>
      <nav className="nav main_nav">
        <div className="logo fade-enter-done" tabIndex="-1">
          <a href="/" aria-label="home">
            <svg
              fill="#64ffda"
              width="59px"
              height="59px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M128 209c-44.735 0-81-36.265-81-81s36.265-81 81-81 81 36.265 81 81-36.265 81-81 81zm22.53-141.14A64.379 64.379 0 0 0 128.5 64a64.352 64.352 0 0 0-22.917 4.19 1317.969 1317.969 0 0 0 21.079 22.104c.77.79 2.042.806 2.831.038 0 0 12.798-12.235 21.038-22.472zm0 121.635c-8.239-10.237-21.05-22.665-21.05-22.665a1.975 1.975 0 0 0-2.806.041s-10.22 10.605-21.09 22.294a64.352 64.352 0 0 0 22.916 4.19 64.379 64.379 0 0 0 22.03-3.86zM89.908 76.531s-26.02 17.694-26.02 51.538c0 33.845 26.02 53.465 26.02 53.465l38.09-39.787 38.376 38.29s27.389-21.385 27.389-52.066c0-30.682-27.739-51.678-27.739-51.678l-25.672 26.32 13.39 13.837 13.112-11.68s6.936 10.757 7.035 23.153c.098 12.396-6.653 24.904-6.653 24.904l-39.191-38.937-37.495 38.69s-7.684-11.61-7.65-25.002c.035-13.393 7.008-24.966 7.008-24.966l12.75 12.488 14.996-12.609-27.746-25.96z"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="desktop_nav">
          <ol>
            <li className="fadedown-enter-done">
              <a className="text-light-slate" href="/#about">
                About
              </a>
            </li>
            <li className="fadedown-enter-done">
              <a className="text-light-slate" href="/#jobs">
                Experience
              </a>
            </li>
            <li className="fadedown-enter-done">
              <a className="text-light-slate" href="/#projects">
                Work
              </a>
            </li>
            <li className="fadedown-enter-done">
              <a className="text-light-slate" href="/#contact">
                Contact
              </a>
            </li>
          </ol>
          <div>
            <a
              className="resume"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="mobile_nav">
          <div>
            <button type="button" id="side_nav" className="menu_icon">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <g id="Menu / Menu_Alt_02">
                    <path
                      id="Vector"
                      d="M11 17H19M5 12H19M11 7H19"
                      stroke="#64ffda"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <aside id="mobile_sidebar">
              <button type="button" id="close" className="menu_icon">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#64ffda"
                    d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                  />
                </svg>
              </button>
              <nav>
                <ol className="mb-300">
                  <li>
                    <a className="text-light-slate" href="/#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="text-light-slate" href="/#jobs">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a className="text-light-slate" href="/#projects">
                      Work
                    </a>
                  </li>
                  <li>
                    <a className="text-light-slate" href="/#contact">
                      Contact
                    </a>
                  </li>
                </ol>
                <div className="align-center">
                  <a
                    className="resume wide"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </nav>
            </aside>
          </div>
        </div>
      </nav>
    </header>
  );
}
