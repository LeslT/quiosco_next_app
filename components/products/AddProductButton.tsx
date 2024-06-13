"use client"

import { Product } from "@prisma/client"
import { useStore } from "@/src/store"

type AddProductButton = {
    product: Product
}

export default function AddProductButton({product}: AddProductButton) {

    const addToOrder = useStore((state)=> state.addToOrder)
  return (
    <button 
    onClick={()=> addToOrder(product)}
    type="button" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer">Agregar</button>
  )
}
