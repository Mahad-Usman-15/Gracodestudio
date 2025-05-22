import { Suspense } from 'react'
import Loading from './loading'
import ContactForm from './ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<Loading />}>
        <ContactForm />
      </Suspense>
    </div>
  )
}