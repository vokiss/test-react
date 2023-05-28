import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <nav className="header grid grid-cols-2 mb-2">
      <Link to="/">
        <div className="border-2 bg-gray-300 p-2 font-medium ">Summary</div>
      </Link>
      <Link to="/navigator?tab=0">
        <div className="border-2 bg-gray-300 p-2 font-medium">List</div>
      </Link>
    </nav>
  );
}

export default Header;
