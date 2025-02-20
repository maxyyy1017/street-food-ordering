import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RestaurantDetails({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Restaurant"
            width={600}
            height={300}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Taco Loco</h1>
          <div className="flex items-center mb-4">
            <Star className="text-yellow-400 mr-1" />
            <span className="font-semibold mr-2">4.5</span>
            <span className="text-gray-600">(123 reviews)</span>
          </div>
          <p className="text-gray-600 mb-4">Authentic Mexican street food served with passion and flavor.</p>
          <div className="flex items-center mb-2">
            <MapPin className="mr-2 text-gray-400" />
            <span>123 Street Food Lane, Foodville</span>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="mr-2 text-gray-400" />
            <span>(555) 123-4567</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Opening Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>12:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="menu" className="mt-8">
        <TabsList>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="menu">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item}>
                <Image
                  src={`/placeholder.svg?height=200&width=300`}
                  alt={`Menu Item ${item}`}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>Menu Item {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">Description of the delicious menu item.</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">$9.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="space-y-6">
            {[1, 2, 3].map((review) => (
              <Card key={review}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2">John Doe</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`h-4 w-4 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`} />
                      ))}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Great food and excellent service! Will definitely come back.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

