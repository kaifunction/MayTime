import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./NavButton.css";

function NavButton({ to, label }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add("animated");
    }
  }, []);
  return (
     <div className="button-box has-animation" ref={ref}>
      <div className="clapat-button-wrap">
        <div className="clapat-button">
          <div className="button-border rounded">
            <NavLink to={to}>
              <span data-hover={label}>{label}</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavButton;
