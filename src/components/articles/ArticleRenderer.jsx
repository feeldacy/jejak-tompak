// ArticleRenderer — renders an array of content blocks into JSX.
// Supports: heading, paragraph, image, list, gallery, quote, video.

export default function ArticleRenderer({ blocks }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="space-y-8">
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "heading":
      return <HeadingBlock {...block} />;
    case "paragraph":
      return <ParagraphBlock {...block} />;
    case "image":
      return <ImageBlock {...block} />;
    case "list":
      return <ListBlock {...block} />;
    case "gallery":
      return <GalleryBlock {...block} />;
    case "quote":
      return <QuoteBlock {...block} />;
    case "video":
      return <VideoBlock {...block} />;
    default:
      console.warn(`ArticleRenderer: Unknown block type "${block.type}"`);
      return null;
  }
}

// ─── Block Components ────────────────────────────────────────────────────────

function HeadingBlock({ level, text }) {
  const baseClasses =
    "font-display font-bold text-tompak-green-deep leading-tight";

  switch (level) {
    case 2:
      return (
        <h2 className={`${baseClasses} text-2xl sm:text-3xl mt-4`}>{text}</h2>
      );
    case 3:
      return (
        <h3 className={`${baseClasses} text-xl sm:text-2xl mt-2`}>{text}</h3>
      );
    case 4:
      return (
        <h4 className={`${baseClasses} text-lg sm:text-xl mt-1`}>{text}</h4>
      );
    default:
      return (
        <h2 className={`${baseClasses} text-2xl sm:text-3xl mt-4`}>{text}</h2>
      );
  }
}

function ParagraphBlock({ content }) {
  return (
    <p className="leading-[1.85] text-base md:text-[1.05rem] text-tompak-green-deep/80">
      {content}
    </p>
  );
}

function ImageBlock({ src, alt, caption }) {
  return (
    <figure className="my-4">
      <div className="overflow-hidden rounded-2xl shadow-md">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto object-cover transition duration-500 hover:scale-105"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-tompak-green-deep/60 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function ListBlock({ style, items }) {
  const isOrdered = style === "ordered";
  const Tag = isOrdered ? "ol" : "ul";
  const listStyle = isOrdered ? "list-decimal" : "list-disc";

  return (
    <Tag
      className={`${listStyle} pl-6 space-y-2 text-base text-tompak-green-deep/80 leading-relaxed marker:text-tompak-green-mid`}
    >
      {items.map((item, i) => (
        <li key={i} className="pl-1">
          {item}
        </li>
      ))}
    </Tag>
  );
}

function GalleryBlock({ images, caption }) {
  const gridCols =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <figure className="my-4">
      <div className={`grid ${gridCols} gap-3`}>
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl shadow-sm">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-48 sm:h-56 object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-tompak-green-deep/60 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function QuoteBlock({ content, attribution }) {
  return (
    <blockquote className="relative border-l-4 border-tompak-green-mid/50 pl-6 py-2 my-4">
      <p className="text-lg italic text-tompak-green-deep/80 leading-relaxed">
        &ldquo;{content}&rdquo;
      </p>
      {attribution && (
        <cite className="mt-3 block text-sm font-medium text-tompak-green-deep/60 not-italic">
          — {attribution}
        </cite>
      )}
    </blockquote>
  );
}

function VideoBlock({ src, title, caption }) {
  return (
    <figure className="my-4">
      <div className="overflow-hidden rounded-2xl shadow-md aspect-video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-tompak-green-deep/60 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
