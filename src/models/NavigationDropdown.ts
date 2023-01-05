import type NavigationListItem from "./NavigationListItem";

export default interface NavigationDropdown {
    dropdownName: string,
    listItems: Array<Array<NavigationListItem>>
}