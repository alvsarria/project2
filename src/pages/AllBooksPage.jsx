import { useEffect, useState } from "react";
import "../styles/pages/AllBooksPage.css"
import supabase from "../utils/config";

import BookCard from "../components/BookCard";
import DetailsBook from "../components/DetailsBook";

const AllBooksPage = () => {
    const [arrayBooks, setArrayBooks] = useState([]);
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

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="allbookspage" >
            <div className="bookshelf-allbooks">
                {
                    arrayBooks.map(book => {
                        return (
                            <BookCard key={book.id} book={book} setBookDetail={setBookDetail} fetchData={fetchData} />
                        )
                    })
                }
            </div>
            <DetailsBook bookDetail={bookDetail} />
        </div>
    )
}

export default AllBooksPage;