import { useState , ChangeEvent, FormEvent } from "react";

type FormData = {
    name: string,
    email: string;
    message: string;
};

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    // return (
    //     <div>
    //         <h1 className="section-title">Contact Me</h1>
    //         <form onSubmit={handleSubmit} className="form_section">
    //             <div className="name_email_message">
    //                 <div className="name_email">
    //                     <div className="input">
    //                         <label htmlFor="name">Name:</label>
    //                         <input
    //                             type="text"
    //                             id="name"
    //                             name="name"
    //                             value={formData.name}
    //                             onChange={handleChange}
    //                             required
    //                         />
    //                     </div>
    //                     <div className="input">
    //                         <label htmlFor="email">Email:</label>
    //                         <input
    //                             type="email"
    //                             id="email"
    //                             name="email"
    //                             value={formData.email}
    //                             onChange={handleChange}
    //                             required
    //                         />
    //                     </div>
    //                 </div>
    //                 <div className="input">
    //                     <label htmlFor="message">Message:</label>
    //                     <textarea
    //                         id="message"
    //                         name="message"
    //                         value={formData.message}
    //                         onChange={handleChange}
    //                         required
    //                     />
    //                 </div>
    //             </div>
    //             <button type="submit" className="button_primary">Submit</button>
    //         </form>
    //     </div>
    // )

    
    return (
        <div className="contact">
            <h2 className="section-title">Contact Me</h2>
            <form onSubmit={handleSubmit} className="form_section">
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="NAME"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder="MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="button_primary">Submit</button>
            </form>
        </div>
    )
}