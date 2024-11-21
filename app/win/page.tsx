'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { Input } from "postcss";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { useCart } from "../meta/context";

export default function Page() {
    const { cart } = useCart()
    console.log(cart)
    return (
      <div className="h-screen bg-cover bg-center" style={{backgroundImage: "url('images/you won.jpg')"}}>
        <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className='font-[family-name:var(--font-saturn)]'>Bought</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {cart.map((item)=>(<li key={item} className="flex justify-between items-center bg-gray-100 p-2 rounded font-[family-name:var(--font-saturn)]"><span>{item}</span></li> ))}
          </ul>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
      </div>
    );
  }