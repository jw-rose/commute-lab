import ComparisonPreviewCard from './ComparisonPreviewCard'
import DestinationSearchCard from './DestinationSearchCard'

type HeroProps = {
    onSubmit: (destination: string) => void
}

export default function Hero({ onSubmit }: HeroProps) {
    return (
        <section className="px-8 pt-16 pb-18">
            <div className="mx-auto flex max-w-300 flex-wrap items-center gap-14">
                {/* Text and form first so they come before the preview on narrow screens */}
                <div className="min-w-0 flex-1 basis-[460px]">
                    <span className="inline-flex items-center rounded-full bg-mint px-3.5 py-1.5 text-[13px] font-bold text-mint-text">
                        Paris et petite couronne
                    </span>
                    <h1 className="mt-5 mb-4 text-[clamp(36px,5vw,56px)] leading-[1.08] tracking-[-0.025em]">
                        Trouvez où vivre <span className="text-pine">selon votre trajet.</span>
                    </h1>
                    <p className="max-w-[500px] text-lg leading-relaxed text-muted">
                        Comparez les temps de trajet, les services de proximité et les loyers à Paris et en petite
                        couronne.
                    </p>
                    <DestinationSearchCard onSubmit={onSubmit} />
                </div>
                <div className="min-w-0 flex-1 basis-[500px]">
                    <ComparisonPreviewCard />
                </div>
            </div>
        </section>
    )
}
