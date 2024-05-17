import "../styles/components/Loading.css";
// chapeau for the nice implementation of the loading animation
const Loading = () => {
  return (
    <div className="book-load">
      <div className="book__pg-shadow"></div>
      <div className="book__pg"></div>
      <div className="book__pg book__pg--2"></div>
      <div className="book__pg book__pg--3"></div>
      <div className="book__pg book__pg--4"></div>
      <div className="book__pg book__pg--5"></div>
    </div>
  );
};

export default Loading;
