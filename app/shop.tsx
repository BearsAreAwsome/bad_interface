'use client'
//Base page template created by v0.
//Font by 
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bounce, toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type Product = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
}



const products: Product[] = [
  {
    id: 1,
    name: "Bad key machine",
    description: "Have a key that doesnt work? Well the bad key machine can fix it right up. 100% guarenteed to break on use.",
    price: 99.99,
    imageUrl: "/images/badKeyMachine.png?height=200&width=200"
  },
  {
    id: 2,
    name: "Fly Honey",
    description: "Delicious honey for flies. The favorite food of sentient piles of barf.",
    price: 34.99,
    imageUrl: "/images/flyHoney.png?height=200&width=200"
  },
  {
    id: 3,
    name: "Kraken Plushie",
    description: "A meanacing sea monster, now in plushie form. Enjoy playing with this much more friendly version of kraken. Warning. Small chance of being a real kraken.",
    price: 19.99,
    imageUrl: "images/kraken.png?height=200&width=200"
  },
  {
    id: 4,
    name: "Ego Orb",
    description: "A creepy orb that seems to have this expression stuck on its face. Why? No one knows. Please buy it. It's scaring us",
    price: 39.99,
    imageUrl: "/images/egoOrb.png?height=200&width=200"
  },
  {
    id: 5,
    name: "Mr. Saturn",
    description: "Mr. Saturn Boing. Very rare Zoom. Very Dakota!",
    price: 0,
    imageUrl: "/images/Clay_Mr_Saturn_Figure.png?height=200&width=200"
  }
]



export default function Page() {

  const router = useRouter()
  const backToStart = ()=>{
    router.push("/")
  }
  useEffect(() => {
  console.log("mount")
  const timer = setInterval(() => {
        console.log("test")
        let navBack = true;
        toast.info('Navigating back to start. Click to cancel', {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          onClick: ()=>{navBack = false},
          onClose: ()=>{if(navBack){backToStart()}}
          });
      }, 7000)
  return function cleanup() {
    console.log("cleanup")
    clearInterval(timer)
  }  
  })
  return (
    <div className="h-screen bg-cover bg-center" style={{backgroundImage: "url('images/earthboundBackground.gif')"}}>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center font-[family-name:var(--font-saturn)] text-xs">Welcome to Our Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col pl-12 pr--5 pt-10">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-saturn)] text-slate-100">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <p className="text-sm  font-[family-name:var(--font-saturn)] tracking-widest text-center text-slate-100">{product.description}</p>
                <p className="text-lg font-bold mt-2 font-[family-name:var(--font-saturn)] text-slate-100">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full font-[family-name:var(--font-saturn)] bg-white">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}