export default function Key(props) {
    return (
        <button
            className='letter-key'
            name={props.keyValue}
            onClick={checkLetter}
        >
            {props.keyValue}
        </button>
    )
}
