'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";



export default function Page() {
  const router = useRouter()
  return (
    <div className="h-screen bg-cover bg-center" style={{backgroundImage: "url('images/earthboundBackground.gif')"}}>
      <Button onClick={()=>{router.push("/shop")}}>Enter Webpage</Button>
    </div>
  );
}