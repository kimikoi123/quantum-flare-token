const hre = require("hardhat");

async function main() {
  const QuantumFlareToken = await hre.ethers.getContractFactory("QuantumFlare");
  const quantumFlareToken = await QuantumFlareToken.deploy(100000000, 50);

  await quantumFlareToken.waitForDeployment();

  console.log("QuantumFlare Token deployed: ", quantumFlareToken.targetf);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
