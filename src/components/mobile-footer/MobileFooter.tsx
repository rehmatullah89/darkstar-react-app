"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuItems from "@/components/mobile-footer/MenuItems";
import navIcon from "../../../public/navigation_icon.svg";
import userIcon from "../../../public/my-account/users-icon-v2.svg";
import cartIcon from "../../../public/shopping-cart-icon.svg";
import homeIcon from "../../../public/home-icon.svg";
import { useCartContext } from "@/context/CartContext";
import crossIcon from "../../../public/assets/cross-icon-nav.svg";
import { createGlobalStyle } from "styled-components";

const MobileFooter = () => {
  const { dispatch, state } = useCartContext();
  const [selectedTab, setSelectedTab] = useState("");

  const openCart = () => {
    dispatch({ type: "OPEN_MIN_CART", payload: !state.is_open_cart });
  };
  const openMenu = () => {
    dispatch({ type: "OPEN_MENU", payload: !state.is_open_menu });
  };

  const selectedStyle = {
    // backgroundColor: "#007bff",
    // borderRadius: "4px",
    // padding: "5px",
  };

  return (
    <footer
      className="fixed-bottom w-100 mobile-menu d-none bg-white styled-div"
      style={{
        height: "90px",
        zIndex: 9999999,
        padding: 15,
        borderTop: "1px solid #b7b7b7",
        position: "fixed",
      }}
    >
      {/* <style>{`
        .styled-div::before {
          content: "";
          background: linear-gradient(rgba(38, 38, 38, 0) 0%, rgb(255 255 255 / 57%) 100%);
          position: absolute;
          top: -51px;
          width: 100%;
          height: 60px;
          left: 0px;
        }
      `}</style> */}
      <div className="d-flex align-middle justify-content-between align-items-center">
        <div>
          <Link href="/" title="Go to home">
            <div
              style={selectedTab === "home" ? selectedStyle : {}}
              onClick={() => setSelectedTab("home")}
            >
              <Image src={homeIcon} alt="Home Icon" width={26} height={26} />
            </div>
          </Link>
        </div>

        <div>
          <Link href="/my-account/" title="My Account">
            <div
              style={selectedTab === "account" ? selectedStyle : {}}
              onClick={() => setSelectedTab("account")}
            >
              <Image src={userIcon} alt="User Icon" width={26} height={26} />
            </div>
          </Link>
        </div>

        {state.is_open_cart ? (
          <div onClick={openCart} style={{position:'relative'}}>
            <Image
              src={crossIcon}
              alt="cross icon"
              style={{ maxWidth: "20px", height: "auto" }}
            />
             <span className="float_count">{state.cartCount}</span>
          </div>
        ) : (
          <div className="secondary-area-mbt">
            <div
              style={selectedTab === "cart" ? selectedStyle : {}}
              className="cart-icon"
              onClick={openCart}
            >
              <Image src={cartIcon} alt="Cart Icon" />
              <span className="float_count">{state.cartCount}</span>
            </div>
          </div>
        )}

        {state.is_open_menu ? (
          <div className="mobile-toggle open-estatee" onClick={openMenu}>
            <Image
              src={crossIcon}
              alt="cross icon"
              style={{ maxWidth: "20px", height: "auto" }}
            />
          </div>
        ) : (
          <div className="mobile-toggle" onClick={() => openMenu()}>
            <Image src={navIcon} alt="nav Icon" />
          </div>
        )}
      </div>
      <MenuItems setIsOpen={openMenu} isOpen={state.is_open_menu} />
    </footer>
  );
};

export default MobileFooter;
