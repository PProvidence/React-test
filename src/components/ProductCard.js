
const ProductCard = ({product}) => {

  const addToCart = (item) => {
    console.log(item, 'item added to cart')
  }

  return (
    <div style={{border: '1px solid grey'}}>
      <p>{product.title} - {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
)}

export default ProductCard