from fastapi import APIRouter, HTTPException

from app.schemas import DropSchema, DropListItem
from app.data import DROPS

router = APIRouter(prefix="/drops", tags=["drops"])


@router.get("/", response_model=list[DropListItem])
async def list_drops():
    return [
        DropListItem(
            slug=d.slug,
            name=d.name,
            phrase=d.phrase,
            collection=d.collection,
            drop_number=d.drop_number,
            sold_out=d.sold_out,
            is_live=d.is_live,
            release_date=d.release_date,
        )
        for d in DROPS.values()
    ]


@router.get("/{slug}", response_model=DropSchema)
async def get_drop(slug: str):
    drop = DROPS.get(slug)
    if not drop:
        raise HTTPException(status_code=404, detail="Drop not found")
    return drop
