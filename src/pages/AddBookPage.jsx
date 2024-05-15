import { useState } from "react";
import supabase from "../utils/config";
import "../styles/pages/FavoritesPage.css"

const formInitialState = {
    title: "",
    image: "",
    synopsis: "",
    publisher: "",
    subjects: [],
    authors: [],
    isbn13: "",
    date_published: "",
    pages: "",
};

const AddBookPage = () => {
    const [formData, setFormData] = useState(formInitialState);

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === "authors" || name === "subjects") {
            setFormData({ ...formData, [name]: [value] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, image, synopsis, publisher, subjects, authors, isbn13, date_published, pages } = formData;
        if (title === "" || image === "" || synopsis === "" || publisher === "" || subjects.length === 0 || authors.length === 0 || isbn13 === 0 || date_published === 0 || pages === "") {
            console.log("error");
        } else {
            const { error } = await supabase
                .from('books')
                .insert(formData);
            if (error) {
                console.log(error)
            }
        }
    };

    return (
        <div className="addbookspage" >
            <form onClick={(e) => handleSubmit(e)} className="form-addbook">
                <label htmlFor="title">Title</label>
                <input onChange={handleInput} type="text" name="title" value={formData.title} required />
                <label htmlFor="image">Cover Picture</label>
                <input onChange={handleInput} type="text" name="image" value={formData.image} required />
                <label htmlFor="isbn13">ISBN13</label>
                <input onChange={handleInput} type="number" name="isbn13" value={formData.isbn13} required />
                <label htmlFor="synopsis">Synopsis</label>
                <input onChange={handleInput} type="text" name="synopsis" value={formData.synopsis} required />
                <label htmlFor="subjects">Subjects</label>
                <input onChange={handleInput} type="text" name="subjects" value={formData.subjects} required />
                <label htmlFor="authors">Author</label>
                <input onChange={handleInput} type="text" name="authors" value={formData.authors} required />
                <label htmlFor="publisher">Publisher</label>
                <input onChange={handleInput} type="text" name="publisher" value={formData.publisher} required />
                <label htmlFor="date_published">Publishing Date</label>
                <input onChange={handleInput} type="text" name="date_published" value={formData.date_published} required />
                <label htmlFor="pages">Pages</label>
                <input onChange={handleInput} type="number" name="pages" value={formData.pages} required />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default AddBookPage;