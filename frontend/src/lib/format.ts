/**
 * French (fr-FR) formatting helpers for durations, counts and money.
 *
 * These rely on Intl, which inserts non-ASCII whitespace in some outputs
 * (a narrow no-break space U+202F before units like "h"/"m²", a plain
 * no-break space U+00A0 before "€"). That spacing is intentional — it is
 * what real French locale output looks like — so it is preserved here
 * rather than normalized away.
 */

const minutesUnitFormatter = new Intl.NumberFormat("fr-FR", {
  style: "unit",
  unit: "minute",
  unitDisplay: "short",
})

const hoursUnitFormatter = new Intl.NumberFormat("fr-FR", {
  style: "unit",
  unit: "hour",
  unitDisplay: "short",
})

const transfersPluralRules = new Intl.PluralRules("fr-FR")

const rentPerM2Formatter = new Intl.NumberFormat("fr-FR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
})

const eurosFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
})

const surfaceNumberFormatter = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 0,
})

const journeyDateFormatter = new Intl.DateTimeFormat("fr-FR", {
  weekday: "short",
  day: "numeric",
  month: "short",
  timeZone: "Europe/Paris",
})

/**
 * Formats a Navitia-style duration given in SECONDS as French text.
 * Rounds to the nearest minute. Examples: `formatDuration(1440)` -> "24 min",
 * `formatDuration(3900)` -> "1 h 05".
 */
export function formatDuration(seconds: number): string {
  const totalMinutes = Math.max(0, Math.round(seconds / 60))

  if (totalMinutes < 60) {
    return minutesUnitFormatter.format(totalMinutes)
  }

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hoursUnitFormatter.format(hours)} ${String(minutes).padStart(2, "0")}`
}

/**
 * Formats a transfer count with correct French singular/plural agreement
 * (0 and 1 are singular): "0 correspondance", "1 correspondance",
 * "2 correspondances".
 */
export function formatTransfers(n: number): string {
  const count = Math.max(0, Math.round(n))
  const word = transfersPluralRules.select(count) === "one" ? "correspondance" : "correspondances"
  return `${count} ${word}`
}

/** Formats a rent-per-square-meter value as French currency, e.g. "23 €/m²". */
export function formatRentPerM2(value: number): string {
  // eslint-disable-next-line no-irregular-whitespace -- deliberate U+00A0 before "€", matches Intl currency spacing
  return `${rentPerM2Formatter.format(value)} €/m²`
}

/** Formats a whole-euro amount as French currency, e.g. "1 200 €". */
export function formatEuros(value: number): string {
  return eurosFormatter.format(Math.round(value))
}

/** Formats a surface area in square meters, e.g. "52 m²". */
export function formatSurface(m2: number): string {
  // eslint-disable-next-line no-irregular-whitespace -- deliberate U+202F before the unit, matches Intl unit spacing
  return `${surfaceNumberFormatter.format(m2)} m²`
}

/** Formats a date as a short French weekday + day + month in Paris time. */
export function formatJourneyDate(date: Date): string {
  return journeyDateFormatter.format(date)
}
