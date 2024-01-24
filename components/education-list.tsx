import { RESUME_DATA } from '@/app/data'
import { cn } from '@/lib/utils'
import React from 'react'

export default function EducationList() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">Education</h2>
      <div className="flex flex-col gap-4">
        {RESUME_DATA.education.map((edu) => (
          <div
            key={edu.school + edu.degree}
            className={cn('p-5 rounded-lg border-slate-200 border', {
              'print-force-new-page': edu.forceNewPage
            })}>
            <div className="flex justify-between gap-4">
              <div className="flex-1">
                <div className="font-bold hover:underline">{edu.school}</div>
                <div className="text-sm">{edu.degree}</div>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                {edu.start} - {edu.end}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
