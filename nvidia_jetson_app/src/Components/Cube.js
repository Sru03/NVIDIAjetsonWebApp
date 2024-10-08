const Cube = ({position = [0, 0 , 0], color = "red"}) => {

    return (
    <mesh position={position}> 
        <boxGeometry/>
        <meshStandardMaterial color={color}/>
    </mesh>
    );
}

export default Cube;