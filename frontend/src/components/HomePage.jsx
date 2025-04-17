import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import MovieRow from './components/MovieRow'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroBanner />
      <section className="space-y-8 px-4 md:px-8 mt-8">
        <MovieRow title="Trending Now" />
        <MovieRow title="Top Rated" />
        <MovieRow title="New Releases" />
        <MovieRow title="Action Movies" />
        <MovieRow title="TV Shows" />
      </section>
      <Footer />
    </div>
  )
}
