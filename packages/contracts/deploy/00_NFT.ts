const func = async (hre: any) => {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("NFT", {
    from: deployer,
    args: ["NFT Title", "SYMBOL", "url"],
    log: true,
  });
};

export default func;
module.exports.tags = ["NFT"];
