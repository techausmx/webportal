'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Heart, 
  ShieldCheck, 
  Stethoscope, 
  Ambulance, 
  Pill, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  Building2, 
  Users,
  ChevronDown
} from 'lucide-react'

const coverages = [
  {
    icon: Stethoscope,
    title: 'Hospitalización y Honorarios',
    description: 'Cobertura integral para estancia hospitalaria, intervenciones quirúrgicas y honorarios de médicos y especialistas.',
  },
  {
    icon: Pill,
    title: 'Medicamentos y Tratamientos',
    description: 'Inclusión de medicamentos prescritos tanto intra-hospitalarios como tratamientos de seguimiento fuera del hospital.',
  },
  {
    icon: Ambulance,
    title: 'Urgencias y Ambulancia',
    description: 'Atención médica inmediata en caso de emergencia, incluyendo traslados terrestres o aéreos calificados.',
  },
  {
    icon: Building2,
    title: 'Red de Hospitales de Elite',
    description: 'Acceso directo a las mejores clínicas y sanatorios del país con opción de pago directo a la institución médica.',
  },
  {
    icon: Users,
    title: 'Maternidad y Récord Familiar',
    description: 'Auxilio económico para parto o cesárea y protección automática e inmediata para tu recién nacido.',
  },
  {
    icon: Award,
    title: 'Cobertura Internacional',
    description: 'Planes opcionales para recibir atención médica especializada en el extranjero ante padecimientos complejos.',
  },
]

const advantages = [
  {
    title: 'Asesoría Personalizada Sin Costo',
    description: 'Te ayudamos a elegir el nivel de deducible y coaseguro que mejor se ajuste a tus finanzas sin pagar de más.',
  },
  {
    title: 'Acompañamiento en Caso de Siniestro',
    description: 'No estás solo al momento de usar tu seguro; nuestro equipo gestiona cartas de autorización y trámites de reembolso.',
  },
  {
    title: 'Respaldo con Aseguradoras Líderes',
    description: 'Trabajamos con las compañías de mayor solvencia y reputación en México como AXA, Seguros Atlas y más.',
  },
]

const faqs = [
  {
    question: '¿Qué es el deducible y el coaseguro en un seguro de gastos médicos?',
    answer: 'El deducible es una cantidad fija que aportas al inicio de un padecimiento cubierto. El coaseguro es un porcentaje de los gastos totales elegibles. Ambos topan el desembolso que realizas para proteger tu estabilidad financiera.',
  },
  {
    question: '¿Desde qué momento entra en vigor la protección?',
    answer: 'Las urgencias médicas y accidentes quedan cubiertos desde el primer minuto de vigencia de tu póliza. Algunos padecimientos o maternidad cuentan con periodos de espera estándar establecidos por la aseguradora.',
  },
  {
    question: '¿Puedo asegurar a toda mi familia en la misma póliza?',
    answer: 'Sí, puedes incluir a tu cónyuge e hijos dentro de una misma póliza colectiva familiar con tarifas preferenciales.',
  },
  {
    question: '¿Qué pasa si ya cuento con una condición médica previa?',
    answer: 'Analizamos tu historial médico con transparencia para ofrecerte las mejores opciones con o sin endosos de preexistencia según las políticas de suscripción.',
  },
]

export default function GastosMedicos() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-20 md:py-24">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-techaus-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-techaus-accent/15 border border-techaus-accent/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  <Heart className="w-4 h-4 text-techaus-accent" />
                  <span>Protección de Salud y Bienestar</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Seguro de <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-200">Gastos Médicos</span> Mayores
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                  Protege la salud de tu familia y tu patrimonio financiero ante emergencias, hospitalizaciones o enfermedades graves con la mejor red médica de México.
                </p>

                {/* Highlights pills */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <ShieldCheck className="w-4 h-4 text-techaus-accent" />
                    <span>Red Médica Nacional</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <Clock className="w-4 h-4 text-techaus-accent" />
                    <span>Atención 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <Sparkles className="w-4 h-4 text-techaus-accent" />
                    <span>Pago Directo en Hospitales</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/cotizar?service=Gastos%20Médicos"
                  className="w-full sm:w-auto h-16 inline-flex items-center justify-center gap-2 bg-techaus-accent hover:bg-sky-500 text-white font-bold px-8 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all text-base group"
                >
                  <span>Solicitar Cotización Sin Costo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+526622337960"
                  className="w-full sm:w-auto h-16 inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold px-6 rounded-xl border border-slate-700 transition-colors text-base"
                >
                  <PhoneCall className="w-5 h-5 text-techaus-accent" />
                  <span>Hablar con un Asesor</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative flex flex-col justify-between">
              <div className="mx-auto max-w-md lg:max-w-none group w-full flex flex-col justify-between h-full">
                {/* Image Frame */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60">
                  <Image
                    src="/images/gastos_medicos_hero.jpg"
                    alt="Seguro de Gastos Médicos Mayores Techaus"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Subtitle Badge Completely Outside Image Frame */}
                <div className="mt-4 h-16 px-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl flex items-center min-h-[64px]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-techaus-accent/20 text-techaus-accent flex-shrink-0">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider leading-none">Tranquilidad Total</p>
                      <p className="text-sm font-bold text-white leading-tight">Respaldo Financiero en Hospitalización y Quirófano</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Coverage Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-techaus-accent font-bold tracking-wide uppercase text-sm mb-3">
              ¿Qué Incluye tu Póliza?
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
              Cobertura completa diseñada para tu máxima protección
            </p>
            <div className="w-20 h-1 bg-techaus-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverages.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sky-100 text-techaus-accent flex items-center justify-center mb-6 group-hover:bg-techaus-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Techaus Advantages */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-techaus-accent font-bold text-sm uppercase tracking-wider">
                Ventaja Competitiva Techaus
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
                Te acompañamos en cada etapa de tu salud
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Contratar un seguro de gastos médicos no tiene por qué ser complicado. En Techaus simplificamos la contratación y velamos por ti en los momentos que más nos necesitas.
              </p>
              
              <div className="pt-2">
                <Link
                  href="/cotizar?service=Gastos%20Médicos"
                  className="inline-flex items-center gap-2 font-bold text-techaus-accent hover:text-sky-700 transition-colors"
                >
                  <span>Solicitar asesoría sin compromiso</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {advantages.map((adv, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{adv.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-50 text-techaus-accent mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2">
              Preguntas Frecuentes sobre Gastos Médicos
            </h2>
            <p className="text-slate-600 text-base">
              Aclaramos tus dudas principales antes de contratar tu póliza
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-techaus-accent' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-techaus-accent/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              ¿Listo para cotizar la mejor protección médica para tu familia?
            </h2>
            <p className="text-slate-300 text-lg">
              Completa nuestro formulario rápido y un especialista Techaus evaluará las mejores alternativas de aseguramiento adaptadas a tu perfil.
            </p>
            <div className="pt-2">
              <Link
                href="/cotizar?service=Gastos%20Médicos"
                className="inline-flex items-center gap-2 bg-techaus-accent hover:bg-sky-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
              >
                <span>Cotizar Gastos Médicos Ahora</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
