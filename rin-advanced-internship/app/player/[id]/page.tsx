import Sidebar from "@/app/components/Sidebar";
import Search from "@/app/components/Search";
import Summary from "./components/Summary"
import AudioPlayer from "./components/AudioPlayer"

export default async function Player ({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const playerInfo = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`).then(res => res.json());

    return (
         <div className="grid grid-cols-[200px_minmax(0,1fr)]">
              <Sidebar />
              <div>
                <Search />
                
                    <div className="summary relative w-full overflow-y-auto h-[calc(100vh - 160px)]">
                    <Summary playerInfo={playerInfo}/>
                    <AudioPlayer playerInfo={playerInfo} />
                  </div>
              </div>
            </div>
    )
}