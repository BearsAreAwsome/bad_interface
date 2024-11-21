'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSound } from "./sound";



export default function Page() {
  const router = useRouter()
  const {play} = useSound("/114- Earthbound - Inside the Dungeon.mp3")
  return (
    <div className="h-screen bg-cover bg-center" style={{backgroundImage: "url('images/earthboundBackground.gif')"}}>
      <Button onClick={()=>{router.push("/shop"); play()}}>Enter Webpage</Button>
    </div>
  );
}