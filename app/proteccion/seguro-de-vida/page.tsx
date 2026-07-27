'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  HandshakeIcon, 
  ShieldCheck, 
  PiggyBank, 
  GraduationCap, 
  Heart, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  HelpCircle,
  ChevronDown
} from 'lucide-react'

const modalities = [
  {
    icon: ShieldCheck,
    title: 'Vida Temporal',
    description: 'Protección enfocada en un periodo clave (10, 15 o 20 años). Ideal para respaldar la educación de tus hijos o el pago de una hipoteca al costo más bajo.',
  },
  {
    icon: Heart,
    title: 'Vida Vitalicio',
    description: 'Cobertura garantizada durante toda tu vida. Asegura que tu legado se transfiera de forma íntegra a tus herederos o beneficiarios.',
  },
  {
    icon: PiggyBank,
    title: 'Ahorro y Retiro (Deducible)',
    description: 'Combina un seguro de vida con un esquema de inversión acumulativo. Aprovecha incentivos fiscales bajo la ley de ISR.',
  },
  {
    icon: Users,
    title: 'Vida Grupo y PyME',
    description: 'Beneficio corporativo diseñado para proteger el activo más valioso de tu empresa: tus colaboradores y directivos.',
  },
]

const riders = [
  {
    title: 'Invalidez Total y Permanente (BIT)',
    description: 'Si sufres una invalidez que te impida trabajar, recibes la suma asegurada contratada y quedas exento de seguir pagando primas.',
  },
  {
    title: 'Indemnización por Accidente (DIAC)',
    description: 'Suma asegurada adicional o doble indemnización en caso de fallecimiento o pérdidas orgánicas por accidente.',
  },
  {
    title: 'Anticipo por Enfermedad Terminal',
    description: 'Acceso anticipado a un porcentaje de la suma asegurada para cubrir tratamientos médicos o cuidados especiales.',
  },
  {
    title: 'Beneficio Deducción Fiscal',
    description: 'Estructuración de planes bajo los artículos 151 o 185 de la LISR para optimizar la declaración anual de impuestos.',
  },
]

const faqs = [
  {
    question: '¿Quiénes pueden ser mis beneficiarios?',
    answer: 'Puedes designar libremente a las personas o instituciones que desees (cónyuge, hijos, padres, socio comercial) y cambiar los porcentajes en cualquier momento.',
  },
  {
    question: '¿Se requiere examen médico para contratar?',
    answer: 'Depende de la edad y la suma asegurada solicitada. Para la mayoría de los planes jóvenes o montos estándar solo se requiere contestar un cuestionario médico simplificado.',
  },
  {
    question: '¿Qué sucede si dejo de pagar el seguro?',
    answer: 'En planes temporales la cobertura se interrumpe. En planes de ahorro o vitalicios, los valores garantizados acumulados pueden respaldar un seguro prorrogado o saldo de rescate.',
  },
  {
    question: '¿Los beneficios de un seguro de vida pagan impuestos?',
    answer: 'Por regla general en México, la indemnización por fallecimiento entregada a beneficiarios en línea directa (cónyuge, ascendientes, descendientes) está exenta del Impuesto Sobre la Renta (ISR).',
  },
]

export default function SeguroDeVida() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-20 md:py-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-techaus-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Header */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-techaus-accent/15 border border-techaus-accent/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  <HandshakeIcon className="w-4 h-4 text-techaus-accent" />
                  <span>Tranquilidad Familiar y Futuro</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Seguro de <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-200">Vida</span> y Patrimonio
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                  Garantiza el futuro económico de tus seres queridos ante cualquier eventualidad. Creamos soluciones a la medida con protección, ahorro y deducción fiscal.
                </p>

                {/* Highlights pills */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <ShieldCheck className="w-4 h-4 text-techaus-accent" />
                    <span>Suma Asegurada a Medida</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <PiggyBank className="w-4 h-4 text-techaus-accent" />
                    <span>Planes Deducibles de Impuestos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <Sparkles className="w-4 h-4 text-techaus-accent" />
                    <span>Protección por Invalidez</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/cotizar?service=Seguro%20de%20Vida"
                  className="w-full sm:w-auto h-16 inline-flex items-center justify-center gap-2 bg-techaus-accent hover:bg-sky-500 text-white font-bold px-8 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all text-base group"
                >
                  <span>Diseñar mi Plan de Vida</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+526622337960"
                  className="w-full sm:w-auto h-16 inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold px-6 rounded-xl border border-slate-700 transition-colors text-base"
                >
                  <PhoneCall className="w-5 h-5 text-techaus-accent" />
                  <span>Agendar Asesoria Financiera</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative flex flex-col justify-between">
              <div className="mx-auto max-w-md lg:max-w-none group w-full flex flex-col justify-between h-full">
                {/* Image Frame */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60">
                  <Image
                    src="/images/seguro_vida_hero.jpg"
                    alt="Seguro de Vida Techaus"
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
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider leading-none">Metas Garantizadas</p>
                      <p className="text-sm font-bold text-white leading-tight">Educación de tus Hijos y Estabilidad Familiar Protegida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modalities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-techaus-accent font-bold tracking-wide uppercase text-sm mb-3">
              Modalidades de Protección
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
              Encuentra el esquema perfecto para tus metas de vida
            </p>
            <div className="w-20 h-1 bg-techaus-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modalities.map((item, idx) => {
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

      {/* Additional Riders & Benefits */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-techaus-accent font-bold text-sm uppercase tracking-wider">
              Coberturas Complementarias
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight mt-2">
              Blindaje integral ante cualquier imprevisto
            </h2>
            <p className="text-slate-600 mt-2">
              Añade beneficios adicionales que protegen tu salud, capacidad de ingresos y optimizan tu patrimonio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riders.map((rider, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-techaus-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{rider.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{rider.description}</p>
                </div>
              </div>
            ))}
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
              Preguntas Frecuentes sobre Seguro de Vida
            </h2>
            <p className="text-slate-600 text-base">
              Resolvemos tus inquietudes para tomar la decisión con total confianza
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
              Asegura el bienestar de tu familia desde hoy
            </h2>
            <p className="text-slate-300 text-lg">
              Cotiza opciones flexibles y personalizadas con nuestros asesores patrimoniales certificados.
            </p>
            <div className="pt-2">
              <Link
                href="/cotizar?service=Seguro%20de%20Vida"
                className="inline-flex items-center gap-2 bg-techaus-accent hover:bg-sky-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
              >
                <span>Cotizar Seguro de Vida</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
