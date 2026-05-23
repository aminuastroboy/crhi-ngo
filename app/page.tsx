export default function CRHIHomepage() {
  const stats = [
    ['500+', 'Children Supported'],
    ['50+', 'Families Empowered'],
    ['10+', 'Communities Reached'],
    ['2022', 'Founded'],
  ];

  const programs = [
    'Child Protection',
    'Education',
    'Youth Empowerment',
    'Community Development',
    'WASH',
    'Nutrition',
  ];

  const galleryImages = [
    '/images/crhi-gallery-1.jpg',
    '/images/crhi-gallery-2.jpg',
    '/images/crhi-gallery-3.jpg',
    '/images/crhi-gallery-4.jpg',
  ];

  const newsPosts = [
    {
      title: 'Educational Outreach Program',
      image: '/images/crhi-gallery-1.jpg',
      description:
        'CRHI continues supporting students with mentorship and educational engagement activities.',
    },
    {
      title: 'Community Awareness Session',
      image: '/images/crhi-gallery-2.jpg',
      description:
        'Community leaders and families gathered to discuss child protection and resilience.',
    },
    {
      title: 'Youth Empowerment Initiative',
      image: '/images/crhi-gallery-3.jpg',
      description:
        'Young people participated in life-skills and leadership development activities.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/crhi-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-950/75" />
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Building Bridges of Hope, One Child at a Time
          </h1>
        </div>
      </section>
    </div>
  );
}
