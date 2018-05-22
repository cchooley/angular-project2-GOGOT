import { callNgModuleLifecycle } from "@angular/core/src/view/ng_module";
import { Player } from './player'

export const PLAYERS: Player[] = [
    { name: 'Brady', picked: false },
    { name: 'Conor', picked: false },
    { name: 'Gigi', picked: false },
    { name: 'Luke', picked: true },
    { name: 'Molly', picked: false },
    { name: 'Patrick', picked: false },
    { name: 'Stasia', picked: false },
    { name: 'Veronica', picked: false },
    { name: 'Xan', picked: false }
]