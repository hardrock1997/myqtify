import '../components/Search.css'

export default function Search() {
    return (
        <div className="input_container">
        <input type="text" placeholder="Search a album of your choice" className="input"/>
        <button className="search_button">🔎</button>
        </div>
    )
}