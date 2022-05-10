    function cifrar () {
        
        var texto = document.getElementById("texto");
        var textoD = document.getElementById("textoD");
                var palabras = texto.value
                var codificado = palabras
                .replace(/e/g,"enter")
                .replace(/i/g,"imes")
                .replace(/a/g,"ai")
                .replace(/o/g,"ober")
                .replace(/u/g,"ufat")
                textoD.value = codificado
                texto.value = ""
            }
    function descifrar () {

             var texto = document.getElementById("texto");

             var textoD = document.getElementById("textoD");

             var palabras = texto.value;

             var descifrado = palabras
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u")

        textoD.value = descifrado
        texto.value = ""
    }

    function copy(){
        let textoD = document.getElementById("textoD");
        let codificado = textoD.select()
        document.execCommand("copy")
        alert("Texto copiado!!");
    }
    function desapa() {

        var desapa = document.getElementById("desapa");
        desapa.style.display = "none"
    }

function leer(textoD){
    var textoD = document.getElementById("textoD").value
    speechSynthesis.speak(new SpeechSynthesisUtterance(textoD));
};

    function clickWow(){
        desapa();
        cifrar();
    }

    var canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    var w = canvas.width = document.body.offsetWidth;
    var h = canvas.height = document.body.offsetHeight;

    ctx.fillStyle = "#000";
    ctx.fillRect (0,0,w,h)

    const cols = Math.floor(w/20)+1
    const yPos = Array(cols).fill(0)

    function matrix(){
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);
        
        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';
        
        yPos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 50;
        ctx.fillText(text, x, y);
        if (y > 50 + Math.random() * 10000) yPos[ind] = 0;
        else yPos[ind] = y + 20;
        });
       
    }
    setInterval (matrix,50)