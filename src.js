const { HDNodeWallet } = require("ethers")
require('dotenv').config()

const phrase = process.env.phrase
const limit = 60
for (let index = 0; index < limit; index++) {
    const wallet = HDNodeWallet.fromPhrase(phrase, '', `m/44'/60'/0'/0/${index}`)
    console.log(wallet.address)
}