export default function Header() {
    return (
        <header className="border-b border-border bg-white">
            <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-3 px-8 py-3.5">
                <a className="inline-flex items-center" href="#top">
                    <img alt="CommuteLab" className="block h-8.5 w-auto" src="/commutelab-logo-header.svg" />
                </a>
                <nav className="flex flex-wrap items-center gap-2">
                    <a
                        className="inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold text-muted hover:bg-nav-hover"
                        href="#comment-ca-marche"
                    >
                        Comment ça marche
                    </a>
                    <a
                        className="inline-flex min-h-11 items-center rounded-xl border-[1.5px] border-border-strong bg-white px-4.5 text-sm font-bold text-pine"
                        href="#recherche"
                    >
                        Comparer des communes
                    </a>
                </nav>
            </div>
        </header>
    )
}
