const { HDNodeWallet } = require("ethers")
require('dotenv').config()

const phrase = process.env.phrase
const limit = 20

for (let index = 0; index < limit; index++) {
    const wallet = HDNodeWallet.fromPhrase(phrase, '', `m/44'/60'/${index}'/0/0`)
    console.log(wallet.address)
}