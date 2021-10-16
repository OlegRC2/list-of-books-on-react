import "./header.css";

function Header() {
    return (
        <nav className="green darken-1">
            <div className="nav-wrapper">
                <a href="!#" className="brand-logo">
                    Books
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/OlegRC2/list-of-books-on-react">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
