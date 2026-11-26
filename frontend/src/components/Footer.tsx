export default function Footer() {
    return (
        <footer className="border-t border-line bg-white px-8 py-9">
            <div className="mx-auto flex max-w-300 flex-wrap items-start justify-between gap-5">
                <img alt="CommuteLab" className="block h-7 w-auto" src="/commutelab-logo-header.svg" />
                <div className="min-w-0 max-w-160 flex-1 text-[13px] leading-[1.7] text-muted-soft">
                    <p className="m-0 mb-1.5">Sources : PRIM/Navitia, IGN, OpenStreetMap, Carte des loyers 2025.</p>
                    <p className="m-0">
                        Les loyers affichés sont indicatifs et ne garantissent pas la disponibilité d’un logement.
                    </p>
                </div>
            </div>
        </footer>
    )
}
