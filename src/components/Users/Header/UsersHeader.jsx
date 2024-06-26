import React from "react";
import css from "./UsersHeader.module.scss";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const UsersHeader = () => {
  return (
    <div className={`${css.header} border-1`}>
      <NavigationMenu>
        <NavigationMenuList className="p-0 m-0">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Users</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default UsersHeader;
