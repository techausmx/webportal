'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  House, 
  Building2, 
  ShieldCheck, 
  Flame, 
  Umbrella, 
  Wrench, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Clock, 
  Sparkles, 
  HelpCircle,
  ChevronDown,
  Briefcase
} from 'lucide-react'

const homeBenefits = [
  'Protección de Muros y Estructura física ante sismos, incendios y huracanes.',
  'Cobertura de Contenidos: electrodomésticos, muebles, computadoras y pertenencias.',
  'Robo de contenidos dentro y fuera del inmueble.',
  'Responsabilidad Civil para la familia, empleados domésticos y mascotas.',
  'Servicios de Asistencia del Hogar 24/7: plomería, cerrajería, electricidad y cristalería.',
]

const businessBenefits = [
  'Aseguramiento de inmuebles comerciales, oficinas, bodegas y naves industriales.',
  'Protección de maquinaria, equipo electrónico, materias primas e inventarios.',
  'Pérdidas consecutivas por Interrupción de Negocio / Pérdida de Utilidades.',
  'Responsabilidad Civil General, de Operación, Productos y Trabajos Terminados.',
  'Robo de dinero y valores en tránsito o dentro de las instalaciones.',
]

const emergencyServices = [
  {
    icon: Wrench,
    title: 'Plomería y Fugas',
    description: 'Atención urgente en rotura de tuberías e instalaciones hidráulicas para prevenir inundaciones.',
  },
  {
    icon: Lock,
    title: 'Cerrajería de Emergencia',
    description: 'Apertura de accesos principales en caso de pérdida de llaves o fallos de cerradura.',
  },
  {
    icon: Flame,
    title: 'Mantenimiento Eléctrico',
    description: 'Reparación de cortos circuitos e interrupciones en el suministro interno de energía.',
  },
  {
    icon: Umbrella,
    title: 'Huracanes y Fenómenos',
    description: 'Respaldo inmediato ante inundaciones, lluvias extraordinarias o granizadas.',
  },
]

const faqs = [
  {
    question: '¿Si rento la casa o local comercial, puedo contratar este seguro?',
    answer: '¡Por supuesto! Si eres inquilino, puedes asegurar únicamente tus Contenidos y la Responsabilidad Civil como arrendatario. Si eres el propietario arrendador, aseguras la Edificación.',
  },
  {
    question: '¿Qué información se requiere para cotizar la protección de una empresa?',
    answer: 'Necesitamos el giro comercial, valor estimado de la construcción e inventarios, dirección exacta y medidas de seguridad existentes (camaras, extintores, vigilancia).',
  },
  {
    question: '¿El seguro de hogar cubre mi equipo de cómputo fuera de casa?',
    answer: 'Sí, la mayoría de nuestras pólizas premium cuentan con endoso para cubrir laptops y tablets en caso de asalto fuera del domicilio.',
  },
  {
    question: '¿Cómo funciona la asistencia 24/7 de cerrajería o plomería?',
    answer: 'Llamas a la línea directa de atención Techaus y se coordina la visita de un especialista técnico calificado sin costo de mano de obra según el límite de tu póliza.',
  },
]

export default function HogarYEmpresa() {
  const [activeTab, setActiveTab] = useState<'hogar' | 'empresa'>('hogar')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-20 md:py-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-techaus-accent/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Header */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-techaus-accent/15 border border-techaus-accent/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  <House className="w-4 h-4 text-techaus-accent" />
                  <span>Protección Patrimonial e Inmobiliaria</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Seguro de <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-200">Hogar y Empresa</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                  Tu patrimonio es el resultado de años de esfuerzo. Protégelo de incendios, robos, desastres naturales y responsabilidad civil con la tranquilidad que mereces.
                </p>

                {/* Highlights pills */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <ShieldCheck className="w-4 h-4 text-techaus-accent" />
                    <span>Edificación y Contenidos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <Clock className="w-4 h-4 text-techaus-accent" />
                    <span>Asistencia 24 Horas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700">
                    <Sparkles className="w-4 h-4 text-techaus-accent" />
                    <span>Fenómenos Hidrometeorológicos</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/cotizar?service=Hogar%20y%20Empresa"
                  className="w-full sm:w-auto h-16 inline-flex items-center justify-center gap-2 bg-techaus-accent hover:bg-sky-500 text-white font-bold px-8 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all text-base group"
                >
                  <span>Proteger mi Patrimonio</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+526622337960"
                  className="w-full sm:w-auto h-16 inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold px-6 rounded-xl border border-slate-700 transition-colors text-base"
                >
                  <PhoneCall className="w-5 h-5 text-techaus-accent" />
                  <span>Asesoría Técnica Inmobiliaria</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative flex flex-col justify-between">
              <div className="mx-auto max-w-md lg:max-w-none group w-full flex flex-col justify-between h-full">
                {/* Image Frame */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60">
                  <Image
                    src="/images/hogar_empresa_hero.jpg"
                    alt="Seguro de Hogar y Empresa Techaus"
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
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider leading-none">Blindaje Inmobiliario</p>
                      <p className="text-sm font-bold text-white leading-tight">Seguridad Total para Residencias y Negocios</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solutions Toggle (Hogar vs Empresa) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-techaus-accent font-bold tracking-wide uppercase text-sm mb-3">
              Soluciones Especializadas
            </h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
              Protección adaptada a tus activos
            </p>
            <div className="w-20 h-1 bg-techaus-accent mx-auto mt-4 rounded-full" />
          </div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 inline-flex items-center gap-2">
              <button
                onClick={() => setActiveTab('hogar')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === 'hogar'
                    ? 'bg-techaus-accent text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <House className="w-4 h-4" />
                <span>Seguro de Hogar</span>
              </button>
              <button
                onClick={() => setActiveTab('empresa')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === 'empresa'
                    ? 'bg-techaus-accent text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Seguro de Empresa y Negocio</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-sm max-w-5xl mx-auto">
            {activeTab === 'hogar' ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-sky-100 text-techaus-accent">
                    <House className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Protección Integral para tu Vivienda</h3>
                    <p className="text-slate-600 text-sm">Resguardo completo para propietarios e inquilinos</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {homeBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/60">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700 text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 text-center">
                  <Link
                    href="/cotizar?service=Hogar%20y%20Empresa"
                    className="inline-flex items-center gap-2 bg-techaus-accent hover:bg-sky-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all text-sm"
                  >
                    <span>Cotizar Seguro de Hogar</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-sky-100 text-techaus-accent">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Blindaje Comercial y Empresarial</h3>
                    <p className="text-slate-600 text-sm">Continua las operaciones de tu negocio pase lo que pase</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {businessBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/60">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700 text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 text-center">
                  <Link
                    href="/cotizar?service=Hogar%20y%20Empresa"
                    className="inline-flex items-center gap-2 bg-techaus-accent hover:bg-sky-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all text-sm"
                  >
                    <span>Cotizar Seguro de Empresa</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Emergency Assistance 24/7 Grid */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-techaus-accent font-bold text-sm uppercase tracking-wider">
              Asistencia Inmediata
            </span>
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight mt-2">
              Auxilio técnico 24 horas sin costo extra
            </h2>
            <p className="text-slate-600 mt-2">
              Resuelve imprevistos domésticos y comerciales al instante con especialistas calificados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyServices.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
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
              Preguntas Frecuentes sobre Hogar y Empresa
            </h2>
            <p className="text-slate-600 text-base">
              Aclaramos los puntos clave sobre la cobertura de tus inmuebles
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
              Protege la inversión de tu vida hoy mismo
            </h2>
            <p className="text-slate-300 text-lg">
              Cotiza un plan a la medida de tu hogar o empresa con la asesoría experta de Techaus.
            </p>
            <div className="pt-2">
              <Link
                href="/cotizar?service=Hogar%20y%20Empresa"
                className="inline-flex items-center gap-2 bg-techaus-accent hover:bg-sky-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
              >
                <span>Cotizar Protección Patrimonial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
