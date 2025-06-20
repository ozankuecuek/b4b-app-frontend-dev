"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, ArrowRight, Sparkles, Globe, Shield, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div
          className={`max-w-4xl w-full text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Logo/Icon with Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Building2 className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>

          {/* Main Heading with Gradient Text */}
          <div className="mb-6">
            <h1
              className={`text-6xl md:text-7xl font-bold mb-4 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                B2B Commerce
              </span>
            </h1>
            <div
              className={`flex items-center justify-center gap-2 transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
              <p className="text-xl md:text-2xl text-slate-300 font-light">Professional procurement platform</p>
              <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse delay-500" />
            </div>
          </div>

          {/* Feature Pills */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Globe className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-slate-200">Global Network</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span className="text-sm text-slate-200">Secure Platform</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-slate-200">Lightning Fast</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-800 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login" className="group">
                <Button
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25"
                  size="lg"
                >
                  <span className="flex items-center gap-2">
                    Sign In to Your Account
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>

              <Link href="/register" className="group">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-lg font-semibold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <span className="flex items-center gap-2">
                    Register Your Business
                    <Building2 className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Trust Indicator */}
            <div
              className={`transition-all duration-1000 delay-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-slate-400 text-sm mb-4">Trusted by 10,000+ businesses worldwide</p>

              {/* Animated Counter */}
              <div className="flex justify-center items-center gap-8 text-slate-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">10K+</div>
                  <div className="text-xs">Companies</div>
                </div>
                <div className="w-px h-8 bg-slate-600"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">50M+</div>
                  <div className="text-xs">Transactions</div>
                </div>
                <div className="w-px h-8 bg-slate-600"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">99.9%</div>
                  <div className="text-xs">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-slate-400">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs mt-2">Scroll to explore</span>
        </div>
      </div>
    </div>
  )
}
