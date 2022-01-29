import React from "react";
import { getClassNames } from "../../utils/utils";
import {FaCaretRight} from 'react-icons/fa'
interface Props {
  name: string;
  count?: number;
  active: boolean;
}
const SidebarLink = (props: Props) => {
  return (
    <li
      className={getClassNames(
        "sidebar-link-comp",
        props.active ? "sidbar-active" : ""
      )}
    >
        {props.name}
        {props.count}

        <FaCaretRight />
    </li>
  );
};

export default SidebarLink;
