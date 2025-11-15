export function currency(v){
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(v)
}

export function formatDate(dstr){
  const d = new Date(dstr)
  return d.toLocaleDateString()
}
