import type { ObjectId } from "mongodb"

export interface Member {
  _id?: ObjectId
  name: string
  email: string
  phone: string
  dateOfBirth: string
  membershipPlan: string
  joinDate: string
  lastVisit: string
  activityLog: Array<{ date: string; activity: string }>
}

