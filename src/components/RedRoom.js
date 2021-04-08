import BlueRoom from './BlueRoom'

export default function RedRoom(props){
    return (
        <div className="red-room">
            <p>Red Room</p>
            <p>{props.children}</p>
            <BlueRoom phrase={props.phrase} children={props.children}/>
        </div>
    );
}

