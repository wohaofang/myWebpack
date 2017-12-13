import "./css/common.css"
import layer from './components/layer/index.js'

const App = function(){
    console.log(layer)
    var dom =document.getElementById('app');
    var layer = new layer()

    dom.innerHTML = layer.tpl
}

new App()