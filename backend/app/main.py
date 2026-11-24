from fastapi import FastAPI

app = FastAPI(title="CommuteLab API")


@app.get("/api/health")
def health():
    return {"status": "ok"}
