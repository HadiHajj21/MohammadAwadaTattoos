import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function TattooMachine() {
    const group = useRef();

    const { scene } = useGLTF('/models/tattoo-machine.glb');

    useFrame((state, delta) => {
        if (!group.current) return;

        // Slow luxury-style rotation
        group.current.rotation.y += delta * 0.16;

        // Subtle floating motion
        group.current.position.y =
            Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
    });

    return (
        <group
            ref={group}
            scale={2.5}
            rotation={[0.15, -0.35, -0.4]}
        >
            <primitive
                object={scene}
            />
        </group>
    );
}

useGLTF.preload('/models/tattoo-machine.glb');