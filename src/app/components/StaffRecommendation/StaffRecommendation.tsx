import BookCard, { BookCardProps } from "../BookCard/BookCard";
import Stack from "../Stack/Stack";
import SectionSubheading from "../Typography/SectionSubheading";

export type StaffRecommendationProps = {
  recommendationTitle: string;
  variant:
    | "product-on-left"
    | "product-on-right";
  product: Pick<
    BookCardProps, 
      | "coverUrl" 
      | "bookTitle" 
      | "bookTitleUrl" 
      | "authorName" 
      | "tags" 
      | "price"
  >
} & React.HTMLAttributes<HTMLElement>;

export default function StaffRecommendation({
  recommendationTitle,
  variant,
  product,
  children
}: StaffRecommendationProps) {
  return (
    <div 
      className={[
        "container grid large-gap recommendation-section",
        variant === "product-on-left" ? "one-plus-two-columns" : "two-plus-one-columns",
        variant
      ].join(" ")}
    >
      <Stack className="recommendation-section-text">
        <SectionSubheading as="h3">{recommendationTitle}</SectionSubheading>
        {children}
      </Stack>

      <BookCard 
          className="recommendation-section-product"
          variant="white"
          {...product}
        />
    </div>
  );
};