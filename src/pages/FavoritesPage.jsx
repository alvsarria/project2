import { useEffect, useState } from "react";
import "../styles/pages/AllBooksPage.css"
import supabase from "../utils/config";
import UpdateBook from "../components/UpdateBook";
import BookCard from "../components/BookCard";
import DetailsBook from "../components/DetailsBook";
import Loading from "../components/Loading";

const FavoritesPage = () => {
    const [arrayFavoriteBooks, setArrayFavoriteBooks] = useState([]);
    const [favBookDetail, setFavBookDetail] = useState({});
    const [showFavoriteModal, setShowFavoriteModal] = useState(false);
    const [showModalFavoriteUpdate, setShowModalFavoriteUpdate] = useState(false);
    const [isLoading1, setIsLoading1] = useState(false);

    const fetchDataFavorites = async () => {
        if (showFavoriteModal) {
            setIsLoading1(false);
            setTimeout(() => setIsLoading1(true), 1000)
        }
        const { data, error } = await supabase
            .from("books")
            .select()
            .order("id", { ascending: false })
            .eq("favorite", true)
        if (error) {
            console.log(error);
            return
        } else {
            setArrayFavoriteBooks(data);
            return
        }
    };

    useEffect(() => {
        fetchDataFavorites();
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant",
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isLoading1) {
        return (
            <div className="allbookspage" >
                <div className="nobooks1">
                    <Loading />
                </div>
            </div>
        )
    } else if (arrayFavoriteBooks.length !== 0) {
        return (
            <div className="allbookspage" >
                <div className="bookshelf-allbooks">
                    {
                        arrayFavoriteBooks.map(book => {
                            return (
                                <BookCard key={book.id} book={book} showModalDetails={showFavoriteModal} setShowModalDetails={setShowFavoriteModal} setBookDetail={setFavBookDetail} fetchData={fetchDataFavorites} />
                            )
                        })
                    }
                </div>
                {/* bookDetail, showModalDetails, setShowModalDetails, searchString, handleSarch */}
                {showFavoriteModal && <DetailsBook bookDetail={favBookDetail} setBookDetail={setFavBookDetail} showModalDetails={showFavoriteModal} setShowModalDetails={setShowFavoriteModal} fetchData={fetchDataFavorites} setShowModalUpdate={setShowModalFavoriteUpdate} showModalUpdate={showModalFavoriteUpdate} />}
                {showModalFavoriteUpdate && <UpdateBook bookDetail={favBookDetail} setBookDetail={setFavBookDetail} showModalDetails={showFavoriteModal} setShowModalDetails={setShowFavoriteModal} setShowModalUpdate={setShowModalFavoriteUpdate} showModalUpdate={showModalFavoriteUpdate} fetchData={fetchDataFavorites} />}
                {/* {showFavoriteModal && <DetailsBook bookDetail={favBookDetail} showModalDetails={showFavoriteModal} setShowModalDetails={setShowFavoriteModal} fetchData={fetchDataFavorites} setShowModalUpdate={showModalFavoriteUpdate} showModalUpdate={setShowModalFavoriteUpdate}/>} */}
                {/* {showModalFavoriteUpdate && <UpdateBook bookDetail={favBookDetail} setBookDetail={setBookDetail} showModalDetails={showFavoriteModal} setShowModalDetails={setShowFavoriteModal} setShowModalUpdate={showModalFavoriteUpdate} showModalUpdate={setShowModalFavoriteUpdate} fetchData={fetchDataFavorites} />} */}
            </div>
        )
    } else {
        return (
            <div className="allbookspage" >
                <div className="nobooks">
                    No Favorite Bookmarks
                </div>
            </div>
        )
    }
}

export default FavoritesPage;