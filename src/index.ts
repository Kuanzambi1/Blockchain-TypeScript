import { Blockchain } from "./blockchain"

const dificuldade = Number(process.argv[2]) || 4
const blockchain = new Blockchain(dificuldade)

const numBlocos = Number(process.argv[3]) || 10
let chain = blockchain.chain

for(let i = 0; i <= numBlocos; i++) {
  const bloco = blockchain.criarBloco(`Bloco ${i}`)
  const mineInfo = blockchain.minerarBloco(bloco)
  if (mineInfo) {
    chain = blockchain.enviarBloco(mineInfo.blocoMinerado)
  }
}

console.log("_____ BLOCKCHAIN -----")
console.log(chain)

