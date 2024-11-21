'use client'
//note none of the ridles are mine. I google searched them
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from 'next/navigation'
import { Bounce, toast, ToastContainer } from 'react-toastify'


interface FormData {
  personalInfo: {
    name?: string;
    email?: string;
    phone?: string;
  };
  shippingAddress: {
    address?: string;
    city?: string;
    zipCode?: string;
    country?: string;
  };
  paymentMethod: {
    cardType?: string;
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
  };
}

export default function ConsolidatedCheckout() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {},
    shippingAddress: {},
    paymentMethod: {}
  })
  const router = useRouter()
  const win = () => {
    if(formData.shippingAddress.city != "409") {
      
    }
    else if(formData.shippingAddress.country != "Switzerland") {
      
    }
    else if(formData.paymentMethod.cardNumber != "8182838485868788081828384858687888998") {
      
    }
    else {
      router.push("/win")
    }
  }
  const backToStart = ()=>{
    router.push("/")
  }
  const debug = false;
  useEffect(() => {
  console.log("mount")
  if(!debug) {
  const timer = setInterval(() => {
        console.log("test")
        let navBack = true;
        toast.info('Navigating back to start. Click to cancel', {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          onClick: ()=>{navBack = false},
          onClose: ()=>{if(navBack){backToStart()}}
          });
      }, 60000)
  return function cleanup() {
    console.log("cleanup")
    clearInterval(timer)
  }  
  }})
  const updateFormData = (stepData: Partial<FormData[keyof FormData]>, step: keyof FormData) => {
    
    setFormData(prevData => ({
      ...prevData,
      [step]: { ...prevData[step], ...stepData }
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, step: keyof FormData) => {
    updateFormData({ [e.target.name]: e.target.value }, step)
  }

  const handleSelectChange = (value: string, step: keyof FormData) => {
    updateFormData({ cardType: value }, step)
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const renderPersonalInfo = () => (
    <div className="space-y-4 font-[family-name:var(--font-saturn)]">
      <div className="space-y-2">
        <Label htmlFor="name">Your very first label, given at start, a declaration of you, a true work of heart. What am I?</Label>
        <Input
          id="name"
          name="name"
          value={formData.personalInfo.name || 'Riddle me this'}
          onChange={(e) => handleChange(e, 'personalInfo')}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">I&apos;m often read but not on paper. What am I?</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.personalInfo.email || 'Riddle me this'}
          onChange={(e) => handleChange(e, 'personalInfo')}
          placeholder="john@example.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">I began as a breakthrough that bridged the divide, in every home, I used to reside. Ringing in moments, across the globe I span, connecting voices from woman to man. What am I?</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.personalInfo.phone || 'Riddle me this'}
          onChange={(e) => handleChange(e, 'personalInfo')}
          placeholder="(123) 456-7890"
        />
      </div>
    </div>
  )

  const renderShippingAddress = () => (
    <div className="space-y-4 font-[family-name:var(--font-saturn)]">
      <div className="space-y-2">
        <Label htmlFor="address">What does a house wear to a party?</Label>
        <Input
          id="address"
          name="address"
          value={formData.shippingAddress.address || 'Riddle me this'}
          onChange={(e) => handleChange(e, 'shippingAddress')}
          placeholder="123 Main St"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">I couldn&apos;t find a riddle about citys so you get this one for free</Label>
        <Input
          id="city"
          name="city"
          //409
          value={formData.shippingAddress.city || 'Riddle me this           ->                                                                                                                                                                                                                      dont you love spaces                                                                                         i do                                                                               the actual riddle is how many spaces are in this input'}
          onChange={(e) => handleChange(e, 'shippingAddress')}
          placeholder="New York"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="zipCode">Not a costume, but digits I wear, guide the postman to your lair. What am I?</Label>
        <Input
          id="zipCode"
          name="zipCode"
          value={formData.shippingAddress.zipCode || 'Riddle me this'}
          onChange={(e) => handleChange(e, 'shippingAddress')}
          placeholder="10001"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="country">I am known for my delicious chocolate, watches, and the Alps. What country am I?</Label>
        <Input
          id="country"
          name="country"
          value={formData.shippingAddress.country || 'Riddle me this'}
          onChange={(e) => handleChange(e, 'shippingAddress')}
          placeholder="United States"
        />
      </div>
    </div>
  )

  const renderPaymentMethod = () => (
    <div className="space-y-4 font-[family-name:var(--font-saturn)]">
      <div className="space-y-2">
        <Label htmlFor="cardType">I&apos;m not a stream or a river&apos;s bend, but I flow from your account on a spending trend. What am I?</Label>
        <Select onValueChange={(value) => handleSelectChange(value, 'paymentMethod')} defaultValue={formData.paymentMethod.cardType || 'Riddle me this'}>
          <SelectTrigger>
            <SelectValue placeholder="Select card type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="visa">Visa</SelectItem>
            <SelectItem value="mastercard">Mastercard</SelectItem>
            <SelectItem value="amex">American Express</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        {/* 8182838485868788081828384858687888998 */}
        <Label htmlFor="cardNumber">John was asked to paint the apartment number on plates of 100 apartments which means he will have to paint numbers 1 through 100. Can you figure out the number of times he will have to paint the number 8?</Label>
        <Input
          id="cardNumber"
          name="cardNumber"
          value={formData.paymentMethod.cardNumber || 'Riddle me this'}
          onChange={(e) => handleChange(e, 'paymentMethod')}
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiryDate">Complete the phrase When you breathe, you inspire. When you do not breathe, you ____.</Label>
          <Input
            id="expiryDate"
            name="expiryDate"
            value={formData.paymentMethod.expiryDate || 'Riddle me this'}
            onChange={(e) => handleChange(e, 'paymentMethod')}
            placeholder="MM/YY"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvv">What verifies, has a value, and is always required for a purchase</Label>
          <Input
            id="cvv"
            name="cvv"
            value={formData.paymentMethod.cvv || 'Riddle me this'}
            onChange={(e) => handleChange(e, 'paymentMethod')}
            placeholder="123"
          />
        </div>
      </div>
    </div>
  )

  const renderOrderReview = () => (
    <div className="space-y-4 font-[family-name:var(--font-saturn)]">
      <h3 className="text-lg font-semibold">Order Summary</h3>
      <div className="space-y-2">
        <h4 className="font-medium">Personal Information</h4>
        <p>Riddle 1: {formData.personalInfo.name}</p>
        <p>Riddle 2: {formData.personalInfo.email}</p>
        <p>Riddle 3: {formData.personalInfo.phone}</p>
      </div>
      <div className="space-y-2">
        <h4 className="font-medium">2nd Page Riddles</h4>
        <p>{formData.shippingAddress.address}</p>
        <p>{formData.shippingAddress.city}, {formData.shippingAddress.zipCode}</p>
        <p>{formData.shippingAddress.country}</p>
      </div>
      <div className="space-y-2">
        <h4 className="font-medium">Payment Method</h4>
        <p>Card Type: {formData.paymentMethod.cardType}</p>
        <p>Number Riddle: **** **** **** {formData.paymentMethod.cardNumber?.slice(-4)}</p>
      </div>
    </div>
  )

  const renderStep = () => {
    switch(step) {
      case 1:
        return renderPersonalInfo()
      case 2:
        return renderShippingAddress()
      case 3:
        return renderPaymentMethod()
      case 4:
        return renderOrderReview()
      default:
        return renderPersonalInfo()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center h-screen bg-cover bg-center" style={{backgroundImage: "url('images/earthboundBackground.gif')"}}>
      <ToastContainer></ToastContainer>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="font-[family-name:var(--font-saturn)]">Checkout - Step {step} of 4</CardTitle>
        </CardHeader>
        <CardContent>
          {renderStep()}
        </CardContent>
        <CardFooter className="flex justify-between font-[family-name:var(--font-saturn)]">
          {step > 1 && (
            <Button onClick={prevStep} variant="outline">
              Previous
            </Button>
          )}
          {step < 4 ? (
            <Button onClick={nextStep} className="ml-auto">
              Next
            </Button>
          ) : (
            <Button onClick={win} className="ml-auto">
              Place Order
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}