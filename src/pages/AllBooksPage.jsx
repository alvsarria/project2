import { useEffect, useState } from "react";
import supabase from "../utils/config";
import BookCard from "../components/BookCard";
import DetailsBook from "../components/DetailsBook";
import "../styles/pages/AllBooksPage.css"

const AllBooksPage = ({ searchString, handleSearchString }) => {
    const [arrayBooks, setArrayBooks] = useState([]);
    const [bookDetail, setBookDetail] = useState({});
    const [showModalDetails, setShowModalDetails] = useState(false);

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
        if(searchString === ""){
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
        } else {
            handleSarch();
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (arrayBooks.length !== 0) {
        return (
            <div className="allbookspage" >
                <input onChange={handleSearchString} type="text" name="searchbar" onKeyUp={(e) => e.key === "Enter" && handleSarch()} value={searchString}/>
                <div className="bookshelf-allbooks">
                    {
                        arrayBooks.map(book => {
                            return (
                                <BookCard key={book.id} book={book} showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} setBookDetail={setBookDetail} fetchData={fetchData} />
                            )
                        })
                    }
                    {showModalDetails && <DetailsBook bookDetail={bookDetail} showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} fetchData={fetchData} />}
                </div>
            </div>
        )
    } else {
        return (
            <div className="allbookspage" >
                <input onChange={handleSearchString} type="text" name="searchbar" onKeyUp={(e) => e.key === "Enter" && handleSarch()} />
                <p>No Books Found</p>
            </div>
        )
    }
}

export default AllBooksPage;