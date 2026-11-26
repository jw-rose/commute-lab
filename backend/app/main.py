from fastapi import FastAPI

from app.routers import health, places

app = FastAPI(title="CommuteLab API")

app.include_router(health.router)
app.include_router(places.router)
