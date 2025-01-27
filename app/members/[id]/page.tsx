"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"

// Mock data for a member
const mockMember = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  plan: "Pro",
  paymentStatus: "Paid",
  joinDate: "2023-01-15",
  lastVisit: "2023-05-20",
  activityLog: [
    { date: "2023-05-20", activity: "Strength Training" },
    { date: "2023-05-18", activity: "Cardio" },
    { date: "2023-05-16", activity: "Yoga" },
  ],
}

export default function MemberProfilePage() {
  const { id } = useParams()
  const [member, setMember] = useState(null)

  useEffect(() => {
    // In a real application, you would fetch the member data based on the ID
    // For this example, we'll use the mock data
    setMember(mockMember)
  }, [])

  if (!member) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="bg-white shadow-md rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-4 bg-blue-600 text-white">
            <h1 className="text-3xl font-bold">{member.name}</h1>
            <p className="text-lg">{member.email}</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Membership Details</h2>
                <p>
                  <strong>Plan:</strong> {member.plan}
                </p>
                <p>
                  <strong>Payment Status:</strong> {member.paymentStatus}
                </p>
                <p>
                  <strong>Join Date:</strong> {member.joinDate}
                </p>
                <p>
                  <strong>Last Visit:</strong> {member.lastVisit}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Quick Stats</h2>
                <p>
                  <strong>Total Visits:</strong> 42
                </p>
                <p>
                  <strong>Avg. Visits/Week:</strong> 3.5
                </p>
                <p>
                  <strong>Favorite Activity:</strong> Strength Training
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
              <ul className="space-y-2">
                {member.activityLog.map((activity, index) => (
                  <li key={index} className="bg-gray-100 p-2 rounded">
                    <strong>{activity.date}:</strong> {activity.activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

