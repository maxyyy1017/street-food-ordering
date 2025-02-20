import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            StreetEats
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/login" className="text-gray-600 hover:text-orange-500">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-gray-600 hover:text-orange-500">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Discover Street Food Near You</h1>
          <p className="text-xl text-gray-600 mb-8">Order from the best local street food vendors</p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <Input type="text" placeholder="Search for food or vendors..." className="pl-10 pr-4 py-2 w-full" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Button className="ml-2">Search</Button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={`/placeholder.svg?height=200&width=400`}
                alt="Food"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Vendor Name {i}</h3>
                <p className="text-gray-600 mb-4">Speciality dishes and cuisine type</p>
                <Button asChild>
                  <Link href={`/vendor/${i}`}>View Menu</Link>
                </Button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2023 StreetEats. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

