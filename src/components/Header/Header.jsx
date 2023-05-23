import { useRef, useState } from "react";
import "./header.css";

export default function Header({ search }) {
  const nav = useRef();

  const [value, setValue] = useState();

  const openNav = () => {
    nav.current.style.right = 0;
  };

  const closeNav = () => {
    nav.current.style.right = "-100%";
  };

  const submit = () => {
    search(value);
  };
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
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <input
                className="search"
                placeholder="Search for a user"
                type="text"
                name="search"
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="search-btn" type="submit">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  stroke="#ffffff"
                  fill="#ffffff"
                  viewBox="0 0 122.879 119.799"
                >
                  <g>
                    <path d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z" />
                  </g>
                </svg>
              </button>
            </form>
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
            <button
              onClick={openNav}
              type="button"
              id="side_nav"
              className="menu_icon"
            >
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
            <aside ref={nav} id="mobile_sidebar">
              <button
                onClick={closeNav}
                type="button"
                id="close"
                className="menu_icon"
              >
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
