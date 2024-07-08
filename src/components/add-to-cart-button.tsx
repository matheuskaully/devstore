'use client'

import { useCart } from '@/contexts/cart-context'

export interface AddToCardButtonProps {
  productId: number
}

export default function AddToCartButton({ productId }: AddToCardButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      onClick={handleAddProductToCart}
      type="button"
      className="mt-8 h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
