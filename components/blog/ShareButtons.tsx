'use client'

import { useState } from 'react'
import { Share2, Check, Copy, MessageCircle } from 'lucide-react'

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleWhatsAppShare = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(`Te recomiendo este artículo de Techaus: "${title}"\n`)
    window.open(`https://api.whatsapp.com/send?text=${text}${url}`, '_blank')
  }

  return (
    <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
        <Share2 className="w-4 h-4 text-techaus-accent" />
        <span>Compartir este artículo:</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
          <span>{copied ? '¡Enlace copiado!' : 'Copiar enlace'}</span>
        </button>

        <button
          onClick={handleWhatsAppShare}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  )
}
