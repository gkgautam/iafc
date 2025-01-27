"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaDumbbell } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function RegisterMemberPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    membershipPlan: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      membershipPlan: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Member registered successfully!")
        setFormData({
          name: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          membershipPlan: "",
        })
        setTimeout(() => router.push("/admin"), 2000)
      } else {
        toast.error("Failed to register member")
      }
    } catch (error) {
      console.error("Error registering member:", error)
      toast.error("An error occurred while registering the member")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 bg-blue-600 text-white">
          <h1 className="text-2xl font-bold">Register New Member</h1>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
          <div>
            <Label htmlFor="name" className="flex items-center gap-2">
              <FaUser />
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email" className="flex items-center gap-2">
              <FaEnvelope />
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="flex items-center gap-2">
              <FaPhone />
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
              <FaCalendar />
              Date of Birth
            </Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              required
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="membershipPlan" className="flex items-center gap-2">
              <FaDumbbell />
              Membership Plan
            </Label>
            <Select onValueChange={handleSelectChange} value={formData.membershipPlan}>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
                <SelectItem value="elite">Elite</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Register Member
          </Button>
        </form>
      </motion.div>
      <ToastContainer position="bottom-right" />
    </div>
  )
}

