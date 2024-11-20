'use client'
import Shop from "../shop";



export default function Page() {
  return (
    <div className="h-screen bg-cover bg-center" style={{backgroundImage: "url('images/earthboundBackground.gif')"}}>
      <Shop></Shop>
    </div>
  );
}