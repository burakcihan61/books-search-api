import React from "react";
import { useSelector } from "react-redux";

const Content = () => {
  const openInNewTab = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const booksArr = useSelector((state) => state.booksReducer.books);
  return (
    <div className="m-auto w-11/12 mt-5 min-h-[55vh] grid grid-cols-3 gap-3">
      {booksArr && booksArr.length > 0 ? (
        booksArr.map((book) => {
          return (
            book.volumeInfo.imageLinks &&
            book.volumeInfo.authors && (
              <div
                className="w-80 m-5 text-center bg-slate-200 p-3 rounded text-black inline-block"
                key={book.id}
              >
                <img
                  className="w-11/12 h-52 ml-auto mr-auto object-contain pb-4"
                  alt="ımagesLive"
                  src={book.volumeInfo.imageLinks.smallThumbnail}
                />
                <h5 className="mt-4 text-base">{book.volumeInfo.title}</h5>
                <h6 className="mt-0 mb-4 inline-block p-1 pt-6 text-base">
                  {book.volumeInfo.authors[0]}
                </h6>
                <br />
                <button
                  onClick={() => openInNewTab(book.volumeInfo.previewLink)}
                  className="inline-block hover:text-red-300 text-black"
                >
                  Preview
                </button>
              </div>
            )
          );
        })
      ) : (
        <div className="text-center text-4xl ml-[550px] flex justify-center">
          <div>Find book</div>
        </div>
      )}
    </div>
  );
};

export default Content;
