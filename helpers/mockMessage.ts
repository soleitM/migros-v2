import uuid from "react-uuid";
import { MessageType } from "../types/types";

export async function getMockMessages(message: string): Promise<MessageType> {
 

  return { text: "hello world ", id: uuid(), create: 2,
        model: "some", user: {name: "namer", avatar: "avaterString"},
        usage: {prompt_tokens: 2, completion_tokens: 22, total_tokens: 33}
     };
}
