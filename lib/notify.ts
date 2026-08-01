import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export async function notifyNewCotizacion(params: {
  name: string
  email: string
  phone: string
  service: string
}) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) return

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: params.name,
        email: params.email,
        phone: params.phone,
        service: params.service,
        time: new Date().toLocaleString('es-MX', { timeZone: 'America/Hermosillo' }),
      },
      { publicKey: PUBLIC_KEY }
    )
  } catch (err) {
    console.error('Error al enviar la notificación por correo:', err)
  }
}
