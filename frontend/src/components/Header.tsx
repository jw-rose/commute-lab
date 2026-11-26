export default function Header() {
    return (
        <header>
            {/* TODO: replace with the SVG logo once commutelab-logo-header.svg exists */}
            <a href="/" className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine">
                <h1 className="font-sans text-2xl font-extrabold tracking-tight">
                    <span className="text-forest">Commute</span>
                    <span className="text-pine">Lab</span>
                </h1>
            </a>
            <p>Comparez les communes d'Île-de-France par temps de trajet</p>
        </header>
    )
}
