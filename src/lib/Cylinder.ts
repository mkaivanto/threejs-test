import * as THREE from 'three';

interface Props {
	color: THREE.ColorRepresentation;
}

export function Cylinder({ color }: Props) {
	const geometry = new THREE.CylinderGeometry(0.5, 0.5, 8, 15);
	const material = new THREE.MeshBasicMaterial({ color });
	const cylinder = new THREE.Mesh(geometry, material);
	return cylinder;
}
