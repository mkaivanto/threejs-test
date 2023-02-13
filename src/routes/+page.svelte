<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { Cube } from '$lib/Cube';
	import { Sphere } from '$lib/Sphere';
	import { Cylinder } from '$lib/Cylinder';
	import { Cone } from '$lib/Cone';
	let canvas: Element;
	const scene = new THREE.Scene();

	//Cube
	const cube = Cube({ color: 0xb4b4fc });
	scene.add(cube);

	//Sphere
	const sphere = Sphere({ color: 0xfeff23, radius: 3 });
	sphere.position.x += 10;
	scene.add(sphere);

	const sphere2 = Sphere({ color: 0xea3076, radius: 1 });
	sphere2.position.x = -10;
	scene.add(sphere2);

	const cylinder = Cylinder({ color: 0x7eff5a });
	cylinder.position.y += 4;
	cylinder.position.x -= 5;
	scene.add(cylinder);

	const cone = Cone({ color: 0xe72200 });
	cone.position.y -= 4;
	cone.position.x -= 4;
	scene.add(cone);

	//light
	/*const light = new THREE.PointLight(0xffffff, 1, 100);
	light.position.set(0, 5, 5);
	scene.add(light);
*/
	// Camera
	const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 100);
	camera.position.z = 20;
	scene.add(camera);

	//Render
	onMount(() => {
		const renderer = new THREE.WebGLRenderer({ canvas });
		renderer.setSize(800, 600);
		renderer.render(scene, camera);

		const loop = () => {
			renderer.render(scene, camera);
			window.requestAnimationFrame(loop);
			cube.rotateY(0.01);
			cube.rotateX(0.01);
			cube.position.z -= 0.005;
			sphere.position.z -= 0.02;
			sphere.position.x -= 0.01;
			sphere.position.y += 0.03;
			cylinder.rotateX(0.02);
			sphere2.position.y -= 0.005;
			sphere2.position.x -= 0.005;
			cone.rotateX(0.05);
			cone.rotateY(0.01);
			cone.position.x += 0.005;
			cone.position.z += 0.008;
			camera.position.z += 0.01;
		};
		loop();
	});
</script>

<div>
	<canvas bind:this={canvas} />
</div>
