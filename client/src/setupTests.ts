import '@testing-library/jest-dom'
import { TextEncoder } from 'node:util'
import 'cross-fetch/polyfill'

global.TextEncoder = TextEncoder
