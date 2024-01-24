import React from 'react'

import { RESUME_DATA } from '@/app/data'

export default function SkillList() {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-xl">Skills</h2>
      <div className="flex gap-1 flex-wrap">
        {RESUME_DATA.skills.map((skill) => (
          <div
            key={skill}
            className="px-2 py-1 text-sm rounded-md bg-primary-700 text-primary-100 font-mono font-semibold">
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}
