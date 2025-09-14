import AnnouncementBar from "@/components/announcement-bar"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import PromotionalBanner from "@/components/promotional-banner"
import NewsSection from "@/components/news-section"
import Footer from "@/components/footer"
import NewsletterSection from "@/components/newsletter-section"
import MainAdvertisingCarousel from "@/components/main-advertising-carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroBanner />
        <PromotionalBanner />

        <NewsSection />

        <MainAdvertisingCarousel />

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  )
}
