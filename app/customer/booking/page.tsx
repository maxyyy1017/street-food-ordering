import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function BookingDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/customer">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>

      <h1 className="text-3xl font-bold mb-6">Booking Details</h1>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order #12345</h2>
        <p className="text-gray-600 mb-2">Placed on May 1, 2023 at 2:30 PM</p>
        <p className="text-gray-600 mb-4">
          Status: <span className="font-semibold text-green-600">Delivered</span>
        </p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Tacos al Pastor</TableCell>
              <TableCell>2</TableCell>
              <TableCell>$10.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Burrito Grande</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$8.50</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} className="font-semibold">
                Total
              </TableCell>
              <TableCell className="font-semibold">$18.50</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Vendor Information</h2>
        <p className="text-gray-600 mb-2">Taco Loco</p>
        <p className="text-gray-600 mb-2">123 Street Food Lane, Foodville</p>
        <p className="text-gray-600 mb-4">Phone: (555) 123-4567</p>
        <Button asChild>
          <Link href="/vendor/1">View Vendor</Link>
        </Button>
      </div>
    </div>
  )
}

