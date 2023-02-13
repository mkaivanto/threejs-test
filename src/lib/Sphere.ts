import * as THREE from 'three';

interface Props {
	color: THREE.ColorRepresentation;
	radius?: number;
}

export function Sphere({ color, radius }: Props) {
	const geometrySphere = new THREE.SphereGeometry(radius || 3, 32, 32);
	const materialSphere = new THREE.MeshBasicMaterial({ color });
	const sphere = new THREE.Mesh(geometrySphere, materialSphere);

	return sphere;
}
