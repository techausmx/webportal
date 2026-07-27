const sections = [
  {
    title: '1. Aceptación de los términos',
    body: [
      'Al acceder y utilizar el sitio web de Techaus, aceptas cumplir con los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos, te pedimos abstenerte de utilizar este sitio.',
    ],
  },
  {
    title: '2. Uso del sitio',
    body: [
      'Este sitio tiene como finalidad informar sobre los servicios de protección y soluciones en la nube que ofrece Techaus, así como facilitar la solicitud de cotizaciones. Te comprometes a utilizar el sitio de forma lícita y a no realizar actividades que puedan dañar, sobrecargar o afectar su funcionamiento.',
    ],
  },
  {
    title: '3. Propiedad intelectual',
    body: [
      'Todo el contenido de este sitio —incluyendo textos, imágenes, logotipos y diseño— es propiedad de Techaus o de sus licenciantes, y está protegido por las leyes de propiedad intelectual aplicables. Queda prohibida su reproducción total o parcial sin autorización previa por escrito.',
    ],
  },
  {
    title: '4. Cotizaciones y contratación de seguros',
    body: [
      'Las cotizaciones solicitadas a través de este sitio son estimaciones sujetas a revisión y aprobación por parte de las compañías aseguradoras correspondientes. La contratación final de cualquier póliza estará sujeta a los términos, condiciones y procesos de suscripción de la aseguradora seleccionada.',
    ],
  },
  {
    title: '5. Limitación de responsabilidad',
    body: [
      'Techaus hace su mejor esfuerzo por mantener la información de este sitio actualizada y precisa; sin embargo, no garantiza que el contenido esté libre de errores. Techaus no será responsable por daños derivados del uso o la imposibilidad de uso del sitio.',
    ],
  },
  {
    title: '6. Enlaces a terceros',
    body: [
      'Este sitio puede contener enlaces a sitios web de terceros, incluidas nuestras redes sociales y las de compañías aseguradoras aliadas. Techaus no controla ni se hace responsable del contenido o las políticas de privacidad de dichos sitios.',
    ],
  },
  {
    title: '7. Modificaciones',
    body: [
      'Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor a partir de su publicación en esta página.',
    ],
  },
  {
    title: '8. Legislación aplicable',
    body: [
      'Estos Términos y Condiciones se rigen por las leyes vigentes en los Estados Unidos Mexicanos. Cualquier controversia derivada de su interpretación o cumplimiento se someterá a los tribunales competentes de Hermosillo, Sonora.',
    ],
  },
  {
    title: '9. Contacto',
    body: [
      'Para cualquier duda sobre estos Términos y Condiciones, contáctanos en hola@techaus.mx o al teléfono +52 (662) 233 7960.',
    ],
  },
]

export default function TerminosYCondiciones() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Términos y Condiciones
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
