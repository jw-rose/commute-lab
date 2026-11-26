type IconProps = {
    className?: string
}

function TravelTimeIcon({ className }: IconProps) {
    return (
        <svg aria-hidden="true" className={className} fill="none" height="26" stroke="#0B7A63" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width="26">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    )
}

function NeighborhoodIcon({ className }: IconProps) {
    return (
        <svg aria-hidden="true" className={className} fill="none" height="26" stroke="#0B7A63" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width="26">
            <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    )
}

function RentIcon({ className }: IconProps) {
    return (
        <svg aria-hidden="true" className={className} fill="none" height="26" stroke="#0B7A63" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width="26">
            <path d="M17.5 7.5A6 6 0 0 0 7 10m0 4a6 6 0 0 0 10.5 2.5M5 10h9M5 14h9" />
        </svg>
    )
}

const FEATURES = [
    {
        Icon: TravelTimeIcon,
        title: 'Temps de trajet',
        subtitle: 'Durée et correspondances',
        description: 'Trajet en transports en commun pour une arrivée à 9 h, avec le détail des correspondances.',
    },
    {
        Icon: NeighborhoodIcon,
        title: 'Vie de quartier',
        subtitle: 'Services à 10 minutes à pied',
        description: 'Stations, supermarchés, pharmacies, boulangeries et laveries autour de chaque mairie.',
    },
    {
        Icon: RentIcon,
        title: 'Loyers',
        subtitle: 'Prix au m² et surface estimée',
        description: 'Loyer indicatif au m² et surface théorique selon votre budget mensuel.',
    },
]

export default function WhatYouCanCompare() {
    return (
        <section className="px-8 py-18">
            <div className="mx-auto max-w-300">
                <h2 className="mb-9 text-4xl">Ce que vous pouvez comparer</h2>
                <div className="flex flex-wrap gap-5">
                    {FEATURES.map(({ Icon, title, subtitle, description }) => (
                        <div className="min-w-0 flex-1 basis-[280px] rounded-card border border-line bg-white p-6 shadow-card" key={title}>
                            <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-mint">
                                <Icon />
                            </div>
                            <h3 className="mt-4 mb-1 text-xl">{title}</h3>
                            <p className="mb-2.5 text-sm font-semibold text-pine">{subtitle}</p>
                            <p className="text-[15px] leading-relaxed text-muted">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
