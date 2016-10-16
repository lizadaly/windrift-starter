const React = require('react')
import { Map, List, FromInventory, RenderSection, NextChapter} from 'windrift'

export default ({currentSection, inventory}) => {
  const sections = [
    <section>
      <h2>Windrift Starter</h2>
      <p>
        Welcome to the Windrift Starter package. There isn’t much to do except go
        to the <List expansions={["next section", "next section"]} tag="one" />
      </p>
    </section>,
    <section>
      <p>
        Glad you made it! Let’s get to know each other better. Do you prefer
        <List expansions={[["dogs", "cats"], ["dogs", "cats"]]} tag="animals" />?
      </p>
    </section>,
    <section>
      <p>
        <Map from={inventory.animals} to={{
          cats: "I’m sorry but that’s incorrect.",
          dogs: "A fine and correct choice, but you knew that."
        }} />
      </p>
      <p>
        Continue on to the next chapter to see an adorable photo of a
        <FromInventory inventory={inventory.animals} />,
      </p>
      <NextChapter />
    </section>
    ]
   return <RenderSection currentSection={currentSection} sections={sections} />
}
