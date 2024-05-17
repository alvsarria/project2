import supabase from "../utils/config";
import "../styles/components/DetailsBook.css";

const DetailsBook = ({
  bookDetail,
  showModalDetails,
  setShowModalDetails,
  handleSarch,
  fetchData,
  setShowModalUpdate,
  showModalUpdate,
}) => { // when we have this amount of props, we can think of using an object instead. Send an object from the parent component and destructure it here maybe?
  const closeModal = () => {
    setShowModalDetails(!showModalDetails);
  };

  const showUpdateDetails = () => {
    setShowModalUpdate(!showModalUpdate);
    setShowModalDetails(!showModalDetails);
    console.log(showModalUpdate);
  };

  const handleDelete = async (bookDetail) => {
    const { error } = await supabase
      .from("books")
      .delete()
      .eq("id", bookDetail.id);
    if (error) {
      console.log(error);
    }
    // I'm not sure if I understand the logic here. Why do we need to split the url and check the last element?
    // can't we use react-router-dom to add params to the url and then use those params to fetch the data?
    const url_split = window.location.href.split("/");
    closeModal();
    url_split[url_split.length - 1] === "books" ? handleSarch() : fetchData();
  };
// bookDetail can also be destructured before we use it in the return statement
  return (
    <div className="details-container">
      <div className="details-modal">
        <div className="details-info-container1">
          <img
            className="img-details"
            src={bookDetail.image}
            alt="book detail image"
          />
          <button className="button-details" onClick={showUpdateDetails}>
            Update
          </button>
          <button
            className="button-details"
            onClick={() => handleDelete(bookDetail)}
          >
            Delete Book
          </button>
          <button className="button-details" onClick={closeModal}>
            Close Details
          </button>
        </div>
        <div className="details-info-container2">
          <p className="synop">
            <span>Title: </span>
            {bookDetail.title}
          </p>
          <p className="synop">
            <span>Author: </span>
            {bookDetail.authors === undefined
              ? "Unknown"
              : bookDetail.authors.length === 0
                ? "Unknown"
                : bookDetail.authors[0]}
          </p>
          <p className="synop">
            <span>Subject: </span>
            {bookDetail.subjects === undefined
              ? "Unknown"
              : bookDetail.subjects.length === 0
                ? "Unknown"
                : bookDetail.subjects[0]}
          </p>
          <p className="synop">
            <span>ISBN13: </span>
            {bookDetail.isbn13}
          </p>
          <p className="synop">
            <span>Publisher: </span>
            {bookDetail.publisher}
          </p>
          <p className="synop">
            <span>Publishing Date: </span>
            {bookDetail.date_published}
          </p>
          <p className="synop">
            <span>Pages: </span>
            {bookDetail.pages}
          </p>
          <p className="synop">
            <span>Est. reading time: </span>
            {(bookDetail.pages / 60).toFixed(1)} hours
          </p>
          <p className="synop1">
            <span>Synopsis: </span>
            {bookDetail.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsBook;
