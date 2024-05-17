import bookmark_inactive from "../assets/images/bookmark.png";
import bookmark_active from "../assets/images/bookmark_active.png";
import supabase from "../utils/config";

const BookCard = ({
  book,
  showModalDetails,
  setShowModalDetails,
  setBookDetail,
  fetchData,
}) => {
  const favoriteAddRemove = async (book) => {

    // nice implementation of toggling the favorite status
    if (book.favorite) {
      const { error } = await supabase
        .from("books")
        .update({ favorite: false })
        .eq("id", book.id);
      if (error) {
        console.log(error);
        return;
      }
    } else {
      const { error } = await supabase
        .from("books")
        .update({ favorite: true })
        .eq("id", book.id);
      if (error) {
        console.log(error);
        return;
      }
    }
    fetchData();
  };

  const displayDetailsModal = (book) => {
    setBookDetail(book);
    !showModalDetails && setShowModalDetails(!showModalDetails);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => { setBookDetail(book) }, [arrayBooks])

  return (
    <div className="bookcard">
      <div className="book-container">
        <div className="book">
          <img
            src={book.favorite ? bookmark_active : bookmark_inactive}
            alt="bookmark icon"
            className="bookmark"
            onClick={() => favoriteAddRemove(book)}
          />
          <img
            src={book.image}
            alt="book picture"
            className="bookpic"
            onClick={() => displayDetailsModal(book)}
          />
        </div>
      </div>
      <div className="shelf"></div>
    </div>
  );
};

export default BookCard;
