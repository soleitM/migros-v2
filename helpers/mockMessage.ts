import uuid from "react-uuid";
import { MessageType } from "../types/types";

export async function getMockMessages(message: string): Promise<MessageType> {
 

  return { text: "hello world ", id: uuid(),
        user: {name: "MigrosBot", avatar: "avaterString"},
        endpoint: ""
     };
}
