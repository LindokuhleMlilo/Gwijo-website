"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Ready to bring the authentic sounds of South Africa to your event? Let's create something magical together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8">Booking Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Alexandra Township
                    <br />
                    Johannesburg, South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    +27 11 123 4567
                    <br />
                    +27 82 987 6543
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    bookings@gwijoavenue.co.za
                    <br />
                    info@gwijoavenue.co.za
                  </p>
                </div>
              </div>
            </div>

            <Card className="border-secondary/20">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4 text-lg">What We Offer</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Corporate events and brand activations</li>
                  <li>• Cultural celebrations and festivals</li>
                  <li>• Private performances and weddings</li>
                  <li>• International touring and collaborations</li>
                  <li>• Recording and commercial work</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-32"
                      placeholder="Tell us about your event, preferred dates, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
