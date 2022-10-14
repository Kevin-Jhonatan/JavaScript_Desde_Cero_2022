document.getElementById("btn").addEventListener("click", function()
{
    let txt = document.getElementById("input-text").value;
    verificarpalidromo(txt);
});

function verificarpalidromo(txt){
    let txt_new = txt.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase();
    let len = txt_new.length;
    let mitad = Math.floor( len/2 );
    let resultado = document.getElementById("resultado");
    for (let i=0; i < mitad ; i++)
    {
        if(txt_new[i] !== txt_new[len-1-i])
        {
            return resultado.textContent="no , no es palidromo";
        }
        return resultado.textContent="si , es palidromo"
    }
}
