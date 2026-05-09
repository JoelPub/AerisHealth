import React, { useEffect, useState } from 'react'
import { fetchProduct, addToCart } from '../mockApi'

export default function PDP(){
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [variant, setVariant] = useState(null)
  const [qty, setQty] = useState(1)
  const [cartCount, setCartCount] = useState(0)
  const [adding, setAdding] = useState(false)

  useEffect(()=>{
    const load = async ()=>{
      try{
        setLoading(true)
        const p = await fetchProduct()
        setProduct(p)
        setVariant(p.skus[0].id)
      }catch(e){
        setError('Failed to load product')
      }finally{setLoading(false)}
    }
    load()
  },[])

  if(loading) return <div className="pdp">Loading...</div>
  if(error) return <div className="pdp error">{error}</div>
  if(!product) return null

  const selectedSku = product.skus.find(s=>s.id===variant)
  const inStock = selectedSku.stock > 0

  const handleAdd = async ()=>{
    if(qty < 1) return
    if(qty > selectedSku.stock){
      alert('Out of stock')
      return
    }
    try{
      setAdding(true)
      await addToCart({sku: selectedSku.id, qty})
      setCartCount(c=>c+qty)
      alert('Added to cart')
    }catch(e){
      alert('Add to cart failed')
    }finally{setAdding(false)}
  }

  return (
    <div className="pdp">
      <div className="media">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="info">
        <h1>{product.name}</h1>
        <p className="price">¥{selectedSku.price}</p>
        <p className="stock">{inStock? `In stock (${selectedSku.stock})` : 'Out of stock'}</p>

        <div className="variants">
          {product.dimensions.map(dim=> (
            <div key={dim.name} className="dim">
              <label>{dim.name}</label>
              <select onChange={e=>setVariant(e.target.value)} value={variant}>
                {product.skus.map(s=> (
                  <option key={s.id} value={s.id}>{s.attrs.join(' / ')}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="qty">
          <label>Qty</label>
          <input type="number" min="1" max={selectedSku.stock} value={qty} onChange={e=>setQty(Number(e.target.value))} />
        </div>

        <button disabled={!inStock || adding} onClick={handleAdd}>{adding? 'Adding...':'Add to cart'}</button>

        <div className="cart">Cart: {cartCount}</div>

        <div className="desc">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}
