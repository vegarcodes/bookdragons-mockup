import Stack from "../Stack/Stack";
import Tag from "../Tag/Tag";

export type BookCardProps = {
  as?:
    | "div"
    | "section"
    | "article"
    | "aside";
  variant?:
    | "light-gray"
    | "white";
  coverUrl: string;
  bookTitle: string;
  bookTitleUrl: string;
  authorName: string;
  tags: string[];
  price: number;
} & React.HTMLAttributes<HTMLElement>;

/**
 * Et kort for visning av en bestemt bok i butikken, til bruk i flere komponenter.
 * @param as Hvilket HTML-element kortet skal renderes som.
 * @param variant Hvilken variant kortet skal ha.
 * @param coverUrl URL til bilde av bokomslaget.
 * @param bookTitle Bokens tittel.
 * @param bookTitleUrl URL som lenkes til ved trykk på bokens tittel.
 * @param authorName Navn på forfatter.
 * @param tags Et string-array med tilknyttede emneord.
 * @param price Bokens pris i kroner.
 * @param className Klassenavn som skal legges på i tillegg.
 */
export default function BookCard({
  as = "div",
  variant = "light-gray",
  coverUrl,
  bookTitle,
  bookTitleUrl,
  authorName,
  tags,
  price,
  className
}: BookCardProps) {
  const Element = as;
  return (
    <Element className={`box box-${variant} book-card ${className ?? ""}`}>
      <img className="book-card-cover" src={coverUrl} alt="" width="160" height="200" />
      
      <Stack>
        <h3 className="eyebrow-heading book-card-title">
          <a href={bookTitleUrl}>{bookTitle}</a>
        </h3>

        <p className="book-card-author">
          Skrevet av {authorName}
        </p>

        <p className="book-card-tags cluster">
          {tags.map(tag => <Tag key={tag} className="tag">{tag}</Tag>)}
        </p>
      </Stack>
      
      <a className="button block-button" href="#">Kjøp ({price},-)</a>
    </Element>
  )
}