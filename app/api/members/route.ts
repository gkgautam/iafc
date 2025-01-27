import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import type { Member } from "@/models/Member"

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("iafc_gym")
    const { name, email, phone, dateOfBirth, membershipPlan } = await request.json()

    const newMember: Member = {
      name,
      email,
      phone,
      dateOfBirth,
      membershipPlan,
      joinDate: new Date().toISOString().split("T")[0],
      lastVisit: new Date().toISOString().split("T")[0],
      activityLog: [],
    }

    await db.collection("members").insertOne(newMember)

    return NextResponse.json({ message: "Member registered successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error registering member:", error)
    return NextResponse.json({ error: "Failed to register member" }, { status: 500 })
  }
}

