export default function Task({ name, editTask }) {
    return <>
        <li>
            <div>
                {name}
            </div>
            <button onClick={editTask("name")}>Edit</button>
            <button>Delete</button>
        </li>
    </>
}