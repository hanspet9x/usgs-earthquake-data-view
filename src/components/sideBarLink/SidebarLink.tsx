import React from "react";
import { getClassNames } from "../../utils/utils";
import { FaCaretRight } from 'react-icons/fa'
import './index.scss';
interface Props<T> {
  name: T;
  count?: number;
  activeName: T;
  onLinkClicked(name: T): void;
}
const SidebarLink = <T,>(props: Props<T>) => {
  return (
    <li
      onClick={() => props.onLinkClicked(props.name)}
      style={{ fontWeight: props.activeName === props.name ? 'bold' : 'normal' }}
      className={getClassNames(
        "sidebar-link-comp",
        props.activeName === props.name ? "sidbar-active" : ""
      )}
    >
      <div className="links-name">
        {props.name} (<em>{props.count}</em>)
      </div>
      <FaCaretRight />
    </li>
  );
};

export default SidebarLink;
