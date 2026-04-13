const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-4 sm:py-8 sm:px-8 md:px-12 lg:px-18 gap-4 flex-wrap sm:flex-nowrap">
      <h4 className="bg-black text-white px-3 py-1 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base">
        Target Audience
      </h4>
      <button className="bg-gray-100 text-black px-3 py-1 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap">
        Digital banking platform
      </button>
    </div>
  );
};

export default Navbar;
