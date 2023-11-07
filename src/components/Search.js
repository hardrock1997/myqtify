import '../components/Search.css'

export default function Search({placeholderText}) {
    return (
        <div className="input_container">
        <input type="text" placeholder={placeholderText} className="input"/>
        <button className="search_button">🔎</button>
        </div>
    )
}