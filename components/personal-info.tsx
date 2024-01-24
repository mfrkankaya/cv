import React from 'react'

import { RESUME_DATA } from '@/app/data'
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react'

export default function PersonalInfo() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-black italic">{RESUME_DATA.name}</h1>
      <p>{RESUME_DATA.title}</p>
      <div className="w-1/2 h-px bg-slate-200 mx-auto my-4 min-w-60" />
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <div className="flex items-center gap-1 text-sm text-slate-600">
          <MapPinIcon size={16} />
          <span>{RESUME_DATA.location}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-slate-600">
          <MailIcon size={16} />
          <span>{RESUME_DATA.email}</span>
        </div>
        {!!RESUME_DATA.phone && (
          <div className="flex items-center gap-1 text-sm text-slate-600">
            <PhoneIcon size={16} />
            <span>{RESUME_DATA.phone}</span>
          </div>
        )}
      </div>
      <div className="w-full h-px bg-slate-200 mx-auto my-4 min-w-60" />
      <p className="font-mono text-slate-700 text-sm sm:text-base">{RESUME_DATA.summary}</p>
    </div>
  )
}
