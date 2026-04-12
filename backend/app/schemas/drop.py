from pydantic import BaseModel
from datetime import datetime


class ProductSchema(BaseModel):
    slug: str
    name: str
    price: int  # in centimes (CHF)
    currency: str = "CHF"
    description: str
    sizes: list[str]
    sold_out: bool = False
    image_url: str | None = None


class DropSchema(BaseModel):
    slug: str
    name: str  # e.g. "KISS"
    phrase: str  # e.g. "Keep It Simple Sexy"
    collection: str  # e.g. "SS26"
    drop_number: int
    release_date: datetime
    is_live: bool = False
    sold_out: bool = False
    manifesto: str
    story: str
    products: list[ProductSchema]


class DropListItem(BaseModel):
    slug: str
    name: str
    phrase: str
    collection: str
    drop_number: int
    sold_out: bool = False
    is_live: bool = False
    release_date: datetime
