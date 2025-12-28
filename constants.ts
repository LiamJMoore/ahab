import { NavItem, SectionId, TokenStat } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Start Hunt', id: SectionId.HERO },
  { label: 'Harpoon Game', id: SectionId.GAME },
  { label: 'The Log', id: SectionId.LORE },
  { label: 'Loot', id: SectionId.TOKENOMICS },
  { label: 'Jeet Radar', id: SectionId.RADAR },
  { label: 'Ask Cap', id: SectionId.ORACLE },
];

export const TOKEN_STATS: TokenStat[] = [
  { label: 'Total Supply', value: '1B', description: '1 Billion Harpoons forged in iron.' },
  { label: 'Tax', value: '0/0', description: 'No taxes. Only the hunt matters.' },
  { label: 'Liquidity', value: 'LOCKED', description: 'Anchored to the sea floor forever.' },
];

export const MANIFESTO_PARAGRAPHS = [
  `Ahab represents OBSESSION. Singular focus to the point of self-destruction. He is the Unbreakable Conviction that defies fate, odds, and nature itself.`,
  `The White Whale is calm mastery; Ahab is VIOLENT INTENT. We do not trade with logic; we trade with emotional fire—rage, pride, vengeance, and ego as fuel.`,
  `To hold $AHAB is to inherit this Charismatic Madness. It is the refusal to accept the limits of the market. We chase the White Whale not because it is easy, but because we are possessed by the glory of the catch.`
];
