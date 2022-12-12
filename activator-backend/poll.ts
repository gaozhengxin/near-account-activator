const cli = require('./.graphclient');

const query = `
query poll($startBlock: String!) {
  activationRequests(
    where: { blockNumber_gte: $startBlock }
    orderBy: blockNumber
    orderDirection: asc
    first: 2
  ) {
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

export async function poll(startBlock: number, callback: (req: any) => void) {
  for (; ;) {
    let result = await cli.execute(query, { "startBlock": "" + startBlock })
    let reqs = result.data.activationRequests
    if (reqs !== null && reqs.length > 0) {
      reqs.map(callback)
      let last = reqs[reqs.length - 1].blockNumber
      if (last === startBlock) {
        startBlock++
      } else {
        startBlock = last
      }
    }
    setTimeout(() => { }, 10000)
  }
}

//poll(36500000, (result: any) => { console.log(JSON.stringify(result)) })