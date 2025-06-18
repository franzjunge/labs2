import { useState } from "react";

const Create = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [title, setTitle] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        const user = {
            first: first,
            last: last,
            title: title
        };

        fetch("http://localhost:8000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(user)
        });

        setFirst("");
        setLast("");
        setTitle("");
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    First name: <input type="text" required value={first} onChange={(e) => setFirst(e.target.value)} />
                </label>
                <br/>
                <label>
                    Last name: <input type="text" required value={last} onChange={(e) => setLast(e.target.value)} />
                </label>
                <br/>
                <label>
                    Title: 
                    <select value={title} onChange={(e) => setTitle(e.target.value)}>
                        <option value="mr">Mr</option>
                        <option value="mrs">Mrs</option>
                        <option value="dr">Dr</option>
                    </select>
                </label>
                <br/>
                <button>add user</button>
            </fieldset>
        </form>
        </>
    );
}

export default Create;