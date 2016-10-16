const React = require('react')
import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'

export default ({currentSection, inventory}) => {
  const sections = [
    <section>
      <h2>Chapter</h2>

      <p>
        As we agreed, a photo of a <FromInventory inventory={inventory.animal} /> and
        not a <AllButSelection from={inventory.animal} />.
      </p>
    </section>
  ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}
