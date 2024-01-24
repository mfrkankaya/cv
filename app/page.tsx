import React from 'react'

import PersonalInfo from '@/components/personal-info'
import SkillList from '@/components/skill-list'
import ExperienceList from '@/components/experience-list'
import ProjectList from '@/components/project-list'
import EducationList from '@/components/education-list'

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-2xl px-6 py-16 space-y-12">
      <PersonalInfo />
      <ExperienceList />
      <EducationList />
      <SkillList />
      <ProjectList />
    </div>
  )
}
