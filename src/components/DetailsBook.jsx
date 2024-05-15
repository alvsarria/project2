const DetailsBook = ({bookDetail}) => {
    const hideDetailsModal = () => {
        document.querySelector(".details-modal").style.visibility = "hidden";
        document.querySelector(".bookshelf-allbooks").style.filter = "none";
    };

    return (
        <div className="details-modal">
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
                <button onClick={hideDetailsModal}>Close</button>
            </div>
        </div>
    )
}

export default DetailsBook;