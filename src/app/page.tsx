import axios from "axios"

export default async function Home() {
  const res = await axios.get('https://dummyjson.com/products');
  const products = res.data.products;
  return (
    <div className="grid gap-5 p-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
      {products.map((product: any) => (
        <div key={product.id} >
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt={product.title} />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}
