"""Shared pytest fixtures.

Tests run against the database named by DATABASE_URL, same as the app.
That must point at a disposable/test Postgres (e.g. the local docker
container), never at the Neon production/staging database.
"""

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.config import get_settings
from app.database import Base, get_db
from app.main import app
from app.models.place import Place


@pytest.fixture(scope="session")
def engine():
    engine = create_engine(get_settings().database_url)
    Base.metadata.create_all(engine)
    yield engine
    Base.metadata.drop_all(engine)
    engine.dispose()


@pytest.fixture
def db_session(engine):
    session_factory = sessionmaker(bind=engine, autoflush=False, autocommit=False)
    session = session_factory()
    session.query(Place).delete()
    session.commit()
    try:
        yield session
    finally:
        session.close()


@pytest.fixture
def client(db_session):
    def override_get_db():
        yield db_session

    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app) as test_client:
        yield test_client
    app.dependency_overrides.clear()
