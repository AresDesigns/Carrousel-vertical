import NextJS from "../icons/NextJS.astro"
import Tailwind from "../icons/Tailwind.astro"

const TAGS = {
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: NextJS,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: Tailwind,
    },
  }

export const PROJECTS = [
    {
      title: "SVGL - A beautiful library with SVG logos",
      description:
        "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
      link: "https://svgl.vercel.app/",
      github: "https://github.com/pheralb/svgl",
      image: "/projects/snowy.jpg",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
    },
    {
      title: "Quirium - Retos de programación con JavaScript y TypeScript",
      description:
        "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
      link: "https://adventjs.dev",
      image: "/projects/quirium (1).webp",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
    }, 
    {
      title: "Ares designs - Retos de programación con JavaScript y TypeScript",
      description:
        "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
      link: "https://adventjs.dev",
      image: "/projects/blog1.webp",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
    },
    {
      title: "AdventJS - Retos de programación con JavaScript y TypeScript",
      description:
        "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
      link: "https://adventjs.dev",
      image: "/projects/snowy.jpg",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
    }, {
      title: "AdventJS - Retos de programación con JavaScript y TypeScript",
      description:
        "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
      link: "https://adventjs.dev",
      image: "/projects/snowy.jpg",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
    }, {
      title: "AdventJS - Retos de programación con JavaScript y TypeScript",
      description:
        "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
      link: "https://adventjs.dev",
      image: "/projects/snowy.jpg",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
    }, {
      title: "AdventJS - Retos de programación con JavaScript y TypeScript",
      description:
        "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
      link: "https://adventjs.dev",
      image: "/projects/snowy.jpg",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
    }, {
      title: "AdventJS - Retos de programación con JavaScript y TypeScript",
      description:
        "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
      link: "https://adventjs.dev",
      image: "/projects/snowy.jpg",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
    }, 
  ]