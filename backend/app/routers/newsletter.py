from fastapi import APIRouter

from app.schemas import NewsletterSubscribe, NewsletterResponse

router = APIRouter(prefix="/newsletter", tags=["newsletter"])

# In-memory store for demo purposes
subscribers: list[str] = []


@router.post("/subscribe", response_model=NewsletterResponse)
async def subscribe(payload: NewsletterSubscribe):
    if payload.email in subscribers:
        return NewsletterResponse(success=True, message="Already subscribed")
    subscribers.append(payload.email)
    return NewsletterResponse(success=True, message="Subscribed successfully")
