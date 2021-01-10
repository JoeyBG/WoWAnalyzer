import React from 'react';

import SPECS from 'game/SPECS';

import CHANGELOG from './CHANGELOG';
import { Akhtal } from 'CONTRIBUTORS';
import Warning from 'interface/Alert/Warning';

export default {
  // The people that have contributed to this spec recently. People don't have to sign up to be long-time maintainers to be included in this list. If someone built a large part of the spec or contributed something recently to that spec, they can be added to the contributors list. If someone goes MIA, they may be removed after major changes or during a new expansion.
  contributors: [Akhtal],
  // The WoW client patch this spec was last updated to be fully compatible with.
  patchCompatibility: '9.0.2',
  // If set to  false`, the spec will show up as unsupported.
  isSupported: true,
  // Explain the status of this spec's analysis here. Try to mention how complete it is, and perhaps show links to places users can learn more.
  // If this spec's analysis does not show a complete picture please mention this in the `<Warning>` component.
  description: (
    <>
      <Warning>
        The Affliction Analyzer is a work-in-progress, and currently only tracks DoT uptimes and
        cooldown usage.
      </Warning>
      <br />
      Hello fellow Netherlords! If you are new to affliction, here are a few guides to get you
      started:
      <br />
      <a href="https://www.icy-veins.com/wow/affliction-warlock-pve-dps-guide">Icy-Veins</a>
      <br />
      <a href="https://www.wowhead.com/affliction-warlock-guide">Wowhead</a>
      <br />
      <br />
      We are always looking to improve; so if you find any issues or if there is something missing
      that you would like to see added, please open an Issue on GitHub or send a message to Akhtal
      on Discord (Akhtal#6439).
      <br />
      <br />
      If you have any questions about Warlocks, feel free to pay a visit to{' '}
      <a href="https://discord.gg/BlackHarvest" target="_blank" rel="noopener noreferrer">
        Council of the Black Harvest Discord
      </a>
    </>
  ),
  // A recent example report to see interesting parts of the spec. Will be shown on the homepage.
  exampleReport:
    '/report/vBwZKVMLYAmfrh7t/7-Normal+Hungering+Destroyer+-+Kill+(3:33)/Cruëlla/standard',

  // Don't change anything below this line;
  // The current spec identifier. This is the only place (in code) that specifies which spec this parser is about.
  spec: SPECS.AFFLICTION_WARLOCK,
  // The contents of your changelog.
  changelog: CHANGELOG,
  // The CombatLogParser class for your spec.
  parser: () =>
    import('./CombatLogParser' /* webpackChunkName: "AfflictionWarlock" */).then(
      (exports) => exports.default,
    ),
  // The path to the current directory (relative form project root). This is used for generating a GitHub link directly to your spec's code.
  path: __dirname,
};
