import { useCamera, Text } from "@react-three/drei";

const Sphere = ({ position = [1, 1, 1], radius = 1, color = "red", label = "", rotation = 0}) => {
    return (
        <mesh position={position} lookAt={[0, 0, 0]}>
            <Text
                color="black" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[0, radius + 0.5,0]}
                rotation={[0, rotation, 0]}
                scale={[0.5,0.5, 0.5]}
            >
                {label}
            </Text>
            <sphereGeometry args={[radius, 32, 16]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

export default Sphere;