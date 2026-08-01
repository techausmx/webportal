'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { notifyNewCotizacion } from '@/lib/notify'

function CotizarForm() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get('service') || searchParams.get('servicio') || ''

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }))
    }
  }, [initialService])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setError('')
    setSubmitting(true)

    try {
      await addDoc(collection(db, 'cotizaciones'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        createdAt: serverTimestamp(),
        source: typeof window !== 'undefined' ? window.location.href : '',
      })
      setSubmitted(true)
      notifyNewCotizacion(formData)
    } catch (err) {
      console.error('Error al enviar la cotización:', err)
      setError('Ocurrió un error al enviar tu solicitud. Por favor intenta de nuevo.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-100">
      {submitted ? (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-emerald-500 text-3xl font-bold">✓</span>
            </div>
            <div className="ml-4">
              <h3 className="text-base font-bold text-emerald-900">Cotización Solicitada</h3>
              <div className="mt-2 text-sm text-emerald-700 leading-relaxed">
                <p>
                  Gracias por tu interés, <strong>{formData.name}</strong>. Hemos recibido tu solicitud para <strong>{formData.service || 'nuestros servicios'}</strong>. Nuestro equipo de asesores se comunicará contigo a la brevedad.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
              Nombre Completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Ej. Juan Pérez"
              value={formData.name}
              onChange={handleChange}
              className="appearance-none block w-full px-3.5 py-2.5 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-techaus-accent focus:border-techaus-accent text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none block w-full px-3.5 py-2.5 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-techaus-accent focus:border-techaus-accent text-sm"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">
              Teléfono de Contacto
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+52 (662) 000 0000"
              value={formData.phone}
              onChange={handleChange}
              className="appearance-none block w-full px-3.5 py-2.5 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-techaus-accent focus:border-techaus-accent text-sm"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-1">
              Servicio de Interés
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="block w-full px-3.5 py-2.5 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-techaus-accent focus:border-techaus-accent text-sm bg-white"
            >
              <option value="" disabled>Selecciona un servicio</option>
              <option value="Gastos Médicos">Gastos Médicos</option>
              <option value="Seguro de Auto">Seguro de Auto</option>
              <option value="Seguro de Vida">Seguro de Vida</option>
              <option value="Hogar y Empresa">Hogar y Empresa</option>
              <option value="Soluciones IA">Soluciones IA</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex justify-center py-3.5 px-4 rounded-xl shadow-lg text-sm font-bold text-white bg-techaus-accent hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-techaus-accent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Enviando...' : 'Enviar Solicitud'}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default function Cotizar() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-24 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
          Solicita tu Cotización
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Ingresa tus datos y un especialista Techaus se comunicará contigo.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Suspense fallback={<div className="p-8 text-center text-slate-500">Cargando formulario...</div>}>
          <CotizarForm />
        </Suspense>
      </div>
    </div>
  )
}
