import { Box, Orientation, Label } from 'gi://Gtk'
import { Widget } from './widget.js'

export var NotebookPage = class NotebookPage extends Widget {
  constructor (name) {
    super(
      new Box({
        'margin-top': 10,
        spacing: 5
      })
    )
    this.name = name
    this.parent.set_orientation(Orientation.VERTICAL)
  }

  register (notebook) {
    const label = new Label({ label: this.name })
    notebook.append_page(this.parent, label)
  }
}
