import { NavLink } from "react-router-dom";

const Navigation = () => {
  const links = [
    {
      path: "/",
      title: "1. Sử dụng useEffect cleanup",
    },
    {
      path: "useRef",
      title: "2. Sử dụng useRef",
    },
    {
      path: "useMemo",
      title: "3. Sử dụng React memo và useCallback",
    },
  ];

  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 font-medium transition ${
                isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {link.title}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <nav className="mx-auto max-w-6xl px-4">
      <ul>{renderLinks()}</ul>
    </nav>
  );
};

export default Navigation;
