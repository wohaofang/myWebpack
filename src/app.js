import "./css/common.css"
import Layer from './components/layer/index.js'

const App = function(){
    console.log(layer)
    var dom =document.getElementById('app');
    var layer = new Layer()

    dom.innerHTML = layer.ejs({
        name: 'john',
        arr:['apply','xiaomi','oppo']
    })
    dom.innerHTML += layer.tpl
    
}

new App()