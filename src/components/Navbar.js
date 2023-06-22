const Navbar = () => {
  return (
    <div className="flex bg-transparent fixed top-0 text-[#FBD519] z-10 justify-around items-center w-[100vw] h-[10vh]">
      <p className=" font-bold text-2xl">Out There Experiences</p>
      <div>
        <ul className="flex justify-between w-[40vw]">
          <li>Home</li>
          <li>About</li>
          <li>Trips</li>
          <li>Instagram</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
