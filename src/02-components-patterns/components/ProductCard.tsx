import React from "react"
import styles from "../../styles/styles.module.css"
import noImage from "../assets/no-image.jpg"
import { useProduct } from "../hooks/useProduct"

interface Props {
  product: Product
  children?: React.ReactElement | React.ReactElement[]
}

interface Product {
  id: string
  title: string
  img?: string
}

export const ProductImage = ({ img = "" }) => {
  return (
    <img
      className={styles.productImg}
      src={img ? img : noImage}
      alt="Coffee mug"
    />
  )
}

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>
}

interface ProductButtonsProps {
  counter: number
  increaseBy: (value: number) => void // increaseBy is a function that takes a number and returns void
}

export const ProductButtons = ({
  counter,
  increaseBy,
}: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  )
}

export const ProductCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProduct()

  return (
    <div className={styles.productCard}>
      {children}
      {/* <ProductImage img={product.img} />
      <img
        className={styles.productImg}
        src={noImage}
        alt="Coffee mug"
      /> 
      <ProductTitle title={product.title} />
      <span className={styles.productDescription}>Coffee Mug</span> 
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
    </div>
  )
}
