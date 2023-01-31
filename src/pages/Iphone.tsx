import {
	useGLTF,
	Environment,
	PresentationControls,
	Float,
	Html,
	Center,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function Ip() {
	const phone = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf'
	)
	return (
		<>
			<Environment preset="forest" />
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
					<Center>
						<primitive scale={[1.5, 1.5, 1.5]} object={phone.scene}>
							<Center>
								<Html
									transform
									wrapperClass="spScreen"
									distanceFactor={1.17}
									position={[0.17, 1.3, 0.01]}
								>
									<iframe src="https://codelzn.com/" />
								</Html>
							</Center>
						</primitive>
					</Center>
				</Float>
			</PresentationControls>
		</>
	)
}

export default function Iphone() {
	return (
		<Canvas>
			<Ip />
		</Canvas>
	)
}
