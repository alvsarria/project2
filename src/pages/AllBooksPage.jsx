import { useEffect, useState } from "react";
import supabase from "../utils/config";
import BookCard from "../components/BookCard";
import DetailsBook from "../components/DetailsBook";
import "../styles/pages/AllBooksPage.css"

const AllBooksPage = () => {
    const [arrayBooks, setArrayBooks] = useState([]);
    const [bookDetail, setBookDetail] = useState({});
    const [showModal, setShowModal] = useState(false);

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
                            <BookCard key={book.id} book={book} showModal={showModal} setShowModal={setShowModal} setBookDetail={setBookDetail} fetchData={fetchData} />
                        )
                    })
                }
            </div>
            {showModal && <DetailsBook bookDetail={bookDetail} showModal={showModal} setShowModal={setShowModal} />}
        </div>
    )
}

export default AllBooksPage;