'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from '../meta/context'
import { useRouter } from 'next/navigation'

interface CartItem {
  id: number
  name: string
}

export default function CartPage() {
  const { setCart } = useCart()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [newItemName, setNewItemName] = useState('')

const recognizedItems = ['A', 'hoNey', 'meanacIng', 'cReepy', 'SatuRn']
const itemNames = ['Bad key machine', 'Fly Honey', 'Kraken Plushie', 'Ego Orb', 'Mr. Saturn']

  const addItem = (e: React.FormEvent) => {
    e.preventDefault()
    if (recognizedItems.indexOf(newItemName.trim()) != -1) {
      setCartItems([...cartItems, { id: Date.now(), name: itemNames[recognizedItems.indexOf(newItemName.trim())] }])
      setNewItemName('')
    }
    const addCart: string[] = []
    cartItems.forEach((item) => {addCart.push(item.name)})
    setCart(addCart)
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }
  const router = useRouter()
  const checkout = () => {
    router.push("/checkout")
  }

  return (
    <div className="h-screen bg-cover bg-center" style={{backgroundImage: "url('images/earthboundBackground.gif')"}}>
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className='font-[family-name:var(--font-saturn)]'>Shopping Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={addItem} className="flex space-x-2 mb-4">
            <Input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder="Enter 2nd word from the item description"
              className="flex-grow font-[family-name:var(--font-saturn)]"
            />
            <Button type="submit" className='font-[family-name:var(--font-saturn)]'>
              <Plus className="mr-2 h-4 w-4 font-[family-name:var(--font-saturn)]" /> Add
            </Button>
          </form>
          <ul className="space-y-2">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center bg-gray-100 p-2 rounded font-[family-name:var(--font-saturn)]">
                <span>{item.name}</span>
                <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
        <Button className="w-full font-[family-name:var(--font-saturn)] bg-white" onClick={checkout}>Cart</Button>
        </CardFooter>
      </Card>
    </div>
    </div>
  )
}

