"""Seed a handful of places (mairies) for local development.

Run with: python -m scripts.seed_places
Repeatable: re-running upserts on insee_code instead of duplicating rows.
"""

from app.database import SessionLocal
from app.models.place import Place, PlaceType

PLACES = [
    # Verified via public directories (Wikipedia, service-public.fr) on 2026-11-26.
    {
        "insee_code": "75101",
        "name": "Paris 1er Arrondissement",
        "department": "75",
        "place_type": PlaceType.arrondissement,
        "mairie_lat": 48.858247,
        "mairie_lon": 2.345184,
        "is_fixture": False,
    },
    {
        "insee_code": "93048",
        "name": "Montreuil",
        "department": "93",
        "place_type": PlaceType.commune,
        "mairie_lat": 48.860395,
        "mairie_lon": 2.441878,
        "is_fixture": False,
    },
]


def seed() -> None:
    db = SessionLocal()
    try:
        for data in PLACES:
            existing = db.query(Place).filter_by(insee_code=data["insee_code"]).one_or_none()
            if existing is None:
                db.add(Place(**data))
            else:
                for key, value in data.items():
                    setattr(existing, key, value)
        db.commit()
    finally:
        db.close()


if __name__ == "__main__":
    seed()
    print(f"Seeded {len(PLACES)} place(s).")
