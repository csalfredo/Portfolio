import Image from 'next/image'
import ProjectScreenshotGallery from '@/components/ProjectScreenshotGallery'

export default function ProjectCard({ project }) {
  const isFeatured = project.featured
  const isSecondary = project.secondary

  return (
    <li
      className={`group rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
        isFeatured
          ? 'border-2 border-amber-700/40 bg-white p-7 shadow-lg hover:shadow-2xl sm:p-8'
          : isSecondary
            ? 'border border-stone-300 bg-stone-50/80 p-5 shadow-sm hover:shadow-md'
            : 'border bg-white/70 p-6 shadow-md hover:shadow-xl'
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <h3
          className={`font-bold text-stone-700 group-hover:text-stone-600 ${
            isFeatured ? 'text-2xl' : isSecondary ? 'text-lg' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>
        {isFeatured && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900">
            Featured
          </span>
        )}
        {project.badge && (
          <span className="rounded-full bg-stone-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone-700">
            {project.badge}
          </span>
        )}
      </div>

      {project.summary && (
        <p
          className={`mt-2 text-stone-600 font-medium ${
            isSecondary ? 'text-sm' : 'text-base'
          }`}
        >
          {project.summary}
        </p>
      )}

      <div
        className={`overflow-hidden rounded-lg border border-stone-200 bg-stone-100 shadow-sm ${
          project.summary ? 'mt-3' : 'mt-4'
        }`}
      >
        {project.images ? (
          <ProjectScreenshotGallery images={project.images} />
        ) : (
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />
        )}
      </div>

      <p
        className={`mt-4 text-slate-600 leading-relaxed ${
          isSecondary ? 'text-sm' : ''
        }`}
      >
        {project.description}
      </p>

      <div className={`mt-4 ${isSecondary ? 'mt-3' : ''}`}>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
          Key Features
        </h4>
        <ul className={`mt-2 space-y-1 ${isSecondary ? 'grid sm:grid-cols-2 sm:gap-x-4' : ''}`}>
          {project.features.map((feature) => (
            <li key={feature} className="text-slate-600 text-sm flex items-start gap-2">
              <span className="text-amber-700 mt-0.5">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-gradient-to-r from-amber-50 to-stone-100 text-stone-700 rounded-full text-xs font-medium"
          >
            {item}
          </span>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="mt-5 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-100 bg-stone-700 rounded-lg hover:bg-stone-800 transition-colors duration-200"
            >
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-700 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors duration-200"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </li>
  )
}
