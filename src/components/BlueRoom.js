import GreenRoom from './GreenRoom'

export default function BlueRoom(props) {
    return (
        <div className="blue-room">
            <p>Blue Room</p>
            <p>{props.phrase}</p>
            <GreenRoom test='UwU' phrase={props.phrase}/> 
        </div>
    );
}
