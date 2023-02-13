import * as THREE from 'three';

interface Props {
	color: THREE.ColorRepresentation;
}

export function Cone({ color }: Props) {
	const geometry = new THREE.ConeGeometry(2, 5, 20);
	const material = new THREE.MeshBasicMaterial({ color });
	const cone = new THREE.Mesh(geometry, material);
	return cone;
}
