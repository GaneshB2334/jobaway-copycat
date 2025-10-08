import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const images = [
  '/client/HomeLogo1.jpg',
  '/client/HomeLogo2.jpg',
  '/client/HomeLogo3.jpg',
  '/client/HomeLogo4.jpg',
  '/client/HomeLogo5.jpg',
  '/client/HomeLogo6.jpg',
  '/client/HomeLogo7.jpg',
  '/client/HomeLogo8.jpg',
  '/client/HomeLogo9.jpg',
  '/client/HomeLogo10.jpg',
  '/client/HomeLogo11.jpg',
  '/client/HomeLogo12.jpg',
]

export default function ClientsSlider(){
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', slidesToScroll: 1 })
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(()=>{
    if (!emblaApi) return
    let timer: any
    if (isPlaying) {
      timer = setInterval(() => emblaApi.scrollNext(), 2500)
    }
    return () => clearInterval(timer)
  }, [emblaApi, isPlaying])

  const onMouseEnter = useCallback(()=> setIsPlaying(false), [])
  const onMouseLeave = useCallback(()=> setIsPlaying(true), [])

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="embla overflow-hidden" ref={emblaRef as any} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <div className="embla__container flex gap-6">
            {images.map((src, i)=> (
              <div className="embla__slide flex-shrink-0 w-40 md:w-56 flex items-center justify-center bg-white p-4 rounded-lg shadow-sm border border-transparent hover:border-brand transition-colors" key={i}>
                <img src={src} alt={`client-${i}`} className="max-h-24 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
