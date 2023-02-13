import * as THREE from 'three';

interface Props {
	color: THREE.ColorRepresentation;
}

export function Cube({ color }: Props) {
	const geometryBox = new THREE.BoxGeometry(5, 5, 5);
	const material = new THREE.MeshBasicMaterial({ color });
	const cube = new THREE.Mesh(geometryBox, material);

	return cube;
}
