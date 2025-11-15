import { summary as SUMMARY, transactions as TRANSACTIONS, categories } from '../data/dummyData'

function wait(ms=400){
  return new Promise(r => setTimeout(r, ms))
}

export async function fetchSummary(){
  await wait(300)
  return SUMMARY
}

export async function fetchTransactions(){
  await wait(400)
  return TRANSACTIONS
}

export async function fetchCategories(type='expense'){
  await wait(100)
  return categories[type] || []
}

export async function createTransaction(tx){
  await wait(200)
  return { ...tx }
}

export async function deleteTransaction(id){
  await wait(150)
  return true
}
