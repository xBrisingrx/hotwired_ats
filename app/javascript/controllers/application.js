import { Application } from "@hotwired/stimulus"
import consumer from "../channels/consumer"
import StimulusReflex from 'stimulus_reflex' // agregado segun tutorial

const application = Application.start()

// Configure Stimulus development experience
application.warnings = true // agregado segun tutorial
application.debug = false
application.consumer = consumer
window.Stimulus   = application

StimulusReflex.initialize(application, { isolate: true }) // agregado segun tutorial

export { application }
