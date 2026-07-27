const sections = [
  {
    title: '1. Responsable del tratamiento de datos',
    body: [
      'Techaus ("nosotros", "nuestro" o "la empresa"), con domicilio en Paseo Vista del Lago 17, Fracc. Vista del Lago, Hermosillo, Sonora, México, es responsable del uso y protección de tus datos personales, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
    ],
  },
  {
    title: '2. Datos personales que recabamos',
    body: [
      'Para brindarte cotizaciones y contratar los servicios que ofrecemos, podemos recabar datos como: nombre completo, correo electrónico, número telefónico y el tipo de servicio de tu interés (gastos médicos, auto, vida, hogar o empresa). Estos datos se obtienen directamente cuando llenas nuestros formularios de contacto o cotización.',
    ],
  },
  {
    title: '3. Finalidades del tratamiento',
    body: [
      'Tus datos personales serán utilizados para las siguientes finalidades: contactarte para dar seguimiento a tu solicitud de cotización, elaborar propuestas de protección a la medida, brindarte atención y soporte, y enviarte información relevante sobre nuestros productos y servicios.',
    ],
  },
  {
    title: '4. Transferencia de datos',
    body: [
      'Tus datos podrán ser compartidos con las compañías aseguradoras con las que trabajamos, únicamente con el fin de generar cotizaciones y, en su caso, formalizar la contratación de una póliza. No vendemos ni rentamos tu información personal a terceros con fines distintos a los aquí señalados.',
    ],
  },
  {
    title: '5. Derechos ARCO',
    body: [
      'Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte (derechos ARCO) al tratamiento de tus datos personales. Para ejercer estos derechos, puedes escribirnos a hola@techaus.mx indicando tu solicitud; te daremos respuesta en un plazo razonable conforme a la normativa aplicable.',
    ],
  },
  {
    title: '6. Uso de cookies',
    body: [
      'Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar tu experiencia de navegación y analizar el uso del sitio. Puedes configurar tu navegador para rechazar estas tecnologías, aunque esto podría afectar algunas funcionalidades.',
    ],
  },
  {
    title: '7. Cambios al aviso de privacidad',
    body: [
      'Nos reservamos el derecho de actualizar este aviso de privacidad en cualquier momento. Cualquier modificación será publicada en esta misma página con su fecha de actualización correspondiente.',
    ],
  },
  {
    title: '8. Contacto',
    body: [
      'Si tienes dudas o comentarios sobre este aviso de privacidad, contáctanos en hola@techaus.mx o al teléfono +52 (662) 233 7960.',
    ],
  },
]

export default function PoliticaDePrivacidad() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Política de Privacidad
          </h1>
          <p className="text-slate-500 text-sm">Última actualización: julio de 2026</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-slate-800 mb-3">{section.title}</h2>
              {section.body.map((paragraph, idx) => (
                <p key={idx} className="text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
