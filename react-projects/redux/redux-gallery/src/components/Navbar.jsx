import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Search", to: "/" },
  { label: "Collections", to: "/collections" },
];

const Navbar = () => {
  return (
    <nav className="border-b border-slate-800 bg-slate-950/90 px-4 py-4 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `rounded-full px-5 py-3 text-lg font-semibold transition ${
                isActive
                  ? "bg-emerald-500 text-slate-950"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
