'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    title: "React Concepts: Basic to Advanced",
    subtitle: "For Frontend Development Interns",
    content: "Let's review React basics and explore advanced concepts!",
  },
  {
    title: "Basic React Concepts",
    subtitle: "Refresher on Fundamentals",
    content: "Let's quickly review the core concepts of React:",
  },
  {
    title: "1. Components",
    content: "🧱 Building blocks of React\n🔄 Reusable and composable\n🎭 Functional components (preferred)\n🏛️ Class components (legacy)",
  },
  {
    title: "2. JSX",
    content: "🎨 JavaScript XML\n🔀 Combines JavaScript and HTML-like syntax\n🏗️ Describes the UI structure\n⚛️ Transpiled to React.createElement() calls",
  },
  {
    title: "3. Props",
    content: "📦 Pass data from parent to child\n🔒 Read-only\n🎭 Can be of any type (strings, numbers, functions, objects)\n🔄 Trigger re-renders when changed",
  },
  {
    title: "4. State",
    content: "📊 Holds component's mutable data\n🔄 Updating state re-renders the component\n🎣 useState hook for functional components\n🏛️ this.state and this.setState() for class components",
  },
  {
    title: "5. Lifecycle and Effects",
    content: "🔄 useEffect hook for side effects\n🎣 Replaces multiple lifecycle methods\n🧹 Cleanup function for unmounting\n🔍 Dependency array for optimizing re-runs",
  },
  {
    title: "Advanced React Concepts",
    subtitle: "Taking Your Skills to the Next Level",
    content: "Now, let's explore more advanced React topics:",
  },
  {
    title: "1. Advanced Component Patterns",
    content: "🧩 Higher-Order Components (HOCs)\n🎨 Render Props\n🎣 Custom Hooks\n🏗️ Compound Components",
  },
  {
    title: "2. State Management at Scale",
    content: "🌳 Context API for mid-size apps\n🔄 Redux for large, complex state\n⚛️ Recoil for flexible state management\n🎣 Jotai for atomic state management",
  },
  {
    title: "3. Performance Optimization",
    content: "🚀 React.memo() for component memoization\n💾 useMemo() for expensive computations\n🔁 useCallback() for stable function references\n📊 Profiler API for measuring performance",
  },
  {
    title: "4. Code Splitting",
    content: "const LazyComponent = React.lazy(() => import('./LazyComponent'));\n\nfunction MyComponent() {\n  return (\n    <React.Suspense fallback={<div>Loading...</div>}>\n      <LazyComponent />\n    </React.Suspense>\n  );\n}",
  },
  {
    title: "5. Server Components",
    content: "📡 Render on the server\n🔄 Seamless integration with client components\n🚫 Reduce client-side JavaScript\n⚡ Improved initial page load",
  },
  {
    title: "6. Concurrent Mode",
    content: "🎭 Interruptible rendering\n🔀 Multiple versions of UI\n🌊 Smoother user experiences\n🔄 useTransition hook for concurrent updates",
  },
  {
    title: "7. Advanced Hooks",
    content: "🔍 useRef for mutable values\n🧮 useReducer for complex state logic\n🎭 useImperativeHandle for ref customization\n🔄 useLayoutEffect for synchronous effects",
  },
  {
    title: "8. Testing Strategies",
    content: "🧪 Unit Testing with Jest\n🔬 Component Testing with React Testing Library\n🌐 End-to-End Testing with Cypress\n🎭 Snapshot Testing for UI changes",
  },
  {
    title: "9. Styling in React",
    content: "🎨 CSS Modules for scoped styling\n💅 Styled Components for dynamic CSS-in-JS\n🌬️ Tailwind CSS for utility-first approach\n🎭 CSS-in-JS libraries (Emotion, JSS)",
  },
  {
    title: "10. Accessibility (a11y)",
    content: "♿ ARIA attributes and roles\n🖱️ Keyboard navigation\n🔍 Screen reader optimization\n🎨 Color contrast and text sizing",
  },
  {
    title: "11. Next.js Integration",
    content: "🖥️ Server-Side Rendering (SSR)\n🏗️ Static Site Generation (SSG)\n🛣️ API Routes\n📁 File-based routing",
  },
  {
    title: "12. TypeScript in React",
    content: "interface Props {\n  name: string;\n  age: number;\n}\n\nconst Greeting: React.FC<Props> = ({ name, age }) => (\n  <h1>Hello, {name}! You are {age} years old.</h1>\n);",
  },
  {
    title: "13. React Design Systems",
    content: "🎨 Storybook for component development\n🧩 Reusable component libraries\n🎭 Theme providers for consistent styling\n📚 Documentation and style guides",
  },
  {
    title: "14. Animation in React",
    content: "💫 React Spring for physics-based animations\n🎭 Framer Motion for declarative animations\n🔄 CSS Transitions for simple animations\n🎬 GSAP for complex animation sequences",
  },
  {
    title: "15. Future of React",
    content: "🔮 Server Components\n⚡ Automatic batching of state updates\n🎛️ Transitions API for smoother updates\n🧠 AI-assisted development tools",
  },
  {
    title: "Thank You!",
    subtitle: "Keep Learning and Building!",
    content: "Remember: The best way to learn is by doing. Start a project today!",
  },
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      nextSlide()
    } else if (event.key === 'ArrowLeft') {
      prevSlide()
    }
  }

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="p-10 w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden">
     
       <div className='justify-center w-full flex py-6'>
       <h1 className='font-bold text-3xl'>Observation AI</h1>
       </div>
        <AnimatePresence mode="wait">
            
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            // className="p-10"
          >
            <h2 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h2>
            {slides[currentSlide].subtitle && (
              <h3 className="text-2xl font-semibold mb-6">{slides[currentSlide].subtitle}</h3>
            )}
            <div className="text-lg whitespace-pre-wrap">{slides[currentSlide].content}</div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between items-center p-4 bg-white/5">        
          <Button onClick={prevSlide} variant="outline" size="icon" className="text-black border-white hover:bg-white/20" aria-label="Previous slide">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button onClick={nextSlide} variant="outline" size="icon" className="text-black border-white hover:bg-white/20" aria-label="Next slide">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

