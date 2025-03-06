import './commands' 
import "@cypress/code-coverage/support";

import { mount } from 'cypress/react'

import '../../src/assets/sass/styles.scss' 

// eslint-disable-next-line no-undef
Cypress.Commands.add('mount', mount)