from pydantic import BaseModel, ConfigDict

from app.models.place import PlaceType


class PlaceOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    insee_code: str
    name: str
    department: str
    place_type: PlaceType
    mairie_lat: float
    mairie_lon: float
    is_fixture: bool
