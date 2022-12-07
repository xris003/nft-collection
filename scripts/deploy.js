async function main() {
    const nftmarket = await ethers.getContractFactory("nftmarket")
    const Nftmarket = await nftmarket.deploy()
    await Nftmarket.deployed()
    console.log("Contract deployed to address:", Nftmarket.address)
}
 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })