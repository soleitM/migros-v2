
import { MessageType } from '../types/types';

export const getMessage = async (message: MessageType) => {

    const fetchMessage = async (): Promise<MessageType> => {

        // @ts-ignore
        const response = await globalThis.fetch(`${message.endpoint?.apiEndpoint}`, {
            method: 'GET',
           
            headers: {
                'Content-Type': 'application/json',

            },
            // body: JSON.stringify(message.text)
        });

        const data  = await response.json();
        console.log(data, "data...");
        return data;
    };
    
    return fetchMessage();

};