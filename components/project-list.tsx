import React from 'react'

import { RESUME_DATA } from '@/app/data'

export default function ProjectList() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">Projects</h2>
      <div className="grid grid-cols-1  gap-4">
        {RESUME_DATA.projects.map((project) => (
          <div key={project.title} className="border border-slate-200 rounded-lg p-4">
            <a
              href={project.link.href}
              target="_blank"
              className="font-bold hover:underline">
              {project.title}
            </a>
            <div className="text-sm font-mono text-slate-600">
              {project.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
