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
  contentLgScreen: string;
}

// export type info
export type InfoOrUndf = Info | undefined;
