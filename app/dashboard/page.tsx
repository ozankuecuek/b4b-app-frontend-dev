"use client"

import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Users, ShoppingCart, TrendingUp, LogOut, User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.push("/login")
  }

  if (!user) {
    router.push("/login")
    return null
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header with user info and logout */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Building2 className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-semibold text-slate-900">B2B Commerce</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">{user.email}</p>
              {user.tenantId && <p className="text-xs text-slate-500">Org: {user.tenantId}</p>}
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome to Your Dashboard</h2>
            <p className="text-slate-600">Manage your business procurement and orders</p>
          </div>

          {/* User Info Card */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Account Information
                </CardTitle>
                <CardDescription>Your authenticated user details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Email Address</p>
                    <p className="text-lg text-slate-900">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Organization</p>
                    <p className="text-lg text-slate-900">{user.tenantId || "Main Platform User"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">User ID</p>
                    <p className="text-sm text-slate-600 font-mono">{user.uid}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Account Status</p>
                    <p className="text-lg text-green-600">✓ Verified</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Suppliers</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">+2 new this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+1 added this week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Spend</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€45,231</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your latest procurement activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Office Supplies</p>
                      <p className="text-sm text-muted-foreground">Order #12345</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">€1,234</p>
                      <p className="text-sm text-green-600">Delivered</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">IT Equipment</p>
                      <p className="text-sm text-muted-foreground">Order #12344</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">€5,678</p>
                      <p className="text-sm text-yellow-600">In Transit</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Materials</p>
                      <p className="text-sm text-muted-foreground">Order #12343</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">€890</p>
                      <p className="text-sm text-blue-600">Processing</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-20 flex flex-col">
                    <ShoppingCart className="h-6 w-6 mb-2" />
                    New Order
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Building2 className="h-6 w-6 mb-2" />
                    Find Suppliers
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Users className="h-6 w-6 mb-2" />
                    Invite Team
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <TrendingUp className="h-6 w-6 mb-2" />
                    View Reports
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
