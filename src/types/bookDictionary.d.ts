
declare interface BookDictionary {
  [key: string]: {
    shortName: string;
    index: number;
    testament: "old" | "new";
  };
}
