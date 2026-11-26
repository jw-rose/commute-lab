from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.place import Place
from app.schemas.place import PlaceOut

router = APIRouter(tags=["places"])


@router.get("/api/communes", response_model=list[PlaceOut])
def list_communes(db: Session = Depends(get_db)) -> list[Place]:
    return list(db.scalars(select(Place).order_by(Place.name)))
