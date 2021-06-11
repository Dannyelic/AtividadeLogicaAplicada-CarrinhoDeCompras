const produtos = require("./database");
produtos.sort((a, b) => a.preco - b.preco)
const read = require('readline-sync')
const carrinho = []
const hoje = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const dataHoje = hoje.toLocaleDateString('pt-BR', options)

console.log('-----------------------------------------------------')
console.log('                 Carrinho de Compras                 ')
console.log('                  Dannyeli Cristina                  ')
console.log('-----------------------------------------------------')
const encontrarProdutos = read.question("Voce deseja encontrar produtos por categoria? (S/N)")
if(encontrarProdutos.toLocaleUpperCase() == "S"){
  console.log('----------------------------------------------------')
  console.log('Essas são as categorias disponíveis:')
  console.log('alimento, bebida, casa, higiene, informatica')
  console.log('----------------------------------------------------')

  const qualProduto = read.question("Qual categoria voce escolhe?")

  const porCategoria = produtos.filter(produto => produto.categoria === qualProduto)

  console.table(porCategoria)
  
}else if(encontrarProdutos.toLocaleUpperCase() == "N"){
  console.log("Esses são os produtos disponíveis:")
  console.table(produtos)
}
const array = new Array

class Pedido {
    constructor(array){
        this.productor = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0
    }
}

const compras = () => {
    productId = parseInt(read.question('Insira o ID do produto desejado: '))

    for (i=0; 1<1000; i++){
        findId = produtos.find(item => item.id == productId)
        if (findId){
            break;  
        }else{
            productId = parseInt(read.question('Insira um ID valido!'))
        }

    }

quantidadeItem = parseInt(read.question('Quantos produtos deseja inserir no seu carrinho?'))
for (i=0; 1<1000; i++){
    if(quantidadeItem >0){
      console.log('---------------------------------------------------------')
      console.log('                   Incluido no carrinho!                 ')
      console.log('---------------------------------------------------------')
        break
    }else{
        quantidadeItem = parseInt(read.question('Quantidade invalida!'))
    }
}
    const produtosCarrinho = {...findId, quantidade : quantidadeItem}
    carrinho.push(produtosCarrinho)

    const continueComprando = read.question("Deseja continuar comprando? (S/N)")
    const continueComprandoFormato = continueComprando.toLocaleUpperCase()
    if(continueComprandoFormato == "N"){
        console.log('---------------------------------------------------------')
        console.log('                     Pedido encerrado!                        ')
        console.log('---------------------------------------------------------')
        cupom = parseInt(read.question('Digite o valor do desconto: '))
        console.log(`Você possui ${cupom}% de desconto.`)
        }else{
            compras()
        }
        for (i=0; i < 1000 ; i++){
          if(cupom >15 || cupom < 0){
            cupom = parseInt(read.question('Cupom inválido!'))
          } else{
            break;
          }
        }
    }
    compras()
    class Order {
      constructor(carrinho){
        this.newProducts = carrinho
        this.subTotal = 0
      }
      calcSubTotal(){
        this.subTotal = this.newProducts.reduce((acumulador,item) => acumulador +(item.preco*item.quantidade),0) 
      }
    }

    const order = new Order(carrinho)
    console.table(order.newProducts)
    order.calcSubTotal()
    console.log(`Subtotal: R$ ${order.subTotal.toFixed(2)}`)
    const desconto = order.subTotal * (cupom/100)
    console.log(`Desconto: R$ ${desconto.toFixed(2)}`)

    console.log('---------------------------------------------------------')
    console.log('---------------------------------------------------------')
    console.log('                   Pedido gerado!                        ')
    console.log('---------------------------------------------------------')
    console.log(`Seu pedido tem ${quantidadeItem} itens.`)
    const total = order.subTotal - desconto
    console.log(`Total a pagar: R$ ${total.toFixed(2)}`)
    console.log('---------------------------------------------------------')
    console.log(        `Pedido finalizado em ${dataHoje}.                `)
    console.log('---------------------------------------------------------')
    console.log('              Aproveite suas compras!                    ')
    console.log('---------------------------------------------------------')



