import supabase from "../utils/config";
import "../styles/components/DetailsBook.css"

const DetailsBook = ({ bookDetail, showModalDetails, setShowModalDetails, handleSarch, fetchData }) => {
    const closeModal = () => {
        showModalDetails && setShowModalDetails(!showModalDetails)
    };

    const handleDelete = async (bookDetail) => {
        const { error } = await supabase
            .from("books")
            .delete()
            .eq("id", bookDetail.id)
        if (error) {
            console.log(error);
        }
        closeModal();
        const url_split = window.location.href.split("/");
        url_split[url_split.length - 1] === "books" ? handleSarch() : fetchData();
    };

    return (
        <div className="details-container">
            <div className="details-modal">
                <div className="details-info-container1">
                    <img className="img-details" src={bookDetail.image} alt="book detail image" />
                    <button className="button-details">Update</button>
                    <button className="button-details" onClick={() => handleDelete(bookDetail)}>Delete Book</button>
                    <button className="button-details" onClick={closeModal}>Close Details</button>
                </div>
                <div className="details-info-container2">
                    <p>{bookDetail.title}</p>
                    <p>{bookDetail.author === undefined ? "Unknown" : (bookDetail.author.length === 0 ? "Unknown" : bookDetail.author[0])}</p>
                    <p>{bookDetail.subjects === undefined ? "Unknown" : (bookDetail.subjects.length === 0 ? "Unknown" : bookDetail.subjects[0])}</p>
                    <p>{bookDetail.isbn13}</p>
                    <p>{bookDetail.publisher}</p>
                    <p>{bookDetail.date_published}</p>
                    <p>{bookDetail.pages}</p>
                    <p>{bookDetail.synopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailsBook;