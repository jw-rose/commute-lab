const STEPS = [
    {
        number: 1,
        title: 'Choisissez votre destination',
        description: 'Une adresse, ou une station de métro, de RER, de Transilien ou de tram en Île-de-France.',
    },
    {
        number: 2,
        title: 'Sélectionnez 2 à 5 communes',
        description:
            'Les 20 arrondissements de Paris et les communes des Hauts-de-Seine, de la Seine-Saint-Denis et du Val-de-Marne.',
    },
    {
        number: 3,
        title: 'Comparez côte à côte',
        description: 'Temps de trajet, services à pied et loyers indicatifs, pour chaque commune, sur un même écran.',
    },
]

export default function HowItWorks() {
    return (
        <section className="border-y border-line bg-white px-8 py-18" id="comment-ca-marche">
            <div className="mx-auto max-w-300">
                <h2 className="mb-2 text-4xl">Comment ça marche</h2>
                <p className="mb-9 text-[17px] text-muted">Trois étapes pour comparer des communes selon votre trajet.</p>
                <div className="flex flex-wrap gap-5">
                    {STEPS.map((step) => (
                        <div className="min-w-0 flex-1 basis-[280px] rounded-card border border-line bg-cream p-6" key={step.number}>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-base font-extrabold text-pine">
                                {step.number}
                            </div>
                            <h3 className="mt-4 mb-2 text-xl">{step.title}</h3>
                            <p className="text-[15px] leading-relaxed text-muted">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
