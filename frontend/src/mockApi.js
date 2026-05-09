const mock = {
  id: 1,
  name: 'Demo Product',
  image: 'https://via.placeholder.com/400',
  description: 'This is a demo product used for the PDP coding test.',
  dimensions: [ { name: 'Color' }, { name: 'Size' } ],
  skus: [
    { id: 'sku-red-s', attrs: ['Red','S'], price: 100, stock: 5 },
    { id: 'sku-red-m', attrs: ['Red','M'], price: 110, stock: 2 },
    { id: 'sku-blue-s', attrs: ['Blue','S'], price: 105, stock: 0 },
  ]
}

export async function fetchProduct(){
  await new Promise(r=>setTimeout(r,300))
  return mock
}

export async function addToCart({sku, qty}){
  await new Promise(r=>setTimeout(r,200))
  if(Math.random() < 0.1) throw new Error('random fail')
  return { ok: true }
}
