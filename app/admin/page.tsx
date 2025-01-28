"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaUsers, FaDumbbell, FaMoneyBillWave, FaUserPlus } from "react-icons/fa"

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("members")

  return (
    <div className="min-h-screen bg-gray-100 flex py-12 px-4 sm:px-6 lg:px-8">
      {/* Sidebar */}
      <motion.div
        className="w-64 bg-blue-600 text-white p-6"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                className={`flex items-center space-x-2 w-full p-2 rounded ${activeTab === "members" ? "bg-blue-700" : "hover:bg-blue-700"}`}
                onClick={() => setActiveTab("members")}
              >
                <FaUsers />
                <span>Members</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 w-full p-2 rounded ${activeTab === "register" ? "bg-blue-700" : "hover:bg-blue-700"}`}
                onClick={() => setActiveTab("register")}
              >
                <FaUserPlus />
                <span>Register Member</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 w-full p-2 rounded ${activeTab === "trainers" ? "bg-blue-700" : "hover:bg-blue-700"}`}
                onClick={() => setActiveTab("trainers")}
              >
                <FaDumbbell />
                <span>Trainers</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center space-x-2 w-full p-2 rounded ${activeTab === "payments" ? "bg-blue-700" : "hover:bg-blue-700"}`}
                onClick={() => setActiveTab("payments")}
              >
                <FaMoneyBillWave />
                <span>Payments</span>
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "members" && <MembersManagement />}
          {activeTab === "trainers" && <TrainersManagement />}
          {activeTab === "payments" && <PaymentsManagement />}
          {activeTab === "register" && <RegisterMember />}
        </motion.div>
      </div>
    </div>
  )
}

const MembersManagement = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Members Management</h2>
    {/* Add member management functionality here */}
    <p>Implement member list, add/edit/delete members, etc.</p>
  </div>
)

const TrainersManagement = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Trainers Management</h2>
    {/* Add trainer management functionality here */}
    <p>Implement trainer list, add/edit/delete trainers, etc.</p>
  </div>
)

const PaymentsManagement = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Payments Management</h2>
    {/* Add payment management functionality here */}
    <p>Implement payment tracking, invoicing, etc.</p>
  </div>
)

const RegisterMember = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Register New Member</h2>
    <p>
      To register a new member, please{" "}
      <a href="/admin/register-member" className="text-blue-600 hover:underline">
        click here
      </a>
      .
    </p>
  </div>
)

export default AdminDashboard

