import uuid from "react-uuid";
import { MessageType } from "../types/types";

export async function getMockMessages(message: string): Promise<MessageType> {
 

  return { text: "hello world this is longer message in order to have a closer look what happens when the message is long ", id: uuid(), create: 2,
        model: "some", user: {name: "MigrosBot", avatar: "avaterString"},
        usage: {prompt_tokens: 2, completion_tokens: 22, total_tokens: 33}
     };
}
