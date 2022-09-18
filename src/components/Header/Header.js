import { useDispatch } from "react-redux";
import { getBooks } from "../../redux/booksSlice";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    dispatch(getBooks({ name: search }));
  };
  return (
    <div className="flex justify-center items-center h-96 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="block w-5/12 relative box-border">
        <h1 className="block text-cyan-50 text-center mb-5 text-4xl">
          Data Book Search App
        </h1>
        <div className="relative w-full ">
          <form
            className="flex items-center justify-center"
            onSubmit={handleSubmit}
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Book search"
              type="text"
              className="w-full box-border p-4 rounded border-none text-base shadow-lg shadow-cyan-500/50 text-black"
            />
            <BsSearch
              className="text-3xl right-4 absolute text-black hover:text-red-400"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
