'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { sendEmail } from '../lib/resend'

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    package: '',
    price: '',
    features: [] as string[],
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message?: string } | null>(null)

  useEffect(() => {
    const packageName = searchParams?.get('package') || ''
    const price = searchParams?.get('price') || ''
    const featuresParam = searchParams?.get('features') || '[]'
    
    try {
      const features = JSON.parse(featuresParam)
      
      setFormData(prev => ({
        ...prev,
        package: packageName,
        price: price,
        features: Array.isArray(features) ? features : []
      }))
    } catch (err) {
      console.error('Failed to parse features:', err)
      setFormData(prev => ({
        ...prev,
        package: packageName,
        price: price,
        features: []
      }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendEmail(
        formData.name,
        formData.email,
        formData.phone,
        formData.company,
        `Package: ${formData.package} ($${formData.price})\nFeatures: ${formData.features.join(', ')}`,
        formData.message
      )

      if (result.success) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' })
        setFormData(prev => ({
          ...prev,
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        }))
      } else {
        setSubmitStatus({ success: false, message: result.error || 'Failed to send message' })
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus({ success: false, message: 'An unexpected error occurred' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mt-10">
      {/* Package Information Section */}
      <div className="mb-8 p-4 bg-amber-200 rounded-2xl">
        <h2 className="text-xl font-bold text-amber-800 mb-2">Selected Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Package Name</p>
            <p className="font-semibold">{formData.package || 'Not selected'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Price</p>
            <p className="font-semibold">$ {formData.price}</p>
          </div>
        </div>
        
        {formData.features.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-1">Package Includes:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              {formData.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Contact Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Company and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Your Company"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Project Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            placeholder="Tell us more about your project..."
          ></textarea>
        </div>

        {/* Submit Button and Status Message */}
        <div className="space-y-4">
          {submitStatus && (
            <div className={`p-3 rounded-lg text-center ${
              submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}