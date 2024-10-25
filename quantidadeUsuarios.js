import { getCSS,  tickConfig } from "./common.js"

async function quantidadeUsuarios(){
  const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()
  const nomeDasRedes = Object.keys(dados)
  const quantidadeUsuarios = Object.values(dados)

  const data = [
    {
      x: nomeDasRedes,
      y: quantidadeUsuarios,
      type: 'bar'
      marker: {
          color: getCSS('--primary-color')
      }
    }
  ]

const layout = {
  plot_bgcolor: getCSS('--bg-color'),
  paper-bgcolor: getCSS('--bg-color'),
  title: {
    text: 'Redes Sociais com mais usuários no mundo',
    x: 0,
    font:{
      color: getCSS('--primary-color'),
      family: getCSS('--font'),
      size: 30
    }
  },
  xaxis: {
    tickfont: tickConfig,
    title: {
      text: 'nome das redes sociais',
      font: {
          color: getCSS('--secundary-color')
      }
    } 
  },
  yaxis: {
     tickfont: tickConfig,
     title: {
      text: 'bilhõees de usuários ativos',
      font: {
          color: getCSS('--secundary-color')
      }
  }
}

  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico,  data,  layout)
}

quantidadeUsuarios()
