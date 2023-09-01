```
# Aptos CLI インストール
curl -fsSL "https://aptos.dev/scripts/install_cli.py" | python3

# Aptos devnet にアカウント作成 (.aptos/config.yaml が作られる)
aptos init
# 時間が経つと、devnet のアカウントが消えた… 定期的にハードフォークしている？

# テスト
aptos move test

# Aptos devnet にリソースアカウント作成を作成して、コントラクトを publish (Move.toml の source_address を更新しておく)
aptos move create-resource-account-and-publish-package --address-name sakutaro_poem --seed sakutaro
# -> https://explorer.aptoslabs.com/account/0x718f20ae37f309e0aa59fcbe38eb731b73f01aa1459a01d1e157f347c3c6db6d/modules/code/sakutaro_poem?network=devnet


```
