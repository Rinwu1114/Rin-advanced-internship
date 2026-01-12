import Sidebar from "../components/Sidebar";
import Search from "../components/SearchComponents/Search";
import Selected from "./components/Selected";
import Recommended from "./components/Recommended";
import Suggested from "./components/Suggested";
import PopUp from "../Landing/components/PopUp/PopUp";

async function fetchRecommended(){
    const res = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended')
    return res.json()
}

async function fetchSuggested() {
  const res = await fetch(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
  );
  return res.json();
}

async function fetchBook(){
        const res =  await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected')
        return res.json()
    }


export default async function forYou(){
  
  const recommendedBooks = await fetchRecommended()
  const suggestedBooks = await fetchSuggested()
  const selectedBook = await fetchBook()

  return (
    <>
      <PopUp />
      <div className="grid grid-cols-[200px_minmax(0,1fr)]">
        <Sidebar />
        <div>
          <Search />
          <div className="row">
            <div className="container">
              <div className="for-you__wrapper">
                <Selected selectedBook = {selectedBook}/>
                <Recommended recommendedBooks = {recommendedBooks}/>
                <Suggested suggestedBooks = {suggestedBooks}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
