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

        <section className="py-8 px-4 md:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center text-brand-navy mb-6">
              Clima en Villa del Dique
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <a
                  className="weatherwidget-io"
                  href="https://forecast7.com/es/n32d17n64d45/villa-del-dique/"
                  data-label_1="VILLA DEL DIQUE"
                  data-label_2="Clima"
                  data-theme="original"
                >
                  VILLA DEL DIQUE Clima
                </a>
                <script
                  dangerouslySetInnerHTML={{
                    __html: `!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>

      <Footer />
    </div>
  )
}
