import React from "react"
import styles from "../../styles/styles.module.css"
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/ProductCard"

const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
}

function ShoppingPage() {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage
