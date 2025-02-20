import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, Star } from "lucide-react"
import Link from "next/link"

export default function AddReview({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-4">
        <Link href={`/vendor/${params.id}`}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Vendor
        </Link>
      </Button>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Add Your Review</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div>
                <Label htmlFor="rating">Rating</Label>
                <div className="flex space-x-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-gray-300 cursor-pointer hover:text-yellow-400" />
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="title">Review Title</Label>
                <Input id="title" placeholder="Enter a title for your review" />
              </div>
              <div>
                <Label htmlFor="review">Your Review</Label>
                <Textarea id="review" placeholder="Write your review here" rows={5} />
              </div>
              <Button type="submit">Submit Review</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

