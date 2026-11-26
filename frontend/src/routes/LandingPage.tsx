import Footer from '../components/Footer'
import Header from '../components/Header'
import CtaBand from '../components/landing/CtaBand'
import Hero from '../components/landing/Hero'
import HowItWorks from '../components/landing/HowItWorks'
import WhatYouCanCompare from '../components/landing/WhatYouCanCompare'

export default function LandingPage() {
    const handleDestinationSubmit = (destination: string) => {
        // TODO(F-01): navigate to the comparison page with the chosen destination
        console.log('destination submitted:', destination)
    }

    return (
        <div id="top">
            <a
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-field focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-pine"
                href="#contenu"
            >
                Aller au contenu
            </a>
            <Header />
            <main id="contenu">
                <Hero onSubmit={handleDestinationSubmit} />
                <HowItWorks />
                <WhatYouCanCompare />
                <CtaBand />
            </main>
            <Footer />
        </div>
    )
}
