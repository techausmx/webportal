'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Car, 
  Wrench, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  ShieldAlert, 
  ChevronDown,
  HelpCircle,
  Zap
} from 'lucide-react'

const packages = [
  {
    name: 'Cobertura Amplia',
    featured: true,
    badge: 'La más elegida',
    description: 'Protección integral para tu auto con reparación de daños materiales, robo total y coche sustituto.',
    features: [
      'Daños Materiales (reparación o pérdida total)',
      'Robo Total del vehículo',
      'Responsabilidad Civil ante terceros',
      'Gastos Médicos a Ocupantes',
      'Asistencia Vial Ilimitada (Grúa, Gasolina, Llantas)',
      'Asistencia Legal y Fianza',
      'Auto Sustituto en reparaciones mayores',
    ],
  },
  {
    name: 'Cobertura Limitada',
    featured: false,
    badge: 'Equilibrada',
    description: 'Protección contra robo total y daños a terceros con excelente costo-beneficio.',
    features: [
      'Robo Total del vehículo',
      'Responsabilidad Civil ante terceros',
      'Gastos Médicos a Ocupantes',
      'Asistencia Vial (Grúa y Auxilio Mecánico)',
      'Asistencia Legal y Fianza',
    ],
  },
  {
    name: 'Responsabilidad Civil',
    featured: false,
    badge: 'Obligatoria por Ley',
    description: 'Cumple con la normativa oficial en carreteras y ciudades cubriendo daños causados a terceros.',
    features: [
      'Responsabilidad Civil ante terceros (bienes y personas)',
      'Gastos Médicos a Ocupantes',
      'Asistencia Legal básica',
      'Asistencia Vial de emergencia',
    ],
  },
]

const highlights = [
  {
    icon: Wrench,
    title: 'Red de Talleres y Agencias Certificadas',
    description: 'Garantía en reparaciones con repuestos originales y seguimiento transparente del estado de tu auto.',
  },
  {
    icon: Clock,
    title: 'Asistencia Vial las 24 Horas',
    description: 'Auxilio vial rápido en cualquier carretera de México: grúa, envío de combustible, cambio de llanta pinchada o paso de corriente.',
  },
  {
    icon: ShieldAlert,
    title: 'Ajustadores de Llegada Rápida',
    description: 'En caso de percance, nuestros ajustadores y red de aseguradoras aliadas acuden de inmediato al lugar del siniestro.',
  },
  {
    icon: Zap,
    title: 'Trámite Digital Ágil',
    description: 'Cotiza, reporta y gestiona siniestros o renovaciones desde la comodidad de tu smartphone.',
  },
]

const faqs = [
  {
    question: '¿El seguro cubre el auto si lo conduce otra persona?',
    answer: 'Sí, la mayoría de nuestras pólizas de Cobertura Amplia y Limitada cubren los daños o responsabilidad civil del vehículo sin importar quién esté al volante, siempre y cuando cuente con licencia de conducir válida.',
  },
  {
    question: '¿Qué hacer en caso de un siniestro vial?',
    answer: 'Primero mantén la calma y mantente en un lugar seguro. Reporta el evento al número de atención inmediata de la aseguradora o de Techaus, indicando tu ubicación exacta.',
  },
  {
    question: '¿Puedo elegir el taller donde se reparará mi vehículo?',
    answer: 'Sí, dependiendo de la antigüedad de tu vehículo puedes optar por reparación en agencias autorizadas de la marca o en talleres multimarca certificados.',
  },
  {
    question: '¿Cómo puedo pagar la prima de mi seguro de auto?',
    answer: 'Ofrecemos esquemas de pago flexible: anual, semestral, trimestral o mensual con tarjeta de crédito o débito.',
  },
]

export default function SeguroDeAuto() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-20 md:py-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-techaus-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Header */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-techaus-accent/15 border border-techaus-accent/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  <Car className="w-4 h-4 text-techaus-accent" />
                  <span>Movilidad Segura y Protección Vehicular</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Seguro de <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-200">Auto</span> y Flotillas
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                  Maneja con total serenidad. Protegemos tu vehículo contra daños, robo total y responsabilidad civil con asistencia vial garantizada las 24 horas del día.
                </p>

                {/* Highlights pills */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <Wrench className="w-4 h-4 text-techaus-accent" />
                    <span>Talleres de Agencia</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <Clock className="w-4 h-4 text-techaus-accent" />
                    <span>Grúa y Asistencia 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <Sparkles className="w-4 h-4 text-techaus-accent" />
                    <span>Auto Sustituto</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/cotizar?service=Seguro%20de%20Auto"
                  className="w-full sm:w-auto h-16 inline-flex items-center justify-center gap-2 bg-techaus-accent hover:bg-sky-500 text-white font-bold px-8 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all text-base group"
                >
                  <span>Cotizar mi Auto Ahora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+526622337960"
                  className="w-full sm:w-auto h-16 inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold px-6 rounded-xl border border-slate-700 transition-colors text-base"
                >
                  <PhoneCall className="w-5 h-5 text-techaus-accent" />
                  <span>Asistencia Vial 24/7</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative flex flex-col justify-between">
              <div className="mx-auto max-w-md lg:max-w-none group w-full flex flex-col justify-between h-full">
                {/* Image Frame */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60">
                  <Image
                    src="/images/seguro_auto_hero.jpg"
                    alt="Seguro de Auto Techaus"
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
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider leading-none">Protección Vial</p>
                      <p className="text-sm font-bold text-white leading-tight">Cobertura Nacional y Red de Ajustadores Digitales</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Coverage Packages Tier Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-techaus-accent font-bold tracking-wide uppercase text-sm mb-3">
              Planes a tu Medida
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
              Elige el nivel de protección ideal para tu vehículo
            </p>
            <div className="w-20 h-1 bg-techaus-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.featured
                    ? 'bg-slate-900 text-white shadow-2xl border-2 border-techaus-accent scale-105 z-10'
                    : 'bg-slate-50 text-slate-800 border border-slate-200/80 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        pkg.featured
                          ? 'bg-techaus-accent text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold mb-2">{pkg.name}</h3>
                  <p className={`text-sm mb-6 ${pkg.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pkg.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-200/20 mb-8">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            pkg.featured ? 'text-techaus-accent' : 'text-teal-600'
                          }`}
                        />
                        <span className={`text-sm leading-tight ${pkg.featured ? 'text-slate-200' : 'text-slate-700'}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={`/cotizar?service=Seguro%20de%20Auto`}
                    className={`w-full inline-flex items-center justify-center font-bold py-3.5 px-6 rounded-xl transition-all text-sm ${
                      pkg.featured
                        ? 'bg-techaus-accent hover:bg-sky-500 text-white shadow-lg'
                        : 'bg-slate-800 hover:bg-slate-900 text-white'
                    }`}
                  >
                    Cotizar {pkg.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Features Grid */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-techaus-accent font-bold text-sm uppercase tracking-wider">
              Beneficios Exclusivos Techaus
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight mt-2">
              Por qué miles de conductores confían en nosotros
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-techaus-accent flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
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
              Preguntas Frecuentes sobre Seguro de Auto
            </h2>
            <p className="text-slate-600 text-base">
              Todo lo que necesitas saber antes de encender tu motor
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
              ¿Quieres la tarifa más competitiva para tu auto?
            </h2>
            <p className="text-slate-300 text-lg">
              Compara cotizaciones de las mejores aseguradoras de México en minutos y viaja con total tranquilidad.
            </p>
            <div className="pt-2">
              <Link
                href="/cotizar?service=Seguro%20de%20Auto"
                className="inline-flex items-center gap-2 bg-techaus-accent hover:bg-sky-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
              >
                <span>Obtener Cotización de Auto</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
