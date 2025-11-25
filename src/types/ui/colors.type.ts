export type TColors =
    | 'zinc'
    | 'slate'
    | 'neutral'
    | 'stone'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose';

export type TColorFlat = 'inherit' | 'current' | 'transparent' | 'black' | 'white';
export type TBrandColors = 'primary';
export type TAllColors = TColorFlat | TColors | TBrandColors;
