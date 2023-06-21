
import ProductCard from "../components/ProductCard"

const productData = [
  {id: 1, title: 'Gucci Bag', price: 3000, image: 'gucci-bag.jpg'},
  {id: 2, title: 'Nike Shoe', price: 4000, image: 'nike-shoe.jpg'},
  {id: 3, title: 'Dior Cap', price: 5000, image: 'dior-cap.jpg'}
]

const Products = () => {



  return (
    <div>
      <h1>Awesome products</h1>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '3rem'}}>
        {productData.map((item, index, array) =><ProductCard product={item} key={index} />)}
      </div>
      
    </div>

  )
}

export default Products