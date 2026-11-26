from app.models.place import Place, PlaceType


def test_list_communes_empty(client):
    response = client.get("/api/communes")
    assert response.status_code == 200
    assert response.json() == []


def test_list_communes_returns_seeded_place(client, db_session):
    db_session.add(
        Place(
            insee_code="75101",
            name="Paris 1er Arrondissement",
            department="75",
            place_type=PlaceType.arrondissement,
            mairie_lat=48.858247,
            mairie_lon=2.345184,
            is_fixture=False,
        )
    )
    db_session.commit()

    response = client.get("/api/communes")
    assert response.status_code == 200
    body = response.json()
    assert len(body) == 1
    assert body[0]["insee_code"] == "75101"
    assert body[0]["place_type"] == "arrondissement"
