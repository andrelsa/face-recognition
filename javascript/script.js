
function init() {
    const video = document.getElementById('video')
    const canvas = document.getElementById('canvas')            
    //pegando o contexto do canvas
    const context = canvas.getContext('2d')            
    //responsavel por buscar as caracteristicas da imagem
    const tracker = new tracking.ObjectTracker('face')
    //sera pego a face do usuario pra ser colocado na camera
    tracking.track('#video', tracker, { camera: true })
    
    tracker.on('track', event => {            
        context.clearRect(0, 0, canvas.width, canvas.height)
        event.data.forEach(rect => {
            //cor do retangulo que fica no rosto
            context.strokeStyle = '#ff0000'
            //expessura da linha
            context.lineWidth = 2
            //desenhando o retangulo
            context.strokeRect(rect.x, rect.y, rect.width, rect.height)
            //Mostrar a informação de onde esta sendo reconhecido o retangulo no eixo X
            //Com isso é possível escrever um texto sobre a imagem
            context.fillText(`x: ${rect.x}, w: ${rect.width}`, rect.x+rect.width+20, rect.y+20)
            //Mostrar a informação de onde esta sendo reconhecido o retangulo no eixo Y
            //Com isso é possível escrever um texto sobre a imagem
            context.fillText(`y: ${rect.y}, h: ${rect.height}`, rect.x+rect.width+20, rect.y+40)
        })
    })
}
// Quando carregar a pagina será chamado a função
window.onload = init()  
