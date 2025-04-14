'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Check, Upload } from 'lucide-react'

export default function SellPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    sellingPrice: '',
    originalPrice: '',
    condition: 'new',
    images: [],
    name: '',
    mobile: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      // Limit to 2 images
      const newImages = [...formData.images]
      files.forEach((file) => {
        if (newImages.length < 2) {
          newImages.push(URL.createObjectURL(file))
        }
      })
      setFormData((prev) => ({ ...prev, images: newImages }))
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Create the JSON object to send to backend
    const itemData = {
      id: Math.floor(Math.random() * 1000000).toString(),
      itemDesc: `${formData.title} - ${formData.description} (${formData.category})`,
      category: formData.category,
      title: formData.title,
      description: formData.description,
      sellingPrice: formData.sellingPrice,
      originalPrice: formData.originalPrice,
      condition: formData.condition,
      images: formData.images,
      seller: {
        name: formData.name,
        mobile: formData.mobile,
      },
      datePosted: new Date().toISOString(),
    }

    console.log('Submitting item data:', itemData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setPaymentComplete(true)

    // Redirect after successful payment
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardHeader className="text-black">
              <CardTitle>Step 1: Fill out the Item Details</CardTitle>
              <CardDescription>
                Tell us about the item you want to sell
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-black">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    handleSelectChange('category', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="text-white bg-black">
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="vehicles">Vehicles</SelectItem>
                    <SelectItem value="property">Property</SelectItem>
                    <SelectItem value="books">Books</SelectItem>
                    <SelectItem value="sports">Sports & Hobbies</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Ad Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g. iPhone 13 Pro Max 256GB"
                  className="text-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your item in detail"
                  className="text-black"
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between text-black">
              <Button
                variant="outline"
                onClick={() => router.push('/')}
                className="cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                onClick={nextStep}
                className="cursor-pointer"
                disabled={
                  !formData.category || !formData.title || !formData.description
                }
              >
                Next
              </Button>
            </CardFooter>
          </>
        )
      case 2:
        return (
          <>
            <CardHeader className="text-black">
              <CardTitle>Step 2: Pricing & Condition</CardTitle>
              <CardDescription>
                Set your price and item condition
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-black">
              <div className="space-y-2">
                <Label htmlFor="sellingPrice">Selling Price (₹)</Label>
                <Input
                  id="sellingPrice"
                  name="sellingPrice"
                  type="number"
                  value={formData.sellingPrice}
                  onChange={handleInputChange}
                  placeholder="e.g. 2500"
                  className="text-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="originalPrice">
                  Original Purchase Price (₹)
                </Label>
                <Input
                  id="originalPrice"
                  name="originalPrice"
                  type="number"
                  value={formData.originalPrice}
                  onChange={handleInputChange}
                  placeholder="e.g. 3500"
                />
              </div>
              <div className="space-y-2">
                <Label>Condition</Label>
                <RadioGroup
                  value={formData.condition}
                  onValueChange={(value) =>
                    handleSelectChange('condition', value)
                  }
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new" id="new" />
                    <Label htmlFor="new">New</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="like-new" id="like-new" />
                    <Label htmlFor="like-new">Like New</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="good" />
                    <Label htmlFor="good">Good</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fair" id="fair" />
                    <Label htmlFor="fair">Fair</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between text-black">
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={prevStep}
              >
                Back
              </Button>
              <Button
                onClick={nextStep}
                className="cursor-pointer"
                disabled={!formData.sellingPrice}
              >
                Next
              </Button>
            </CardFooter>
          </>
        )
      case 3:
        return (
          <>
            <CardHeader className="text-black">
              <CardTitle>Step 3: Upload Photos</CardTitle>
              <CardDescription>Add up to 2 photos of your item</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-black">
              <div className="grid grid-cols-2 gap-4">
                {formData.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-40 rounded-md border border-dashed flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={image || '/placeholder.svg'}
                      alt={`Item image ${index + 1}`}
                      className="h-full object-cover"
                    />
                  </div>
                ))}
                {Array(2 - formData.images.length)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="h-40 rounded-md border border-dashed flex items-center justify-center"
                    >
                      <div className="text-center">
                        <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                        <p className="mt-2 text-sm text-muted-foreground">
                          Upload image
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex justify-center">
                <Label htmlFor="image-upload" className="cursor-pointer">
                  <div className="inline-flex h-10 items-center justify-center rounded-md bg-green-900 text-white font-bold px-4 py-2 text-sm text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90">
                    Select Images
                  </div>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={formData.images.length >= 2}
                  />
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between text-black">
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={prevStep}
              >
                Back
              </Button>
              <Button
                onClick={nextStep}
                className="cursor-pointer"
                disabled={formData.images.length === 0}
              >
                Next
              </Button>
            </CardFooter>
          </>
        )
      case 4:
        return (
          <>
            <CardHeader className="text-black">
              <CardTitle>Step 4: Add Contact Information</CardTitle>
              <CardDescription>Provide your contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-black">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="text-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="e.g. 9876543XXX"
                  className="text-black"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between text-black">
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={prevStep}
              >
                Back
              </Button>
              <Button
                onClick={nextStep}
                className="cursor-pointer"
                disabled={!formData.name || !formData.mobile}
              >
                Next
              </Button>
            </CardFooter>
          </>
        )
      case 5:
        return (
          <>
            <CardHeader className="text-black">
              <CardTitle>Step 5: Review & Proceed to Payment</CardTitle>
              <CardDescription>
                Review your listing and complete payment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-black">
              <div className="rounded-lg border p-4 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm font-medium">Category:</div>
                  <div className="text-sm">{formData.category}</div>

                  <div className="text-sm font-medium">Title:</div>
                  <div className="text-sm">{formData.title}</div>

                  <div className="text-sm font-medium">Price:</div>
                  <div className="text-sm">₹{formData.sellingPrice}</div>

                  <div className="text-sm font-medium">Condition:</div>
                  <div className="text-sm">{formData.condition}</div>

                  <div className="text-sm font-medium">Contact:</div>
                  <div className="text-sm">
                    {formData.name}, {formData.mobile}
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-medium mb-2">Payment Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Listing Fee</span>
                    <span>₹49</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Featured Listing (Optional)</span>
                    <span>₹99</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Total</span>
                    <span>₹148</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <Label htmlFor="card">Card Number</Label>
                  <Input
                    id="card"
                    placeholder="1234 5678 9012 3456"
                    className="text-black"
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        className="text-black mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        className="text-black mt-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between text-black">
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={prevStep}
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className="cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Post Now'}
              </Button>
            </CardFooter>
          </>
        )
      case 6:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-center">
                {paymentComplete ? (
                  <div className="flex items-center justify-center">
                    <Check className="h-8 w-8 text-green-500 mr-2" />
                    Listing Complete!
                  </div>
                ) : (
                  'Processing Payment...'
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {paymentComplete ? (
                <div className="text-center space-y-4">
                  <p>Your item has been successfully listed on OLX.</p>
                  <p>You will be redirected to the homepage shortly.</p>
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              )}
            </CardContent>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      {/* <h1 className="m-10 text-2xl font-bold shadow-md border-1 border-white/70 p-2 rounded-md shadow-amber-200 bg-none hover:translate-y-1 transition-all duration-200">POST YOUR AD</h1> */}
      <div className="box flex flex-col p-5 w-full md:w-1/2 h-screen py-10">
        <Card className="bg-white/90">{renderStep()}</Card>
      </div>
    </div>
  )
}
