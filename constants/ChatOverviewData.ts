
type ChatText = {
  text: string;
};

export type ChatItem = {
  id: number;
  title: string;
  Icon: string;
  texts: ChatText[];
};

export const ChatOverviewData: Array<ChatItem> = [
  {
    id: 1,
    title: "some",
    Icon:  "pencil-outline",
    texts: [{ text: "Some text" }, { text: "Some other Text" }],
  },
  {
    id:2,
    title: "some2",
    Icon: "pencil-ruler",
    texts: [{ text: "Some text 2" }, { text: "Some other Text 2" }],
  },
  {
    id:3,
    title: "some3",
    Icon: "pickaxe",
    texts: [{ text: "Some text3" }, { text: "Some other Text3" }],
  },
];
