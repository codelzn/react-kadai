import {
	useGLTF,
	Environment,
	PresentationControls,
	Float,
	Html,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function Mb() {
	const computer = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
	)
	return (
		<>
			<Environment preset="city" />
			<color args={['#cccccc']} attach="background" />
			<PresentationControls
				global
				rotation={[0.13, 0.1, 0]}
				polar={[-0.4, 0.2]}
				azimuth={[-0.1, 0.75]}
				config={{
					mass: 2,
					tension: 400,
				}}
				snap={{ mass: 4, tension: 400 }}
			>
				<Float rotationIntensity={0.4}>
					<rectAreaLight
						width={2.5}
						height={1.65}
						intensity={65}
						color={'#ff6900'}
						rotation={[-0.1, Math.PI, 0]}
						position={[0, 0.55, -1.15]}
					/>
					<primitive
						scale={[1.5, 1.5, 1.5]}
						object={computer.scene}
						position-y={-1.2}
						rotation-x={0.13}
					>
						<Html
							transform
							wrapperClass="htmlScreen"
							distanceFactor={1.17}
							position={[0, 1.56, -1.4]}
							rotation-x={-0.256}
						>
							<iframe src="https://codelzn.com/" />
						</Html>
					</primitive>
				</Float>
			</PresentationControls>
		</>
	)
}

export default function Macbook() {
  return <Canvas>
    <Mb />
  </Canvas>
}