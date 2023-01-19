function checkCashRegister(price, cash, cid) {
  let obj={
    'PENNY':0.01,
    'NICKEL':0.05,
    'DIME':0.10,
    'QUARTER':0.25,
    'ONE':1,
    'FIVE':5,
    'TEN':10,
    'TWENTY':20,
    'ONE HUNDRED':100
  }
  let change=[];
  let diff=cash-price; console.log('diff =', diff)
  let i=cid.reverse().findIndex(item=>obj[item[0]]<=diff)
  
  while(i<cid.length && diff){
    if(cid[i][1]<=diff){
      diff=Math.round((diff-cid[i][1])*100)/100;
      change.push(cid[i])
    }
    else{
      let sum=0
      while(diff && obj[cid[i][0]]<=diff&&cid[i][1]){
        sum+=obj[cid[i][0]]
        diff=Math.round((diff-obj[cid[i][0]])*100)/100;
        cid[i][1]-=obj[cid[i][0]]
      }
      if(sum>0) change.push([cid[i][0],sum])
    }
    i++
  }
  if(diff!==0) return {status:"INSUFFICIENT_FUNDS",change:[]}
  if(i===cid.length && cid[0][1]===0) return {status:"CLOSED",change:cid.reverse()}
  return {status:"OPEN",change:change}
}
