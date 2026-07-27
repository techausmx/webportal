import Link from 'next/link'
import { Car } from 'lucide-react'

const benefits = [
  'Cobertura amplia contra daños, robo total y responsabilidad civil.',
  'Asistencia vial garantizada las 24 horas, los 365 días del año.',
  'Auto sustituto mientras se repara tu vehículo.',
  'Red de talleres y ajustadores en todo el país.',
]

export default function SeguroDeAuto() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 text-techaus-primary mb-6">
            <Car className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Seguro de Auto
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Protege tu vehículo contra daños, robo y responsabilidad civil con asistencia vial garantizada.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">¿Qué incluye tu protección?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-techaus-primary mt-1 flex-shrink-0">✓</span>
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
            Cotizar Auto
          </Link>
        </div>
      </div>
    </div>
  )
}
