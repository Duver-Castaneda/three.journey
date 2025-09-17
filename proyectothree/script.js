import * as THREE from 'three'
const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000})
const canvas = document.querySelector('canvas.webgl')
const mesh = new THREE.Mesh(geometry,material)
const sizes ={
    widht: 800,
    height: 600
}
scene.add(mesh)
const camera = new THREE.PerspectiveCamera(75,sizes.widht / sizes.height)
camera.position.z = 3
scene.add(camera)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.widht , sizes.height)
renderer.render(scene,camera)