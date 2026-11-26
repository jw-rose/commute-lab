import { Chip } from '@heroui/react'

// SAMPLE DATA — illustrative placeholder values for the preview card, not real journeys.
const SAMPLE_COMMUNES = [
    { name: 'Saint-Ouen', minutes: 26, left: '12%', top: '5%' },
    { name: 'Pantin', minutes: 24, left: '61%', top: '9%' },
]
const SAMPLE_DESTINATION_LABEL = 'Châtelet · Destination'

export default function ComparisonPreviewCard() {
    return (
        <div className="rounded-preview border border-line bg-white p-5 shadow-[0_10px_40px_rgba(26,58,46,0.10)]">
            <div className="mb-3.5 flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-base font-bold">Aperçu de la comparaison</span>
                <span className="text-[13px] font-medium text-muted-soft">Données d’exemple</span>
            </div>
            <div className="relative overflow-hidden rounded-[18px] bg-[#EAF0E6]">
                <svg aria-hidden="true" className="block" viewBox="0 0 560 340" width="100%">
                    <rect fill="#EAF0E6" height="340" width="560" />
                    <g fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeWidth={4}>
                        <path d="M40 0L70 340" />
                        <path d="M150 0L190 340" />
                        <path d="M260 0L250 340" />
                        <path d="M370 0L400 340" />
                        <path d="M480 0L470 340" />
                        <path d="M0 25L560 10" />
                        <path d="M0 70L560 50" />
                        <path d="M0 140L560 130" />
                        <path d="M0 190L560 175" />
                        <path d="M0 280L300 0" />
                        <path d="M200 340L560 90" />
                    </g>
                    <path
                        d="M0 215C90 190 150 235 250 270S430 300 560 262"
                        fill="none"
                        stroke="#BFDDE3"
                        strokeLinecap="round"
                        strokeWidth={30}
                    />
                    <polyline
                        fill="none"
                        points="150,70 160,118 232,152 300,205"
                        stroke="#0B7A63"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                    />
                    <polyline
                        fill="none"
                        points="400,80 388,122 345,148 300,205"
                        stroke="#3E9A85"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                    />
                    <circle cx={150} cy={70} fill="#FFFFFF" r={7} stroke="#0B7A63" strokeWidth={3} />
                    <circle cx={400} cy={80} fill="#FFFFFF" r={7} stroke="#0B7A63" strokeWidth={3} />
                    <circle cx={300} cy={205} fill="#0B7A63" r={9} stroke="#FFFFFF" strokeWidth={3} />
                </svg>
                {SAMPLE_COMMUNES.map((commune) => (
                    <span
                        className="absolute rounded-xl bg-white px-3 py-1.5 text-[13px] font-bold shadow-[0_2px_10px_rgba(0,0,0,0.12)]"
                        key={commune.name}
                        style={{ left: commune.left, top: commune.top }}
                    >
                        {commune.name} <span className="ml-1.5 text-pine">{commune.minutes} min</span>
                    </span>
                ))}
                <span
                    className="absolute rounded-xl bg-white px-3 py-1.5 text-[13px] font-bold shadow-[0_2px_10px_rgba(0,0,0,0.12)]"
                    style={{ left: '36%', top: '70%' }}
                >
                    {SAMPLE_DESTINATION_LABEL}
                </span>
            </div>
            <div className="mt-3.5 flex flex-wrap items-center gap-3">
                <Chip className="bg-mint text-mint-text" size="sm">
                    2 communes
                </Chip>
                <span className="text-sm text-muted">Temps de trajet en transports en commun</span>
            </div>
        </div>
    )
}
