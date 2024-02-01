export default function TabButton ({children, onSelect }) {



    return (
    <li className="li">
        <button onClick={onSelect} className="buttonservice">{children}</button>
    </li>
    )
}