const func = async (hre: any) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("SakutaroPoem", {
    from: deployer,
    log: true,
  });
};

export default func;
module.exports.tags = ["SakutaroPoem"];
