import { StringFilter } from "../../util/StringFilter";

export type MessageWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  title?: StringFilter;
};
