import { useState, type FormEvent } from 'react'
import { Button, Input, Label, TextField } from '@heroui/react'

type DestinationSearchCardProps = {
    onSubmit: (destination: string) => void
}

const QUICK_PICKS = ['Châtelet', 'La Défense', 'Gare du Nord']

export default function DestinationSearchCard({ onSubmit }: DestinationSearchCardProps) {
    const [destination, setDestination] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(destination)
    }

    return (
        <form
            className="mt-7 max-w-[520px] rounded-card border border-line bg-white p-5 shadow-card-raised"
            id="recherche"
            onSubmit={handleSubmit}
        >
            <TextField className="block rounded-field bg-surface-field px-4 pt-2.5 pb-3" onChange={setDestination} value={destination}>
                <Label className="block text-xs font-bold text-muted-soft">Votre destination</Label>
                <Input
                    className="w-full border-0 bg-transparent p-0 pt-1 text-base font-medium text-forest shadow-none"
                    placeholder="Saisissez une adresse ou une station"
                />
            </TextField>
            <Button className="mt-3.5 h-13 rounded-field text-base font-bold" fullWidth isDisabled={destination.trim() === ''} type="submit">
                Comparer des communes →
            </Button>
            <div className="mt-3.5 flex flex-wrap items-center gap-2">
                <span className="text-[13px] font-medium text-muted-soft">Essayer avec :</span>
                {QUICK_PICKS.map((place) => (
                    <Button
                        className="min-h-11 rounded-full border-border-strong-2 px-4 text-[13px] font-semibold text-forest"
                        key={place}
                        onPress={() => setDestination(place)}
                        type="button"
                        variant="outline"
                    >
                        {place}
                    </Button>
                ))}
            </div>
            {/* TODO(F-01): destination autocomplete, API call, and navigation to the comparison page */}
        </form>
    )
}
