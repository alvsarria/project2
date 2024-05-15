import { useEffect, useState } from "react";
import supabase from "../utils/config";
import BookCard from "../components/BookCard";
import DetailsBook from "../components/DetailsBook";
import "../styles/pages/AllBooksPage.css"

const AllBooksPage = () => {
    const [arrayBooks, setArrayBooks] = useState([]);
    const [bookDetail, setBookDetail] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [searchString, setSearchString] = useState("");

    const handleSearchString = (e) => {
        setSearchString(e.target.value);
    };

    const handleSarch = async () => {
        const { data, error } = await supabase
            .from("books")
            .select()
            .ilike("title", `%${searchString}%`);
        if (error) {
            console.log(error);
        } else {
            if (searchString === "") {
                fetchData();
            } else {
                setArrayBooks(data);
            }
        }
    };

    const fetchData = async () => {
        const { data, error } = await supabase
            .from("books")
            .select()
            .order("id", { ascending: false })
            .limit(200);
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
            <input onChange={handleSearchString} type="text" name="searchbar" onKeyUp={(e) => e.key === "Enter" && handleSarch()} />
            <div className="bookshelf-allbooks">
                {
                    arrayBooks.map(book => {
                        return (
                            <BookCard key={book.id} book={book} showModal={showModal} setShowModal={setShowModal} setBookDetail={setBookDetail} fetchData={fetchData} />
                        )
                    })
                }
            </div>
            {showModal && <DetailsBook bookDetail={bookDetail} showModal={showModal} setShowModal={setShowModal} fetchData={fetchData} />}
        </div>
    )
}

export default AllBooksPage;