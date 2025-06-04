import { LandingPage } from "@/components/landing-page"
import { AuthProvider } from "@/contexts/auth-context"

export default function Home() {
  return (
    <AuthProvider>
      <LandingPage />
    </AuthProvider>
  )
}
