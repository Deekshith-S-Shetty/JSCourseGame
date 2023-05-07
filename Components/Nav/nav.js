import Link from "next/link";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h3 className="navbar-brand" href="#">
        FreeLearn
      </h3>
      <div className="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav mr-auto justify-content-end">
          <li class="nav-item active">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Top 5 Scorers
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <h5>Hello</h5>
            </div>
          </li>
          <li class="nav-item">
            <Link href="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li class="nav-item">
            <Link href="/register" className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
