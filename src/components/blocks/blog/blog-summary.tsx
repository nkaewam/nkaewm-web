import React from "react"

type BlogSummaryProps = {
  title: string
  subtitle: string
  alias: string
  date: Date
}

function formatBlogDate(date: Date): string {
  const now = new Date()
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  )
  const startOfPostDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  )

  const diffDays = Math.round(
    (startOfToday.getTime() - startOfPostDate.getTime()) / (1000 * 60 * 60 * 24)
  )

  if (diffDays === 0) return "Today"
  if (diffDays > 0 && diffDays <= 7) {
    return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`
  }

  const day = startOfPostDate.getDate().toString().padStart(2, "0")
  const month = startOfPostDate.toLocaleDateString("en-US", { month: "short" })
  const year = startOfPostDate.getFullYear()
  return `${day} ${month} ${year}`
}

const BlogSummary = ({ title, subtitle, alias, date }: BlogSummaryProps) => {
  return (
    <a
      href={`/blog/${alias}`}
      className="group block w-full border border-border px-4 py-3 hover:bg-muted"
    >
      <div className="flex items-start justify-between">
        <h3 className="min-w-0 wrap-break-word text-lg">{title}</h3>
        <span className="shrink-0 text-sm text-muted-foreground">
          {formatBlogDate(date)}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </a>
  )
}

export default BlogSummary
