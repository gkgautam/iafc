import clientPromise from "@/lib/mongodb"
import type { Coach } from "@/models/Coach"
import Image from "next/image"

export const revalidate = 0

async function getCoaches(): Promise<Coach[]> {
  const client = await clientPromise
  const collection = client.db("iafc_gym").collection("coaches")
  return collection.find({}).toArray() as Promise<Coach[]>
}

export default async function TrainersPage() {
  const coaches = await getCoaches()

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Trainers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((coach) => (
            <div key={coach._id?.toString()} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={coach.image || "https://media.istockphoto.com/id/852401732/photo/happy-personal-trainer-working-at-the-gym.jpg?s=612x612&w=0&k=20&c=m4Wk3lVvjEFIHbiAfUuFNBwEhvvSgf4Vv5ib9JUsrJk="}
                alt={coach.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{coach.name}</h2>
                <p className="text-gray-600 mb-2">Expertise: {coach.expertise}</p>
                <p className="text-gray-600">Experience: {coach.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

