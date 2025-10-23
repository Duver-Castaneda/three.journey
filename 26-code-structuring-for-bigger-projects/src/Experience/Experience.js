import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import Camera from './Camera'
import * as THREE from 'three'
import Renderer from './Renderer'
import World from './World/world.js'
import Resources from './World/Resources.js'
import Sources from './Sources.js'
import Debug from './Utils/Debug.js'
let instance = null
export default class Experience {
    constructor(canvas) {

        if (instance){
            return instance
        }
        instance = this
        //global access
window.experience = this

       // console.log('here starts a great experience')
       this.debug = new Debug()
       this.canvas = canvas

       this.scene = new THREE.Scene()

       this.sizes = new Sizes()
       this.time = new Time()
          this.resources = new Resources(Sources)
       this.camera = new Camera()

       this.renderer = new Renderer()
       this.world = new World()
    
  
        this.sizes.on('resize', () => {
          this.resize()
        },

        
    )

this.time.on('tick', () => {
        this.update()
    })

    }
    resize() {
        // console.log(this)
        // console.log('resize occured')s
        this.camera.resize()
           this.renderer.resize()
    }

    update() {
      this.camera.update()
      this.world.update()
      this.renderer.update()
    }

    destroy() {
        this.sizes.off('sizes')
        this.time.off('tick')


        this.scene.traverse((child) => {
            if(child instanceof THREE.Mesh) {
                child.geometry.dispose()

                for(const key in child.material) {
                    const value = child.material[key]
                 if(value && typeof value.dispose === 'function') {
                    value.dispose()
                 }
                }
            }
        })
        this.camera.controls.dispose()
        this.renderer.instance.dispose()

        if(this.debug.active){
            this.debug.ui.destroy()
        }
    }


}