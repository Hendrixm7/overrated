import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faMeh as farMeh,
  faGrin as farGrin,
} from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default () => library.add(faSearch, farMeh, farGrin)
