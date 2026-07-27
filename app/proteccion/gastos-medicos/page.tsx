import Link from 'next/link'
import { Heart } from 'lucide-react'

const benefits = [
  'Cobertura para hospitalización, cirugías y tratamientos médicos mayores.',
  'Red de hospitales y médicos de primer nivel en todo el país.',
  'Sin descalabro financiero ante enfermedades o accidentes.',
  'Planes a la medida de tu edad, familia y presupuesto.',
]

export default function GastosMedicos() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-techaus-accent mb-6">
            <Heart className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Seguro de Gastos Médicos
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Evita un descalabro financiero ante enfermedades o accidentes. Soluciones a la medida de tu salud.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">¿Qué incluye tu protección?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-techaus-accent mt-1 flex-shrink-0">✓</span>
                <p className="text-slate-600 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/cotizar"
            className="inline-block bg-techaus-accent hover:bg-sky-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-sky-300/50"
          >
            Cotizar Gastos Médicos
          </Link>
        </div>
      </div>
    </div>
  )
}
