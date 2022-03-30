import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "title";

export const MessageTitle = (record: TMessage): string => {
  return record.title || record.id;
};
