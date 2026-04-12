"""Mock data for DEAR SKIN drops and products."""

from datetime import datetime
from app.schemas import DropSchema, ProductSchema

DROPS: dict[str, DropSchema] = {
    "kiss": DropSchema(
        slug="kiss",
        name="KISS",
        phrase="Keep It Simple Sexy",
        collection="SS26",
        drop_number=1,
        release_date=datetime(2026, 6, 1, 12, 0, 0),
        is_live=False,
        sold_out=False,
        manifesto=(
            "Simplicity is the ultimate provocation. "
            "In a world screaming for attention, we chose silence. "
            "Heavyweight silence."
        ),
        story=(
            "KISS is a reminder. Strip it back. Let the fabric speak. "
            "Let the cut do the talking. Two pieces, no noise — "
            "just the quiet confidence of knowing exactly what you're wearing and why. "
            "Every thread is deliberate. Every stitch, earned. "
            "This is not fast fashion wearing a costume. "
            "This is skin-level honesty, cut from heavyweight organic cotton in a Geneva atelier."
        ),
        products=[
            ProductSchema(
                slug="kiss-tee",
                name="KISS Oversized Tee",
                price=8900,
                description="Heavyweight 240gsm organic cotton. Boxy cut. Embroidered KISS at chest.",
                sizes=["S", "M", "L", "XL"],
            ),
            ProductSchema(
                slug="kiss-cap",
                name="KISS Cap",
                price=4900,
                description="Washed cotton twill. Unstructured. Gold KISS embroidery.",
                sizes=["ONE SIZE"],
            ),
        ],
    ),
}
