import { useEffect, useState } from "react";
import supabase from "../utils/config";
import BookCard from "../components/BookCard";
import DetailsBook from "../components/DetailsBook";
import Loading from "../components/Loading";
import UpdateBook from "../components/UpdateBook";
import "../styles/pages/AllBooksPage.css"

const AllBooksPage = ({ searchString, handleSearchString, setActivePage }) => {
    const [arrayBooks, setArrayBooks] = useState([]);
    const [bookDetail, setBookDetail] = useState({});
    const [showModalDetails, setShowModalDetails] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSarch = async () => {
        setIsLoading(false);
        setTimeout(() => setIsLoading(true), 1000)
        if (searchString === "") {
            fetchData();
        } else {
            const { data, error } = await supabase
                .from("books")
                .select()
                .order("id", { ascending: false })
                .ilike("title", `%${searchString}%`);
            if (error) {
                console.log(error);
            } else {
                setArrayBooks(data);
            }
        }
    };

    const fetchData = async () => {
        setIsLoading(false);
        setTimeout(() => setIsLoading(true), 1000)
        if (searchString === "") {
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
        setActivePage("allbooks");
        setTimeout(() => setIsLoading(true), 1000)
        fetchData();
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant",
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isLoading) {
        return (
            <div className="allbookspage" >
                <div className="searchbar-container">
                    <input onChange={handleSearchString} className="searchinput-allpages" type="text" name="bookSearch" placeholder="Look for a title" value={searchString} onKeyUp={(e) => e.key === "Enter" && handleSarch()} />
                    <div className="homepage-minorr">
                        <button className="button-allpages" onClick={handleSarch}><span>Search</span><i></i></button>
                    </div>
                </div>
                <div className="nobooks1">
                    <Loading />
                </div>
            </div>
        )
    } else if (arrayBooks.length !== 0) {
        return (
            <div className="allbookspage" >
                <div className="searchbar-container">
                    <input onChange={handleSearchString} className="searchinput-allpages" type="text" name="bookSearch" placeholder="Look for a title" value={searchString} onKeyUp={(e) => e.key === "Enter" && handleSarch()} />
                    <div className="homepage-minorr">
                        <button className="button-allpages" onClick={handleSarch}><span>Search</span><i></i></button>
                    </div>
                </div>
                <div className="bookshelf-allbooks">
                    {
                        arrayBooks.map(book => {
                            return (
                                <BookCard key={book.id} book={book} arrayBooks={arrayBooks} showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} setBookDetail={setBookDetail} fetchData={fetchData} />
                            )
                        })
                    }
                    {showModalDetails && <DetailsBook bookDetail={bookDetail} setBookDetail={setBookDetail} showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} searchString={searchString} handleSarch={handleSarch} setShowModalUpdate={setShowModalUpdate} showModalUpdate={showModalUpdate} />}
                    {showModalUpdate && <UpdateBook bookDetail={bookDetail} setBookDetail={setBookDetail} showModalDetails={showModalDetails} setShowModalDetails={setShowModalDetails} setShowModalUpdate={setShowModalUpdate} showModalUpdate={showModalUpdate} fetchData={fetchData} />}
                </div>
            </div>
        )
    } else {
        return (
            <div className="allbookspage" >
                <div className="searchbar-container">
                    <input onChange={handleSearchString} className="searchinput-allpages" type="text" name="bookSearch" placeholder="Look for a title" value={searchString} onKeyUp={(e) => e.key === "Enter" && handleSarch()} />
                    <div className="homepage-minorr">
                        <button className="button-allpages" onClick={handleSarch}><span>Search</span><i></i></button>
                    </div>
                </div>
                <div className="nobooks">
                    No Books Found
                </div>
            </div>
        )
    }
}

export default AllBooksPage;