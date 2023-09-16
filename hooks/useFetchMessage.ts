import { useState, useEffect } from "react";
import { getMessage } from "../helpers/getMessage";
import { MessageType } from "../types/types";
import { getMockMessages } from "../helpers/mockMessage";

type state = {
  data: MessageType;
  isLoading: boolean;
};

export const useFetchMessage = (message: string): state => {
  const [state, setState] = useState<state>({
    data: {} as MessageType,
    isLoading: true,
  });

  if (message === "") {
    return {
      data: {} as MessageType,
      isLoading: false,
    };
  }

  // const loadMessage = async () => {
  //     const data = await getMessage(message);
  //     setState({
  //         data,
  //         isLoading: false,
  //     });
  // };

  const loadMockMessage = async () => {
    const data = await getMockMessages(message);
    console.log(data, "data mocked")
    setState({ data, isLoading: false });
  };

  useEffect(() => {
    // loadMessage();
    loadMockMessage();
  }, [message]);

  return state;
};
