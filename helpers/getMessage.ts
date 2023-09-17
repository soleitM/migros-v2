
import { MessageType } from '../types/types';

export const getMessage = async (message: MessageType) => {

    const fetchMessage = async (): Promise<MessageType> => {

        // @ts-ignore
        const response = await globalThis.fetch(`${message.endpoint?.apiEndpoint}`, {
            method: 'GET',
           
            headers: {
                'Content-Type': 'application/json',

            },
        });

        const data  = await response.json();

        return data;
    };
    
    return fetchMessage();

};