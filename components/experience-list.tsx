import React from 'react'

import { RESUME_DATA } from '@/app/data'
import { cn } from '@/lib/utils'

export default function ExperienceList() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">Work Experience</h2>
      <div className="flex flex-col gap-4">
        {RESUME_DATA.work.map((work) => (
          <div
            key={work.company + work.title}
            className={cn('p-5 rounded-lg border-slate-200 border', {
              'print-force-new-page': work.forceNewPage
            })}>
            <div className="flex justify-between gap-4">
              <div className="flex-1">
                <a
                  href={work.link}
                  target="_blank"
                  className="font-bold hover:underline">
                  {work.company}
                </a>
                <div className="text-sm">{work.title}</div>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                {work.start} - {work.end}
              </div>
            </div>

            {/* {work?.description && (
              <p className="mt-4 text-sm text-slate-700">{work.description}</p>
            )} */}

            {work?.list.length > 0 && (
              <ul className="space-y-2 mt-4 pl-3">
                {work.list.map((item) => (
                  <li key={item} className="text-sm text-slate-700 relative">
                    <div className="bg-current w-1 h-1 absolute -left-3 top-2 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
