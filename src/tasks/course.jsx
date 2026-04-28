// ============================================================
//  course.jsx — Mini Course Website
//  Concepts covered:
//    • React Router (BrowserRouter, Routes, Route, Link, NavLink, useParams, useNavigate)
//    • Components  (Navbar, Home, CourseList, CourseDetail, NotFound)
//    • Props       (passing data between components)
//    • Tailwind CSS (utility-first styling)
//    • Static data (array of course objects)
// ============================================================

import React from 'react'

// ─── React Router imports ───────────────────────────────────
// BrowserRouter  → wraps the whole app and enables routing
// Routes         → container that holds all <Route> definitions
// Route          → maps a URL path to a component
// Link           → like <a> but doesn't reload the page
// NavLink        → like Link but knows if it is the "active" route
// useParams      → hook to read :id from the URL  e.g. /courses/3
// useNavigate    → hook to navigate programmatically (go back, redirect)
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useNavigate,
} from 'react-router-dom'


// ─── Static Course Data ─────────────────────────────────────
// In a real app this would come from an API.
// Here we just define 5 course objects in a plain JS array.
const courseData = [
  {
    id: 1,
    title: 'React Basics',
    price: 999,
    description:
      'Learn the fundamentals of React — components, props, state, hooks and JSX. Perfect for absolute beginners who want to build modern UIs.',
    level: 'Beginner',
    duration: '8 hours',
    tag: 'Frontend',
  },
  {
    id: 2,
    title: 'Node.js',
    price: 799,
    description:
      'Master server-side JavaScript with Node.js. Build REST APIs, work with the filesystem, and handle async operations like a pro.',
    level: 'Intermediate',
    duration: '10 hours',
    tag: 'Backend',
  },
  {
    id: 3,
    title: 'Tailwind CSS',
    price: 599,
    description:
      'Style any UI in minutes using utility-first CSS. You will learn responsive design, dark mode, animations and custom themes.',
    level: 'Beginner',
    duration: '5 hours',
    tag: 'Styling',
  },
  {
    id: 4,
    title: 'Full-Stack with MERN',
    price: 1499,
    description:
      'Combine MongoDB, Express, React and Node to build complete full-stack web applications from scratch and deploy them online.',
    level: 'Advanced',
    duration: '20 hours',
    tag: 'Full-Stack',
  },
  {
    id: 5,
    title: 'JavaScript Mastery',
    price: 699,
    description:
      'Deep-dive into modern JavaScript — ES6+, closures, promises, async/await, the event loop, and object-oriented patterns.',
    level: 'Intermediate',
    duration: '12 hours',
    tag: 'Core JS',
  },
  {
    id: 6,
    title: 'Python for Web',
    price: 899,
    description:
      'Learn Python fundamentals and use Flask/Django to build dynamic web applications with databases.',
    level: 'Beginner',
    duration: '9 hours',
    tag: 'Backend',
  },
  {
    id: 7,
    title: 'Git & GitHub',
    price: 499,
    description:
      'Master version control with Git and GitHub. Learn branching, merging, pull requests, and collaboration workflows.',
    level: 'Beginner',
    duration: '4 hours',
    tag: 'Tools',
  },
  {
    id: 8,
    title: 'TypeScript Essentials',
    price: 799,
    description:
      'Add strong typing to JavaScript with TypeScript. Learn interfaces, generics, and advanced type features.',
    level: 'Intermediate',
    duration: '7 hours',
    tag: 'Frontend',
  },
  {
    id: 9,
    title: 'Next.js',
    price: 1099,
    description:
      'Build production-ready React apps with Next.js. Learn SSR, SSG, API routes, and performance optimization.',
    level: 'Intermediate',
    duration: '12 hours',
    tag: 'Frontend',
  },
  {
    id: 10,
    title: 'MongoDB',
    price: 699,
    description:
      'Learn NoSQL database concepts with MongoDB. Practice CRUD operations, aggregation, and schema design.',
    level: 'Beginner',
    duration: '6 hours',
    tag: 'Database',
  },
  {
    id: 11,
    title: 'Express.js',
    price: 799,
    description:
      'Learn Express.js to build RESTful APIs, handle middleware, routing, and authentication.',
    level: 'Intermediate',
    duration: '8 hours',
    tag: 'Backend',
  },
  {
    id: 12,
    title: 'Docker Basics',
    price: 999,
    description:
      'Containerize applications with Docker. Learn images, containers, volumes, and orchestration basics.',
    level: 'Intermediate',
    duration: '10 hours',
    tag: 'DevOps',
  },
  {
    id: 13,
    title: 'Kubernetes Fundamentals',
    price: 1299,
    description:
      'Orchestrate containers with Kubernetes. Learn pods, deployments, services, and scaling strategies.',
    level: 'Advanced',
    duration: '15 hours',
    tag: 'DevOps',
  },
  {
    id: 14,
    title: 'GraphQL',
    price: 899,
    description:
      'Learn GraphQL to query APIs efficiently. Understand schemas, resolvers, mutations, and subscriptions.',
    level: 'Intermediate',
    duration: '7 hours',
    tag: 'API',
  },
  {
    id: 15,
    title: 'Redux Toolkit',
    price: 699,
    description:
      'Master state management in React with Redux Toolkit. Learn slices, reducers, and async thunks.',
    level: 'Intermediate',
    duration: '6 hours',
    tag: 'Frontend',
  },
  {
    id: 16,
    title: 'Angular Basics',
    price: 999,
    description:
      'Learn Angular fundamentals — components, directives, services, and dependency injection.',
    level: 'Beginner',
    duration: '10 hours',
    tag: 'Frontend',
  },
  {
    id: 17,
    title: 'Vue.js',
    price: 899,
    description:
      'Learn Vue.js to build reactive UIs. Understand directives, components, Vue Router, and Vuex.',
    level: 'Beginner',
    duration: '9 hours',
    tag: 'Frontend',
  },
  {
    id: 18,
    title: 'Testing with Jest',
    price: 599,
    description:
      'Write unit and integration tests with Jest. Learn mocking, snapshots, and coverage reporting.',
    level: 'Intermediate',
    duration: '5 hours',
    tag: 'Testing',
  },
  {
    id: 19,
    title: 'CI/CD with GitHub Actions',
    price: 999,
    description:
      'Automate workflows with GitHub Actions. Learn pipelines, testing, deployment, and secrets management.',
    level: 'Intermediate',
    duration: '8 hours',
    tag: 'DevOps',
  },
  {
    id: 20,
    title: 'Cloud with AWS',
    price: 1499,
    description:
      'Learn AWS basics — EC2, S3, Lambda, IAM, and deploy scalable cloud applications.',
    level: 'Advanced',
    duration: '18 hours',
    tag: 'Cloud',
  },
]



// ─── Helper: tag color mapping ───────────────────────────────
// Returns a Tailwind color class based on the course tag.
function tagColor(tag) {
  const map = {
    Frontend:   'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    Backend:    'bg-green-500/20  text-green-300  border-green-500/30',
    Styling:    'bg-pink-500/20   text-pink-300   border-pink-500/30',
    'Full-Stack':'bg-amber-500/20  text-amber-300  border-amber-500/30',
    'Core JS':  'bg-cyan-500/20   text-cyan-300   border-cyan-500/30',
    Tools:      'bg-slate-500/20  text-slate-300  border-slate-500/30',
    Database:   'bg-teal-500/20   text-teal-300   border-teal-500/30',
    DevOps:     'bg-blue-500/20   text-blue-300   border-blue-500/30',
    API:        'bg-orange-500/20 text-orange-300 border-orange-500/30',
    Testing:    'bg-red-500/20    text-red-300    border-red-500/30',
    Cloud:      'bg-violet-500/20 text-violet-300 border-violet-500/30',
  }
  return map[tag] ?? 'bg-white/10 text-white/60 border-white/20'
}

// ─── Helper: level badge color ───────────────────────────────
function levelColor(level) {
  const map = {
    Beginner:     'text-emerald-400',
    Intermediate: 'text-amber-400',
    Advanced:     'text-rose-400',
  }
  return map[level] ?? 'text-white/60'
}


// ================================================================
//  COMPONENT 1 — Navbar
// ================================================================
// The Navbar is shown on EVERY page (placed outside <Routes>).
// NavLink is used instead of Link so we can style the active route.
// ================================================================
function Navbar() {
  return (
    // Sticky header stays at the top while scrolling
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-lg bg-slate-950/80">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ── Logo / Brand ── */}
        {/* Link to "/" so clicking the logo takes you Home */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
            C
          </div>
          <span className="text-xl font-bold gradient-text">CourseHub</span>
        </Link>

        {/* ── Navigation Links ── */}
        <ul className="flex items-center gap-1">
          {/* NavLink automatically adds the "active" state when the URL matches */}
          {/* We use a function for className so we can read the isActive flag    */}
          <li>
            <NavLink
              to="/"
              end  // <-- "end" means only match EXACT "/" not every route starting with "/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-500/20 text-indigo-300 shadow-inner'   // active style
                    : 'text-white/60 hover:text-white hover:bg-white/5' // default style
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-500/20 text-indigo-300 shadow-inner'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Courses
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}


// ================================================================
//  COMPONENT 2 — Home Page  (route: "/")
// ================================================================
// Shown when the user visits the root URL "/".
// Has a hero section and a "Go to Courses" button.
// ================================================================
function Home() {
  return (
    // Full-height hero section
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 hero-gradient relative overflow-hidden">

      {/* ── Decorative blurred blobs (pure CSS, purely visual) ── */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* ── Badge ── */}
      <div className="animate-fade-in mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
        Learn at your own pace
      </div>

      {/* ── Main Heading ── */}
      <h1 className="animate-slide-up text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
        Level Up Your{' '}
        <span className="gradient-text">Skills Today</span>
      </h1>

      {/* ── Subtitle ── */}
      <p className="animate-fade-in text-lg sm:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
        Explore beginner-friendly courses on React, Node.js, JavaScript and more.
        Built for learners who love to code.
      </p>

      {/* ── CTA Button ── */}
      {/* Link wraps the button — clicking navigates to /courses */}
      <Link to="/courses" className="btn-primary text-lg px-8 py-4 animate-slide-up">
        🚀 Go to Courses
      </Link>

      {/* ── Stats row ── */}
      <div className="mt-16 grid grid-cols-3 gap-8 text-center animate-fade-in">
        {[
          { value: '5+',   label: 'Courses' },
          { value: '200+', label: 'Students' },
          { value: '4.9★', label: 'Rating' },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold gradient-text">{stat.value}</p>
            <p className="text-sm text-white/50 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


// ================================================================
//  COMPONENT 3 — Course List  (route: "/courses")
// ================================================================
// Renders ALL courses as clickable cards in a responsive grid.
// Each card uses Link to navigate to /courses/:id
// ================================================================
function CourseList() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">

      {/* ── Page Header ── */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-3">
          All <span className="gradient-text">Courses</span>
        </h2>
        <p className="text-white/50">Pick a course and start your journey</p>
      </div>

      {/* ── Courses Grid ── */}
      {/* We use Array.map() to loop over courseData and render one card per course */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseData.map((course) => (
          // Each course card is wrapped in a Link
          // /courses/${course.id}  →  e.g. /courses/1
          <Link
            key={course.id}         // React needs a unique key for list items
            to={`/courses/${course.id}`}
            className="glass-card p-6 group hover:border-indigo-500/40 hover:bg-white/10
                       transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10
                       hover:-translate-y-1 block"
          >
            {/* ── Tag badge ── */}
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${tagColor(course.tag)}`}>
              {course.tag}
            </span>

            {/* ── Course Title ── */}
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition-colors">
              {course.title}
            </h3>

            {/* ── Short description (truncated) ── */}
            <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">
              {course.description}
            </p>

            {/* ── Meta row: level + duration ── */}
            <div className="flex items-center gap-3 text-xs text-white/40 mb-4">
              <span className={`font-semibold ${levelColor(course.level)}`}>
                {course.level}
              </span>
              <span>•</span>
              <span>⏱ {course.duration}</span>
            </div>

            {/* ── Price + Arrow ── */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
              <span className="text-lg font-bold text-indigo-300">
                ₹{course.price.toLocaleString()}
              </span>
              <span className="text-white/40 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all">
                View →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}


// ================================================================
//  COMPONENT 4 — Course Detail  (route: "/courses/:id")
// ================================================================
// useParams() reads the ":id" from the URL.
// We then find the matching course from our courseData array.
// ================================================================
function CourseDetail() {
  // useNavigate() gives us a function to go back to the previous page
  const navigate = useNavigate()

  // useParams() returns an object with URL parameters
  // e.g. for /courses/3  →  params = { id: "3" }
  const { id } = useParams()

  // Convert id from string to number and find the course in our array
  // Array.find() returns the FIRST item where the condition is true
  const course = courseData.find((c) => c.id === Number(id))

  // If no course matches, show a "not found" message
  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <p className="text-6xl mb-4">🔍</p>
        <h2 className="text-2xl font-bold mb-2">Course not found</h2>
        <p className="text-white/50 mb-6">The course you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/courses')} className="btn-primary">
          ← Back to Courses
        </button>
      </div>
    )
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">

      {/* ── Back button — uses navigate(-1) to go to the previous page ── */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors group text-sm"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to Courses
      </button>

      {/* ── Course Card ── */}
      <div className="glass-card p-8 sm:p-12">

        {/* ── Tag + Level row ── */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${tagColor(course.tag)}`}>
            {course.tag}
          </span>
          <span className={`text-xs font-semibold ${levelColor(course.level)}`}>
            {course.level}
          </span>
        </div>

        {/* ── Course Title ── */}
        <h1 className="text-4xl font-extrabold mb-4 gradient-text">
          {course.title}
        </h1>

        {/* ── Duration ── */}
        <p className="text-white/40 text-sm mb-8">⏱ {course.duration} of content</p>

        {/* ── Divider ── */}
        <hr className="border-white/10 mb-8" />

        {/* ── Description ── */}
        <h2 className="text-lg font-semibold mb-3 text-white/80">About this course</h2>
        <p className="text-white/60 leading-relaxed mb-10">
          {course.description}
        </p>

        {/* ── What you'll learn box ── */}
        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6 mb-10">
          <h3 className="font-semibold mb-3 text-indigo-300">What you'll learn</h3>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>✅ Core concepts and best practices</li>
            <li>✅ Hands-on projects and exercises</li>
            <li>✅ Real-world problem solving</li>
            <li>✅ Tips & tricks from industry experts</li>
          </ul>
        </div>

        {/* ── Price + Enroll button ── */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-white/40 text-sm mb-1">Course Price</p>
            <p className="text-4xl font-extrabold text-indigo-300">
              ₹{course.price.toLocaleString()}
            </p>
          </div>
          {/* Navigate to the payment page when clicked */}
          <Link to={`/payment/${course.id}`} className="btn-primary text-base px-8 py-4">
            Enroll Now 🎓
          </Link>
        </div>
      </div>
    </main>
  )
}


// ================================================================
//  COMPONENT 5 — Not Found (404 Page)  (route: "*")
// ================================================================
// Shown whenever the URL doesn't match any defined route.
// The "*" wildcard in <Route path="*"> catches everything else.
// ================================================================
function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">

      {/* ── Decorative blobs ── */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Big 404 text */}
      <h1 className="text-[10rem] font-black leading-none gradient-text select-none">
        404
      </h1>

      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>

      <p className="text-white/50 max-w-md mb-10 leading-relaxed">
        Oops! The page you are looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>

      {/* Two action buttons */}
      <div className="flex items-center gap-4">
        <Link to="/" className="btn-primary">
          🏠 Go Home
        </Link>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-xl border border-white/20 text-white/60
                     hover:border-white/40 hover:text-white transition-all duration-200 font-medium"
        >
          ← Go Back
        </button>
      </div>
    </section>
  )
}


// ================================================================
//  COMPONENT 6 — Payment Page (route: "/payment/:id")
// ================================================================
// Shows a checkout page for the selected course before enrolling.
// ================================================================
function Payment() {
  const navigate = useNavigate()
  const { id } = useParams()
  
  // Find the course details to show the price
  const course = courseData.find((c) => c.id === Number(id))

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-2xl font-bold mb-2">Invalid Payment Link</h2>
        <button onClick={() => navigate('/courses')} className="btn-primary mt-4">
          ← Back to Courses
        </button>
      </div>
    )
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-16">
      <div className="glass-card p-8 sm:p-12 text-center">
        <div className="w-16 h-16 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
          💳
        </div>
        <h1 className="text-3xl font-bold mb-2 gradient-text">Checkout</h1>
        <p className="text-white/60 mb-8">You are enrolling in <strong>{course.title}</strong>.</p>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8 text-left">
          <div className="flex justify-between mb-4 items-center">
            <span className="text-white/60">Total Amount:</span>
            <span className="font-bold text-indigo-300 text-2xl">₹{course.price.toLocaleString()}</span>
          </div>
          <hr className="border-white/10 mb-4" />
          <p className="text-xs text-white/40 text-center">This is a mock payment page for demonstration.</p>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            onClick={() => {
              alert(`Payment Successful for ${course.title}!\nWelcome to the course.`)
              navigate('/')
            }} 
            className="btn-primary justify-center w-full py-4 text-lg"
          >
            Pay Securely
          </button>
          <button onClick={() => navigate(-1)} className="text-white/50 hover:text-white transition-colors text-sm">
            Cancel
          </button>
        </div>
      </div>
    </main>
  )
}


// ================================================================
//  COMPONENT 7 — Scroll To Top Button
// ================================================================
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false)

  // Show button when page is scrolled down
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } hover:bg-indigo-500 hover:-translate-y-1`}
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}


// ================================================================
//  ROOT COMPONENT — CourseApp
// ================================================================
// This is the top-level component exported and used in App.jsx.
// It wraps everything in BrowserRouter and defines all routes.
// ================================================================
export default function CourseApp() {
  return (
    // BrowserRouter enables URL-based navigation
    <BrowserRouter>
      {/* Navbar appears on EVERY page (it's outside <Routes>) */}
      <Navbar />

      {/* Global Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Routes decides WHICH component to show based on the current URL */}
      <Routes>

        {/* / → Home page */}
        <Route path="/"           element={<Home />} />

        {/* /courses → Course list */}
        <Route path="/courses"    element={<CourseList />} />

        {/* /courses/:id → Course detail  (:id is a dynamic segment) */}
        <Route path="/courses/:id" element={<CourseDetail />} />

        {/* /payment/:id → Payment page */}
        <Route path="/payment/:id" element={<Payment />} />

        {/* * (wildcard) → 404 Not Found  (must be LAST) */}
        <Route path="*"           element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}
