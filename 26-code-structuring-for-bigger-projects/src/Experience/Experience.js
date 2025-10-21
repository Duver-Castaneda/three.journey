import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import Camera from './Camera'
import * as THREE from 'three'
import Renderer from './Utils/Renderer'

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
       console.log(this.canvas)
       this.scene = new THREE.Scene()

       this.sizes = new Sizes()
       this.time = new Time()
       this.camera = new Camera()
       this.renderer = new Renderer()
  
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