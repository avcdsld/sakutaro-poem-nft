const func = async (hre: any) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const feeData = await hre.ethers.provider.getFeeData();
  const tokenURIContract = await deploy("TokenURI", {
    from: deployer,
    log: true,
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
    maxFeePerGas: feeData.maxFeePerGas,
    type: "0x2",
  });
  await deploy("SakutaroPoem", {
    from: deployer,
    args: [tokenURIContract.address],
    log: true,
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
    maxFeePerGas: feeData.maxFeePerGas,
    type: "0x2",
  });
};

export default func;
module.exports.tags = ["TokenURI", "SakutaroPoem"];
