import "server-only"

export type InstagramPost = {
  id: string
  caption: string
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | "UNKNOWN"
  mediaUrl: string
  permalink: string
  timestamp: string
}

export type InstagramFeedResult = {
  posts: InstagramPost[]
  source: "live" | "fallback"
  profileUrl: string
  error?: string
}

type InstagramApiResponse = {
  data?: Array<{
    id: string
    caption?: string
    media_type?: string
    media_url?: string
    thumbnail_url?: string
    permalink?: string
    timestamp?: string
  }>
}

const FALLBACK_POSTS: InstagramPost[] = [
  {
    id: "fallback-1",
    caption: "Morning light and pastry details.",
    mediaType: "IMAGE",
    mediaUrl: "/images/gallery-1.jpg",
    permalink: "#",
    timestamp: "2026-01-12T09:00:00.000Z",
  },
  {
    id: "fallback-2",
    caption: "A study in texture and proportion.",
    mediaType: "IMAGE",
    mediaUrl: "/images/gallery-2.jpg",
    permalink: "#",
    timestamp: "2026-01-09T09:00:00.000Z",
  },
  {
    id: "fallback-3",
    caption: "Service moments and quiet ritual.",
    mediaType: "IMAGE",
    mediaUrl: "/images/gallery-3.jpg",
    permalink: "#",
    timestamp: "2026-01-07T09:00:00.000Z",
  },
  {
    id: "fallback-4",
    caption: "Curated sweets for shared tables.",
    mediaType: "IMAGE",
    mediaUrl: "/images/gallery-4.jpg",
    permalink: "#",
    timestamp: "2026-01-04T09:00:00.000Z",
  },
  {
    id: "fallback-5",
    caption: "Celebration pieces, handcrafted daily.",
    mediaType: "IMAGE",
    mediaUrl: "/images/celebration.jpg",
    permalink: "#",
    timestamp: "2026-01-02T09:00:00.000Z",
  },
  {
    id: "fallback-6",
    caption: "Our spaces through an editorial lens.",
    mediaType: "IMAGE",
    mediaUrl: "/images/spaces.jpg",
    permalink: "#",
    timestamp: "2025-12-30T09:00:00.000Z",
  },
]

function normalizeMediaType(mediaType?: string): InstagramPost["mediaType"] {
  if (mediaType === "IMAGE" || mediaType === "VIDEO" || mediaType === "CAROUSEL_ALBUM") {
    return mediaType
  }
  return "UNKNOWN"
}

function parseLimit(rawLimit: string | undefined): number {
  const parsed = Number(rawLimit)
  if (!Number.isFinite(parsed)) return 6
  return Math.max(3, Math.min(12, Math.floor(parsed)))
}

function mapApiPostToDomain(
  post: NonNullable<InstagramApiResponse["data"]>[number]
): InstagramPost | null {
  const mediaUrl = post.media_url ?? post.thumbnail_url
  if (!mediaUrl || !post.id) return null

  return {
    id: post.id,
    caption: post.caption ?? "",
    mediaType: normalizeMediaType(post.media_type),
    mediaUrl,
    permalink: post.permalink ?? "#",
    timestamp: post.timestamp ?? new Date().toISOString(),
  }
}

export async function getInstagramFeed(): Promise<InstagramFeedResult> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
  const userId = process.env.INSTAGRAM_USER_ID
  const apiVersion = process.env.INSTAGRAM_API_VERSION ?? "v22.0"
  const limit = parseLimit(process.env.INSTAGRAM_POST_LIMIT)
  const profileUrl = process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_URL ?? "https://instagram.com/atolyenorte"

  if (!accessToken || !userId) {
    return {
      posts: FALLBACK_POSTS.slice(0, limit),
      source: "fallback",
      profileUrl,
      error: "Instagram credentials are not configured.",
    }
  }

  const url = new URL(`https://graph.facebook.com/${apiVersion}/${userId}/media`)
  url.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp"
  )
  url.searchParams.set("limit", String(limit))
  url.searchParams.set("access_token", accessToken)

  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      next: { revalidate: 1800 },
    })

    if (!response.ok) {
      const details = await response.text()
      throw new Error(`Instagram API request failed (${response.status}): ${details}`)
    }

    const payload = (await response.json()) as InstagramApiResponse
    const posts = (payload.data ?? [])
      .map(mapApiPostToDomain)
      .filter((item): item is InstagramPost => item !== null)

    if (posts.length === 0) {
      return {
        posts: FALLBACK_POSTS.slice(0, limit),
        source: "fallback",
        profileUrl,
        error: "Instagram API returned no media items.",
      }
    }

    return {
      posts,
      source: "live",
      profileUrl,
    }
  } catch (error) {
    return {
      posts: FALLBACK_POSTS.slice(0, limit),
      source: "fallback",
      profileUrl,
      error: error instanceof Error ? error.message : "Unknown Instagram API error.",
    }
  }
}
