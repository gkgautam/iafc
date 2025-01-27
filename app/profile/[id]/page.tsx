import { ObjectId } from "mongodb"
import clientPromise from "@/lib/mongodb"
import type { Member } from "@/models/Member"
import type { Coach } from "@/models/Coach"
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaDumbbell, FaClock, FaTrophy } from "react-icons/fa"
import Image from "next/image"

export const revalidate = 0

async function getProfile(id: string): Promise<Member | Coach | null> {
  const client = await clientPromise
  const db = client.db("iafc_gym")

  // Try to find a member first
  const member = await db.collection("members").findOne({ _id: new ObjectId(id) })
  if (member) return { ...member, type: "member" }

  // If not a member, try to find a coach
  const coach = await db.collection("coaches").findOne({ _id: new ObjectId(id) })
  if (coach) return { ...coach, type: "coach" }

  return null
}

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const profile = await getProfile(params.id)

  if (!profile) {
    return <div>Profile not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-blue-600 text-white flex items-center justify-between">
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <span className="text-sm bg-blue-700 px-2 py-1 rounded">
              {profile.type === "member" ? "Member" : "Coach"}
            </span>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg"
                  alt={profile.name}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3 space-y-4">
                <ProfileItem icon={<FaEnvelope />} label="Email" value={profile.email} />
                <ProfileItem icon={<FaPhone />} label="Phone" value={profile.phone} />
                <ProfileItem icon={<FaCalendar />} label="Date of Birth" value={profile.dateOfBirth} />

                {profile.type === "member" && (
                  <>
                    <ProfileItem
                      icon={<FaDumbbell />}
                      label="Membership Plan"
                      value={(profile as Member).membershipPlan}
                    />
                    <ProfileItem icon={<FaCalendar />} label="Join Date" value={(profile as Member).joinDate} />
                    <ProfileItem icon={<FaClock />} label="Last Visit" value={(profile as Member).lastVisit} />
                  </>
                )}

                {profile.type === "coach" && (
                  <>
                    <ProfileItem icon={<FaDumbbell />} label="Expertise" value={(profile as Coach).expertise} />
                    <ProfileItem icon={<FaClock />} label="Experience" value={(profile as Coach).experience} />
                  </>
                )}
              </div>
            </div>

            {profile.type === "member" && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <ul className="space-y-2">
                  {(profile as Member).activityLog.map((activity, index) => (
                    <li key={index} className="bg-gray-100 p-3 rounded-lg flex items-center gap-3">
                      <FaDumbbell className="text-blue-600" />
                      <span>
                        <strong>{activity.date}:</strong> {activity.activity}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {profile.type === "coach" && (
              <>
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Certifications</h2>
                  <ul className="space-y-2">
                    {(profile as Coach).certifications.map((cert, index) => (
                      <li key={index} className="bg-gray-100 p-3 rounded-lg flex items-center gap-3">
                        <FaTrophy className="text-blue-600" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Schedule</h2>
                  <ul className="space-y-2">
                    {(profile as Coach).schedule.map((slot, index) => (
                      <li key={index} className="bg-gray-100 p-3 rounded-lg flex items-center gap-3">
                        <FaClock className="text-blue-600" />
                        <span>
                          <strong>{slot.day}:</strong> {slot.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const ProfileItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <span className="text-blue-600">{icon}</span>
    <span className="font-semibold">{label}:</span>
    <span>{value}</span>
  </div>
)

