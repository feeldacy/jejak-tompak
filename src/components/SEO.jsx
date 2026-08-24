import { Helmet } from "react-helmet-async";

const SITE_NAME = "Jejak Tompak";
const BASE_URL = "https://jejaktompak.id"; // Update with your actual domain

/**
 * Reusable SEO component — renders <title>, meta description, and Open Graph tags.
 * Place at the top of every page component.
 */
export default function SEO({
  title,
  description,
  path = "/",
  image,
  type = "website",
  article = null,
}) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
  const url = `${BASE_URL}${path}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${BASE_URL}${image}`
    : `${BASE_URL}/og-default.jpg`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article-specific */}
      {article && (
        <meta property="article:published_time" content={article.publishedAt} />
      )}
      {article && (
        <meta property="article:section" content={article.category} />
      )}
    </Helmet>
  );
}
