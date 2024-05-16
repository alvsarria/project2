import { useNavigate } from "react-router-dom";
import "../styles/components/DetailsBook.css";

const SubmitFormOutput = ({ data, setSearchString }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/books");
    setSearchString(data.title);
  };

  return (
    <div className="details-container">
      <div className="details-modal">
        <div className="details-info-container1">
          <img
            className="img-details"
            src={data.image}
            alt="book detail image"
          />
          <button className="button-details" onClick={handleClose}>
            Finish
          </button>
        </div>
        <div className="details-info-container2">
          <h1>Item Created!</h1>
          <p className="synop">
            <span>Title: </span>
            {data.title}
          </p>
          <p className="synop">
            <span>Author: </span>
            {data.authors === undefined
              ? "Unknown"
              : data.authors.length === 0
                ? "Unknown"
                : data.authors[0]}
          </p>
          <p className="synop">
            <span>Subject: </span>
            {data.subjects === undefined
              ? "Unknown"
              : data.subjects.length === 0
                ? "Unknown"
                : data.subjects[0]}
          </p>
          <p className="synop">
            <span>ISBN13: </span>
            {data.isbn13}
          </p>
          <p className="synop">
            <span>Publisher: </span>
            {data.publisher}
          </p>
          <p className="synop">
            <span>Publishing Date: </span>
            {data.date_published}
          </p>
          <p className="synop">
            <span>Pages: </span>
            {data.pages}
          </p>
          <p className="synop">
            <span>Est. reading time: </span>
            {(data.pages / 60).toFixed(1)} hours
          </p>
          <p className="synop1">
            <span>Synopsis: </span>
            {data.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmitFormOutput;
