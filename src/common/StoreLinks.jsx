import React from "react";
import AppleLogo from "../assets/logos/app_store.svg";
import PlayStoreLogo from "../assets/logos/google_play.svg";
import StoreLink from "./StoreLink";

function StoreLinks() {
  return (
    <div className="mt-10 justify-center space-x-2 sm:flex hidden md:justify-normal">
      <StoreLink
        href="https://www.apple.com/in/app-store/"
        logo={AppleLogo}
        storename={"App Store"}
      />
      <StoreLink href="" logo={PlayStoreLogo} storename={"Play Store"} />
    </div>
  );
}

export default StoreLinks;
