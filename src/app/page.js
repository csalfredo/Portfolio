import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    title: 'Tow Target',
    featured: true,
    summary: 'Real-time dispatch platform for tow companies and stranded drivers.',
    description:
      'Full-stack dispatch and location management platform that streamlines communication between dispatchers, tow drivers, and stranded motorists through real-time location workflows and mobile-first interfaces.',
    images: [
      {
        src: '/projects/tow-target/stranded-drivers.png',
        label: 'Stranded Drivers',
        alt: 'Tow Target stranded drivers dashboard with job cards, status filters, and map actions',
      },
      {
        src: '/projects/tow-target/nav-menu.png',
        label: 'Admin Menu',
        alt: 'Tow Target navigation menu with account and admin management options',
      },
      {
        src: '/projects/tow-target/tow-drivers.png',
        label: 'Tow Drivers',
        alt: 'Tow Target tow drivers management table with edit and delete actions',
      },
      {
        src: '/projects/tow-target/manage-users.png',
        label: 'Manage Users',
        alt: 'Tow Target manage users page with team member list and actions',
      },
    ],
    features: [
      'Driver location tracking',
      'Dispatcher workflow management',
      'Real-time communication system',
      'Responsive mobile-first UI',
      'Authentication and role-based access',
    ],
    tech: ['Next.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'Material UI', 'Docker'],
  },
  {
    title: 'Produce Order',
    featured: true,
    summary: 'Produce ordering and inventory system built from real retail workflow experience.',
    description:
      'Produce ordering and inventory management system built using real-world grocery and inventory workflow knowledge from 20+ years in retail operations.',
    images: [
      {
        src: '/projects/produce-order/place-order.png',
        label: 'Place Order',
        alt: 'Produce Order shopping cart with searchable catalog, promo pricing, and checkout',
      },
      {
        src: '/projects/produce-order/inventory-list.png',
        label: 'Inventory List',
        alt: 'Produce Order admin inventory table with quantity, pricing, and edit actions',
      },
      {
        src: '/projects/produce-order/order-history.png',
        label: 'Order History',
        alt: 'Produce Order admin order history with customer email and line item details',
      },
      {
        src: '/projects/produce-order/review-order.png',
        label: 'Review Order',
        alt: 'Produce Order checkout review screen with quantities and submit order',
      },
      {
        src: '/projects/produce-order/inventory-mobile.png',
        label: 'Mobile Inventory',
        alt: 'Produce Order responsive mobile inventory view with search and item cards',
      },
    ],
    features: [
      'User and admin authentication with role-based access',
      'Browse and search produce catalog with pricing and stock status',
      'Shopping cart with quantity selection and order totals',
      'Admin inventory management (add, edit, and delete items)',
      'Admin order tracking and order history dashboard',
      'Order submission through Laravel API integration',
    ],
    tech: ['Next.js', 'Laravel', 'MySQL', 'Material UI', 'REST APIs'],
  },
  {
    title: 'Student Management System',
    secondary: true,
    badge: 'Console Project',
    summary: 'C# console app for student records, attendance, and role-based admin workflows.',
    description:
      'Administrative student management system built with C# and .NET concepts to simulate secure internal school operations.',
    images: [
      {
        src: '/projects/student-management.png',
        label: 'Console Dashboard',
        alt: 'Student Management System console dashboard with menu and student records',
      },
    ],
    features: [
      'Full CRUD for student records',
      'Attendance tracking',
      'Input validation and reporting',
      'OOP architecture with role-based access',
    ],
    tech: ['C#', '.NET', 'OOP', 'Console Application'],
  },
]

const featuredProjects = projects.filter((project) => project.featured)
const otherProjects = projects.filter((project) => !project.featured)

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-300 via-warm-gray-200 to-stone-300 text-stone-800 font-sans">
      <header className="p-6 sm:p-8 md:p-12 bg-gradient-to-r from-stone-700 via-amber-900 to-stone-700 text-stone-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-stone-50 to-stone-200 animate-fade-in">
            Alfredo Iniguez
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-stone-300 font-light tracking-wide">
            Self-Taught Full-Stack Developer
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 md:p-8 space-y-16">
        <section id="about" className="transition-all duration-300 hover:transform hover:scale-[1.01] bg-stone-50/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-700 border-b-2 border-warm-gray-400 pb-2 mb-4">
            About Me
          </h2>
          <p className="mt-2 leading-relaxed text-stone-600 text-lg font-light">
            Self-taught full-stack developer with experience building modern web applications using
            Next.js, Laravel, MySQL, and Tailwind CSS. Combines 20+ years of retail operations
            experience with software development to create practical, business-focused solutions.
          </p>
          <p className="mt-4 leading-relaxed text-stone-600 text-lg font-light">
            I work across authentication, REST APIs, databases, Docker, and responsive UI — building
            systems that solve real operational problems, not just demos.
          </p>
        </section>

        <section id="projects">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 border-b-2 border-warm-gray-400 pb-2 mb-4">
            Projects
          </h2>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            Featured work highlights full-stack web applications. Project repositories will be added to
            GitHub soon — my profile is linked in Contact below.
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-stone-700">Featured Work</h3>
            <ul className="mt-4 grid grid-cols-1 gap-6 lg:gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </ul>
          </div>

          {otherProjects.length > 0 && (
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-stone-700">Additional Projects</h3>
              <ul className="mt-4 grid grid-cols-1 gap-6">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </ul>
            </div>
          )}
        </section>

        <section id="skills">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 border-b-2 border-warm-gray-400 pb-2 mb-4">
            Skills
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              'Next.js',
              'Laravel',
              'PHP',
              'C#',
              'MySQL',
              'Tailwind CSS',
              'Material UI',
              'REST APIs',
              'Authentication',
              'Docker',
              'Git',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-amber-50 to-stone-100 text-stone-700 
                rounded-full text-sm font-medium hover:from-amber-100 hover:to-stone-200 
                transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-700 border-b-2 border-warm-gray-400 pb-2 mb-4">
            Contact
          </h2>
          <div className="mt-6 space-y-4">
            <p className="flex items-center gap-3 text-lg">
              <span className="font-medium text-slate-700">Email:</span>
              <a
                href="mailto:alfredo.prog@gmail.com"
                className="text-stone-600 hover:text-stone-800 hover:underline transition-colors duration-200"
              >
                alfredo.prog@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3 text-lg">
              <span className="font-medium text-slate-700">GitHub:</span>
              <a
                href="https://github.com/csalfredo"
                className="text-stone-600 hover:text-stone-800 hover:underline transition-colors duration-200"
              >
                github.com/csalfredo
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-16 p-8 bg-stone-600 text-stone-200 text-center">
        <p className="text-sm sm:text-base font-light">&copy; 2026 Alfredo Iniguez. All rights reserved.</p>
      </footer>
    </div>
  )
}
