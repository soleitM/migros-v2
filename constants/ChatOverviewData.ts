type ChatText = {
  text: string;
};

export type ChatItem = {
  id: number;
  title: string;
  Icon: string;
  endpoint: string;
  texts: ChatText[];
};

export const ChatOverviewData: Array<ChatItem> = [
  {
    id: 1,
    title: "Recommendations",
    Icon: "pencil-outline",
    endpoint:
      "https://best-pfwdhnzdha-ey.a.run.app/receive_user_relevant/100009",
    texts: [
      { text: "What is the most popular product" },
      { text: "What are the most popular products in Switzerland" },
    ],
  },
  {
    id: 2,
    title: "Cook",
    Icon: "pencil-ruler",
    endpoint: "https://best-pfwdhnzdha-ey.a.run.app/add_something/kaffee",
    texts: [
      { text: "Create the recipe from my wishlist " },
      { text: "What to buy for a healthy breakfast" },
    ],
  },
  {
    id: 3,
    title: "Live eco-friendly",
    Icon: "pickaxe",
    endpoint:
      "https://best-pfwdhnzdha-ey.a.run.app/get_specific_recipe/healthybreakfast",
    texts: [
      { text: "Find sustainable alternative coffee beans" },
      { text: "Which products have the biggest impact " },
    ],
  },
];
