export interface NestedDropdownProp {
  section: Section;
  classes: string;
  iconColor: string;
}

export interface Section {
  name: string;
  payload: Array<Info>;
}

export interface Info {
  highlight: string;
  content: string;
}
