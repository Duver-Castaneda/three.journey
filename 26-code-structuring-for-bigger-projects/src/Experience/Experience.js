import Sizes from './Utils/Sizes'
export default class Experience {
    constructor(canvas) {
        //global access
window.experience = this

       // console.log('here starts a great experience')
       this.canvas = canvas
       console.log(this.canvas)

       this.sizes = new Sizes()
    }
}