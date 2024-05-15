import { useEffect, useState } from "react";
import "../styles/pages/AllBooksPage.css"
import supabase from "../utils/config";
import bookmark_inactive from "../assets/images/bookmark.png"
import bookmark_active from "../assets/images/bookmark_active.png"

const AllBooksPage = () => {
    const [arrayBooks, setArrayBooks] = useState([]);
    const [bookmarkState, setBookmarkState] = useState(false);
    const [bookDetail, setBookDetail] = useState({});

    const fetchData = async () => {
        const { data, error } = await supabase
            .from("books")
            .select()
            .order("id", { ascending: false })
            .limit(50);
        if (error) {
            console.log(error);
            return
        } else {
            setArrayBooks(data);
            return
        }
    };

    const displayDetailsModal = (book) => {
        setBookDetail(book);
        document.querySelector(".details-modal").style.visibility = "visible";
        document.querySelector(".bookshelf").style.filter = "blur(10px)";
    }

    const hideDetailsModal = () => {
        document.querySelector(".details-modal").style.visibility = "hidden";
        document.querySelector(".bookshelf").style.filter = "none";
    }

    const favoriteAddRemove = async (book) => {
        if (book.favorite) {
            const { error } = await supabase
                .from('books')
                .update({ favorite: false })
                .eq('id', book.id)
            if (error) {
                console.log(error);
                return
            }
        } else {
            const { error } = await supabase
                .from('books')
                .update({ favorite: true })
                .eq('id', book.id)
            if (error) {
                console.log(error);
                return
            }
        }
        setBookmarkState(!bookmarkState);
    };

    useEffect(() => {
        fetchData();
    }, [bookmarkState]);

    return (
        <div className="allbookspage" >
            <div className="bookshelf">
                {
                    arrayBooks.map(book => {
                        return (
                            <div key={book.id} className="bookcard">
                                <div className="book-container">
                                    <div className="book">
                                        <img src={book.favorite ? bookmark_active : bookmark_inactive} alt="bookmark icon" className="bookmark" onClick={() => favoriteAddRemove(book)} />
                                        <img src={book.image} alt="book picture" className="bookpic" onClick={() => displayDetailsModal(book)} />
                                    </div>
                                </div>
                                <div className="shelf"></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="details-modal" onClick={hideDetailsModal}>
                <img src={bookDetail.image} alt="book detail image" />
                <div className="details-info-container">
                    <h3>{bookDetail.title}</h3>
                    <h4>{bookDetail.author === undefined ? "Unknown" : (bookDetail.author.length === 0 ? "Unknown" : bookDetail.author[0])}</h4>
                    <h4>{bookDetail.subjects === undefined ? "Unknown" : (bookDetail.subjects.length === 0 ? "Unknown" : bookDetail.subjects[0])}</h4>
                    <h5>{bookDetail.isbn13}</h5>
                    <h5>{bookDetail.publisher}</h5>
                    <h5>{bookDetail.date_published}</h5>
                    <h5>{bookDetail.pages}</h5>
                    <p>{bookDetail.synopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default AllBooksPage;