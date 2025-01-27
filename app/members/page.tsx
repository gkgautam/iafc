import clientPromise from "@/lib/mongodb"
import type { Member } from "@/models/Member"

export const revalidate = 0

async function getMembers(): Promise<Member[]> {
  const client = await clientPromise
  const collection = client.db("iafc_gym").collection("members")
  return collection.find({}).toArray() as Promise<Member[]>
}

export default async function MembersPage() {
  const members = await getMembers()

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Members List</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {members.map((member) => (
                <tr key={member._id?.toString()}>
                  <td className="px-6 py-4 whitespace-nowrap">{member.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{member.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{member.membershipPlan}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{member.joinDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

