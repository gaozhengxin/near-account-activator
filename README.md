#### Polygon contract address
`0x2De68366eF3F5cB580a210312CDa5adA218deb5c`

#### Query activation request
Subgraph: `thegraph.com/hosted-service/gaozhengxin/near-activator-on-polygon`

#### Run backend
Require `ts-node` version >= `10.9.1`
```bash
git clone https://github.com/gaozhengxin/near-account-activator
cd ./near-account-activator/activator-backend
npm i
```
Set Near operator account secret seed.
```bash
echo '<secret seed>' > ./.mnemonics
```
Set polygon operator private key.
```bash
echo '<private key>' > ./.private
```
Run script.
```bash
ts-node .
```