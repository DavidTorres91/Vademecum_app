const medicamentos = [
    {nombre:'abacabir'},
    {nombre:'albendazol'},
    {nombre:'beclometasona'},
    {nombre:'betametasona'},
    {nombre:'celecoxib'},
    {nombre:'cabergolina'},
    {nombre:'doxiciclina'},
    {nombre:'domperidona'},
    {nombre:'ergotamina'},
    {nombre:'econazol'},
    {nombre:'fluconazol'},
    {nombre:'fenazopiridina'},
    {nombre:'griseofulvina'},
    {nombre:'gabapentinahaloperidol'},
    {nombre:'heparina'},
    {nombre:'isoniazida'},
    {nombre:'ibuprofeno'},
    {nombre:'josamina'},
    {nombre:'ketoconazol'},
    {nombre:'ketorolaco'},
    {nombre:'lactulosa'},
    {nombre:'lamivudina'},
    {nombre:'metotrexato'},
    {nombre:'magaldrato'},
    {nombre:'nafazolina'},
    {nombre:'naproxeno'},
    {nombre:'omeprazol'},
    {nombre:'olanzapina'},
    {nombre:'pancuronio'},
    {nombre:'paracetamol'},
    {nombre:'quinina'},
    {nombre:'quetiapina'},
    {nombre:'racecadotrilo'},
    {nombre:'ranitidina'},
    {nombre:'secnidazol'},
    {nombre:'salbutamol'},
    {nombre:'tadalafilo'},
    {nombre:'tacrolimus'}]

const busca = document.getElementById("busca");
const resultado = document.getElementById("resultado");


const lee = ()=>{

    const texto = busca.value.toLowerCase();

    resultado.innerHTML = '';


    for(let medicamento of medicamentos){

        let nombre = medicamento.nombre.toLowerCase();
        

        if (nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
              <p>${medicamento.nombre}</p>
            `
        }

    }
    if (resultado.innerHTML === ''){
        resultado.innerHTML += `
            <p> Medicamento no encontrado. </p>
            `
    }
    
    
}

busca.addEventListener("keyup", lee)
