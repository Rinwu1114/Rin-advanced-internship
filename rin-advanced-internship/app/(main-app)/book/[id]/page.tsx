import BookInfo from "./components/BookInfo";


export default async function Book({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bookInfo = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
  ).then((res) => res.json());

  return (
    <>
          <div className="row">
            <div className="container">
              <BookInfo bookInfo={bookInfo} />
            </div>
          </div>
    </>
  );
}
