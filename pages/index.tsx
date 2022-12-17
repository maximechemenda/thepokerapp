// Components
import { PokerCardEvent, WebsiteShell } from "../components"

import { MaxpokeContext } from "../contexts"
import { useContext } from "react";

export default function Home() {
    const { events, currentUser } = useContext(MaxpokeContext)

  return (
      // Display the "Poker tournaments looking for you" page
      <WebsiteShell
        head_title="The Poker App"
        head_description="The place where you find poker players"
        page_title={`poker tournaments looking for ${currentUser !== null ? 'the great' : ''} ${(currentUser?.displayName)?.split(" ")[0] ?? 'you'} `}
        >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
                {/* TODO(MC): Have a separate page/section component to display these poker tournaments */}
                {events.map(event => (
                    <div key={event.uid} className="col-span-1">
                        <PokerCardEvent event={event}/>
                    </div>
                ))}
            </div>
      </WebsiteShell>
  )
}
