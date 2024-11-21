'use client'
import { ToastContainer } from "react-toastify";
import Shop from "../shop";



export default function Page() {
  return (
    <div className="h-screen bg-cover bg-center" style={{backgroundImage: "url('images/earthboundBackground.gif')"}}>
      <ToastContainer></ToastContainer>
      <Shop></Shop>
    </div>
  );
}