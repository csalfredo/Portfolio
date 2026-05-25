'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProjectScreenshotGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const active = images[activeIndex]

  return (
    <>
      <div className="bg-stone-100">
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="group relative block w-full overflow-hidden bg-stone-50"
          aria-label={`Expand ${active.label} screenshot`}
        >
          <div className="flex min-h-[280px] items-center justify-center px-4 py-6 sm:min-h-[320px]">
            <Image
              src={active.src}
              alt={active.alt}
              width={1200}
              height={750}
              className="h-auto max-h-[280px] w-auto max-w-full object-contain transition duration-300 group-hover:scale-[1.01] sm:max-h-[320px]"
              priority={activeIndex === 0}
            />
          </div>
          <span className="absolute bottom-3 right-3 rounded-md bg-stone-900/75 px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
            Click to expand
          </span>
        </button>

        <div className="border-t border-stone-200 bg-white px-4 py-3">
          <p className="text-sm font-semibold text-stone-800">{active.label}</p>
          {images.length > 1 && (
            <p className="mt-1 text-xs text-stone-500">Select a screen below to preview</p>
          )}
        </div>

        {images.length > 1 && (
        <div className="grid grid-cols-2 gap-2 border-t border-stone-200 p-3 sm:grid-cols-4">
          {images.map((screenshot, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={screenshot.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${screenshot.label}`}
                aria-current={isActive ? 'true' : undefined}
                className={`rounded-lg border p-2 text-left transition ${
                  isActive
                    ? 'border-amber-700 bg-amber-50 shadow-sm'
                    : 'border-stone-200 bg-white hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <div className="flex h-16 items-center justify-center overflow-hidden rounded-md border border-stone-200 bg-stone-50 sm:h-20">
                  <Image
                    src={screenshot.src}
                    alt=""
                    width={240}
                    height={140}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p
                  className={`mt-2 text-xs font-medium leading-snug ${
                    isActive ? 'text-amber-900' : 'text-stone-600'
                  }`}
                >
                  {screenshot.label}
                </p>
              </button>
            )
          })}
        </div>
        )}
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/90 p-4"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close expanded screenshot"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-h-[90vh] max-w-6xl overflow-auto rounded-lg bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={1600}
              height={1000}
              className="h-auto w-full max-w-6xl"
            />
            <p className="border-t border-stone-200 px-4 py-3 text-sm font-medium text-stone-700">
              {active.label}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
