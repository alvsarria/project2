import { useState } from "react";
import supabase from "../utils/config";
import "../styles/components/UpdateBook.css"

const UpdateBook = ({ bookDetail, setBookDetail, showModalDetails, setShowModalDetails, showModalUpdate, setShowModalUpdate, fetchData }) => {

    const closeUpdate = () => {
        setShowModalUpdate(!showModalUpdate);
        setShowModalDetails(!showModalDetails);
    };

    const [formDataUpdate, setUpdateInitialState] = useState({
        id: bookDetail.id,
        title: bookDetail.title,
        image: bookDetail.image,
        synopsis: bookDetail.synopsis,
        publisher: bookDetail.publisher,
        subjects: bookDetail.subjects,
        authors: bookDetail.authors,
        isbn13: bookDetail.isbn13,
        date_published: bookDetail.date_published,
        pages: bookDetail.pages,
    });

    const handleInputUpdate = (e) => {
        const { name, value } = e.target;
        if (name === "authors" || name === "subjects") {
            setUpdateInitialState({ ...formDataUpdate, [name]: [value] });
        } else {
            setUpdateInitialState({ ...formDataUpdate, [name]: value });
        }
    };

    const handleSubmitUpdate = async () => {
        console.log(formDataUpdate);
        const { title, image, synopsis, publisher, subjects, authors, isbn13, date_published, pages } = formDataUpdate;
        if (title === "" || image === "" || synopsis === "" || publisher === "" || subjects.length === 0 || authors.length === 0 || isbn13 === 0 || date_published === 0 || pages === "") {
            console.log("error");
        } else {
            const { error } = await supabase
                .from('books')
                .update(formDataUpdate)
                .eq("id", bookDetail.id)
            if (error) {
                console.log(error)
            }else{
                setBookDetail(formDataUpdate)
            }
        }

        closeUpdate();
        fetchData();
        setShowModalDetails(!showModalDetails);
    };

    return (
        <div className="details-container">
            <div className="details-modal">
                <div className="details-info-container1">
                    <img className="img-details" src={bookDetail.image} alt="book detail image" />
                    <button className="button-details" onClick={handleSubmitUpdate}>Save</button>
                    <button className="button-details" onClick={closeUpdate}>Cancel</button>
                </div>
                <div className="details-info-container2">
                    <input onChange={handleInputUpdate} type="text" name="title" value={formDataUpdate.title} required />
                    <input onChange={handleInputUpdate} type="text" name="authors" value={formDataUpdate.authors} required />
                    <input onChange={handleInputUpdate} type="text" name="subjects" value={formDataUpdate.subjects} required />
                    <input onChange={handleInputUpdate} type="number" name="isbn13" value={formDataUpdate.isbn13} required />
                    <input onChange={handleInputUpdate} type="text" name="publisher" value={formDataUpdate.publisher} required />
                    <input onChange={handleInputUpdate} type="text" name="date_published" value={formDataUpdate.date_published} required />
                    <input onChange={handleInputUpdate} type="number" name="pages" value={formDataUpdate.pages} required />
                    <textarea onChange={handleInputUpdate} type="text" name="synopsis" value={formDataUpdate.synopsis} required />
                </div>
            </div>
        </div>
    )
}

export default UpdateBook;