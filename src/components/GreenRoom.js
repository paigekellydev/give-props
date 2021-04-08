export default function GreenRoom(props) {
    const green = "GREEEEEEEN!"
    return (
        <div className="green-room">
            <p>Green Room</p>
            <p>{props.phrase} {props.test}</p>
        </div>
    );
}
