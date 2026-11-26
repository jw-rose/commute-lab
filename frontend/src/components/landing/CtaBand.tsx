export default function CtaBand() {
    return (
        <section className="px-8 pb-18">
            <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-6 rounded-cta bg-pine px-10 py-14">
                <div className="min-w-0 flex-1 basis-[380px]">
                    <h2 className="mb-2.5 text-[34px] text-white">Prêt à comparer vos communes ?</h2>
                    <p className="text-[17px] leading-relaxed text-mint">
                        Entrez votre destination, choisissez 2 à 5 communes et comparez.
                    </p>
                </div>
                <a
                    className="inline-flex min-h-13 items-center rounded-field bg-white px-7 text-base font-bold text-pine"
                    href="#recherche"
                >
                    Commencer la comparaison
                </a>
            </div>
        </section>
    )
}
