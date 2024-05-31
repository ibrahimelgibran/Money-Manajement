import { ImStatsBars } from "react-icons/im";

function Nav() {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User Information */}
        <div className="flex items-center gap-2">
          {/* Img */}
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://ibrahimelgibran.com/assets/images/home-profile.png"
              alt="Photo images"
            />
          </div>
          {/* Name */}
          <small>Hi, Gibran</small>
        </div>

        {/* Right side of our navigation */}
        <nav className="flex items-center gap-2">
          <div>
            <ImStatsBars className="text-2xl " />
          </div>
          <div>
            <button className="btn">Sign Out</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
