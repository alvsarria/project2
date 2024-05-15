import { useEffect, useState } from "react";
import "../styles/pages/AllBooksPage.css"
import supabase from "../utils/config";

import BookCard from "../components/BookCard";
import DetailsBook from "../components/DetailsBook";

const FavoritesPage = () => {
    const [arrayFavoriteBooks, setArrayFavoriteBooks] = useState([]);
    const [favBookDetail, setBookDetail] = useState({});

    const fetchDataFavorites = async () => {
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
    }, []);

    if (arrayFavoriteBooks.length !== 0) {
        return (
            <div className="allbookspage" >
                <div className="bookshelf-allbooks">
                    {
                        arrayFavoriteBooks.map(book => {
                            return (
                                <BookCard key={book.id} book={book} setBookDetail={setBookDetail} fetchData={fetchDataFavorites} />
                            )
                        })
                    }
                </div>
                <DetailsBook bookDetail={favBookDetail} />
            </div>
        )
    } else {
        return (
            <div className="nonebookspage" >
                <p>No Favorite Books Bookmarked</p>
            </div>
        )
    }
}

export default FavoritesPage;