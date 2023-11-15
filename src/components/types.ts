export interface NestedDropdownProp {
  section: Section;
  iconColor: string;
}

export interface Section {
  name: string;
  payload: Array<Info>;
}

export interface Info {
  highlight: string;
  contentSmScreen: string;
  contentLgScreem: string;
}
