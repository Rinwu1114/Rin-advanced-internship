import Summary from "./components/Summary"
import AudioPlayer from "./components/AudioPlayer"

export default async function Player ({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const playerInfo = await fetch(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`).then(res => res.json());
    
    return (
         <div>
                    <div className="summary relative w-full overflow-y-auto">
                    <Summary playerInfo={playerInfo}/>
                    <AudioPlayer playerInfo={playerInfo} />
                  </div>
              </div>
    )
}