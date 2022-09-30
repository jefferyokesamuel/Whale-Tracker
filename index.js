const ethers = require('ethers')

const rpcURL = "https://cloudflare-eth.com"
const provider = new ethers.providers.JsonRpcProvider(rpcURL)

const CONTRACT_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
const CONTRACT_ABI = 

const contract = new ethers.Contract(CONTRACT_ADDRESS, ,provider)

const main = async () => {
    
    const block = await provider.getBlockNumber()
    console.log(block)
    console.log('Program running');
}

main()