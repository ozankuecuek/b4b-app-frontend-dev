import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">B2B Commerce</h1>
          <p className="text-slate-600">Professional procurement platform</p>
        </div>

        <div className="space-y-4">
          <Link href="/login" className="block">
            <Button className="w-full" size="lg">
              Sign In to Your Account
            </Button>
          </Link>

          <Link href="/register" className="block">
            <Button variant="outline" className="w-full" size="lg">
              Register Your Business
            </Button>
          </Link>
        </div>

        <div className="text-sm text-slate-500">
          <p>Trusted by 10,000+ businesses worldwide</p>
        </div>
      </div>
    </div>
  )
}
