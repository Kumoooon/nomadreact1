function Button(props) {
    return <button className="bg-pink-300 text-white p-1" onClick={props.onClick}>{props.text}</button>
}

export default Button;