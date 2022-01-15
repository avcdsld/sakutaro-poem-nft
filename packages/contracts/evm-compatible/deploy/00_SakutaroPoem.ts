const func = async (hre: any) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const tokenURIContract = await deploy("TokenURI", {
    from: deployer,
    log: true,
  });
  await deploy("SakutaroPoem", {
    from: deployer,
    args: [tokenURIContract.address],
    log: true,
  });
};

export default func;
module.exports.tags = ["TokenURI", "SakutaroPoem"];
