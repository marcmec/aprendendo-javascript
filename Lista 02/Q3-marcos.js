//escrever o maior valor entre 3 valores digitados


function maiordetodos(valor1,valor2,valor3){
        if((valor1>valor2 && valor1>valor3)){
            
            console.log('O maior valor é o ' + `${valor1}`)
        } else if((valor2>valor1 && valor2>valor3)){

            console.log('O maior valor é o ' + `${valor2}`)
        } else if((valor3>valor1 && valor3>valor2)){

            console.log('O maior valor é o '+ `${valor3}`)
        }else{
            console.log('Os valores das variáveis respectivamente são: '+'\n' + 'valor1: ' + valor1 +'\n'+ 'valor2: '+valor2 +'\n'+ 'valor3: '+valor3)
        }

}

maiordetodos(5,7,7)// digite os valores correspondendes as constantes valor1, valor2, valor3 da função para validação