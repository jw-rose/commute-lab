import enum

from sqlalchemy import Boolean, Enum, Float, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class PlaceType(enum.StrEnum):
    commune = "commune"
    arrondissement = "arrondissement"


class Place(Base):
    __tablename__ = "places"

    id: Mapped[int] = mapped_column(primary_key=True)
    insee_code: Mapped[str] = mapped_column(String(5), unique=True, index=True)
    name: Mapped[str] = mapped_column(String)
    department: Mapped[str] = mapped_column(String)
    place_type: Mapped[PlaceType] = mapped_column(Enum(PlaceType, native_enum=False))
    mairie_lat: Mapped[float] = mapped_column(Float)
    mairie_lon: Mapped[float] = mapped_column(Float)
    is_fixture: Mapped[bool] = mapped_column(Boolean, default=False, server_default="false")
