import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import Camera from './Camera'
import * as THREE from 'three'
import Renderer from './Renderer'
import World from './World/world.js'
import Resources from './World/Resources.js'
import Sources from './Sources.js'
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
      this.renderer.update()
    }


}