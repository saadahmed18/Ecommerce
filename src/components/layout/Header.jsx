import { Link, NavLink } from "react-router";
import UserIcon from "../../assets/icons/User.webp";
import CartIcon from "../../assets/icons/Cart.webp";
import VectorIcon from "../../assets/icons/Vector.webp";
export default function Header() {
  return (
    <>
      <header className="py-7">
        <div className="container m-auto flex gap-10 justify-center items-center">
          <div>
            <Link className="text-black font-bold text-2xl">Cyber</Link>
          </div>
          <nav>
            <ul className="flex gap-8 items-center">
              <li>
                <input type="search" placeholder="Search" className="bg-[#F5F5F5] text-[#989898] p-[10px] w-[250px] rounded-md" />
              </li>
              <li>
                <NavLink className="text-[#989898] font-bold active:text-black" to="/home">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className="text-[#989898] font-bold active:text-black" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[#989898] font-bold active:text-black" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink className="text-[#989898] font-bold active:text-black" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <img className="cursor-pointer" src={VectorIcon} alt="" />
              </li>
              <li>
                <img className="cursor-pointer" src={CartIcon} alt="" />
              </li>
              <li>
                <img className="cursor-pointer" src={UserIcon} alt="" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
