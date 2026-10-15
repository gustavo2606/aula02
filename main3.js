var temperatura = 31
var tipoTemperatura = "C" //ou "F"
var temperaturaConvertida = 0 

if(tipoTemperatura == "C"){
    console.log("você escolheu Celsius!")
    temperaturaConvertida = ((temperatura * 1.8) + 32)
}else{
     console.log("você escolheu Fahrenheit!")
      temperaturaConvertida = ((temperatura - 32 ) * (5/9))
}
console.log("o valor convertido é:"+ temperaturaConvertida)
