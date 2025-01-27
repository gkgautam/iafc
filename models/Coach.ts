import type { ObjectId } from "mongodb"

export interface Coach {
  _id?: ObjectId
  name: string
  email: string
  phone: string
  dateOfBirth: string
  expertise: string
  experience: string
  certifications: string[]
  schedule: Array<{ day: string; time: string }>
}

