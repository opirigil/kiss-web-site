from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import drops, newsletter

app = FastAPI(
    title="DEAR SKIN API",
    description="Backend API for DEAR SKIN streetwear brand",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(drops.router, prefix="/api")
app.include_router(newsletter.router, prefix="/api")


@app.get("/api/health")
async def health():
    return {"status": "ok", "brand": "DEAR SKIN"}
