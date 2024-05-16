import "../styles/components/UpdateBook.css"

const UpdateBook = ({ bookDetail, showModalDetails, setShowModalDetails, showModalUpdate, setShowModalUpdate }) => {

    const closeUpdate = () => {
        setShowModalUpdate(!showModalUpdate)
        setShowModalDetails(!showModalDetails);
    };

    return (
        <div className="details-container">
            <div className="details-modal">
                <div className="details-info-container1">
                    <img className="img-details" src={bookDetail.image} alt="book detail image" />
                    <button className="button-details">Save</button>
                    <button className="button-details" onClick={closeUpdate}>Cancel</button>
                </div>
                <div className="details-info-container2">
                    <input type="text" name="title" value={bookDetail.title} required />
                    <input type="text" name="title" value={bookDetail.author} required />
                    <input type="text" name="title" value={bookDetail.subjects} required />
                    <input type="number" name="title" value={bookDetail.isbn13} required />
                    <input type="text" name="title" value={bookDetail.publisher} required />
                    <input type="text" name="title" value={bookDetail.date_published} required />
                    <input type="number" name="title" value={bookDetail.pages} required />
                    <textarea type="text" name="title" value={bookDetail.synopsis} required />
                </div>
            </div>
        </div>
    )
}

export default UpdateBook;