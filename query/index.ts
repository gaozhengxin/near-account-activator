//import { execute } from './.graphclient'
const cli = require('./.graphclient');

const query = `
{
  activationRequests(first: 5) {
    id
    near_account
    activationInfo_publicKey
    activationInfo_payer
    activationInfo_price
    activationInfo_status
    blockNumber
    blockTimestamp
  }
}
`

async function main() {
  const result = await cli.execute(query, {})
  // `result` is fully typed!
  console.log(JSON.stringify(result))
}

main()