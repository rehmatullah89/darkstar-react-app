"use client";
import React, {
  useState,
  useEffect,
  useRef,
  Suspense,
  useLayoutEffect,
} from "react";

import "@/css/sale.css";
import styles from "./teeth-whitening-facts.module.css";
import Image from "next/image";
import { BASE_URL } from "@/utils/constants";
import { useApi } from "@/hooks/useRequest";
import { useCartContext } from "@/context/CartContext";
import "@/css/product.css";

const Sale = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const parallaxSpeed = 0.5;
  const { get } = useApi();
  const { handleAddToCart } = useCartContext();
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useLayoutEffect(() => {
    const resetButton: any = document.getElementById("resetButton");
    if (resetButton) {
      resetButton.addEventListener("click", (event) => {
        event.preventDefault();
        try {
          const filter_products = document.getElementById(
            "filter_products"
          ) as HTMLSelectElement;
          // const price_sort = document.getElementById('price-sort') as HTMLSelectElement;

          if (!filter_products) {
            // if (!filter_products || !price_sort) {
            // throw new Error('One or more elements not found.');
          }

          filter_products.value = "all";
          // price_sort.value = 'default';
          filter_products.dispatchEvent(new Event("change"));
          // price_sort.dispatchEvent(new Event('change'));
        } catch (error) {
          console.error(error.message);
        }
      });
    }
    // Modify content to render starts
    const productList: any = document.getElementById("product-list");
    const landingShortcodes = document.querySelectorAll(".lander-shortcode");

    // Add class to each child element of #product-list

    let counter = 0;
    let landingStr = "";
    if (productList) {
      landingShortcodes.forEach((shortcode: any) => {
        let currentHtml = "";
        let colClass = "";
        let dataStr = "";

        if (shortcode.parentNode) {
          currentHtml = shortcode.closest(".wpb_column").innerHTML;
          colClass = `${
            shortcode.closest(".wpb_column").className
          } landing-product`;
        }

        if (shortcode.dataset) {
          dataStr += `
        data-price="${shortcode.dataset.price}"
        data-recommended="${shortcode.dataset.recommended}"
        data-date="${shortcode.dataset.date}"
        data-default="${counter}"
        data-tagging="${shortcode.dataset.tagging}"
      `;
        }

        landingStr += `<div class="${colClass}" ${dataStr}>${currentHtml}</div>`;
        counter++;
      });

      productList.innerHTML = landingStr;
      Array.prototype.forEach.call(productList?.children, (child, index) => {
        child.classList.add(`child-${index}`);
      });
    }
    const addremClass = () => {
      // const priceSortVal = (document.querySelector('#price-sort') as HTMLSelectElement).value;
      const filterProductsVal = (document.querySelector(
        "#filter_products"
      ) as HTMLSelectElement).value;
      if (filterProductsVal !== "all") {
        // if (priceSortVal !== 'default' || filterProductsVal !== 'all') {

        (document.querySelector("#wrapper") as HTMLElement).classList.add(
          "grid-changed"
        );
        (document.querySelector("#product-list") as HTMLElement).classList.add(
          "grid-changed"
        );
      } else {
        (document.querySelector("#wrapper") as HTMLElement).classList.remove(
          "grid-changed"
        );
        (document.querySelector(
          "#product-list"
        ) as HTMLElement).classList.remove("grid-changed");
      }
    };
    const show_hide_div_by_tag = (tag_val: string) => {
      if (tag_val === "all") {
        document
          .querySelectorAll(".landing-product")
          .forEach((element: Element) => {
            (element as HTMLElement).style.display = "block";
          });
      } else {
        document
          .querySelectorAll(".landing-product")
          .forEach((element: Element) => {
            const attr_val = (element as HTMLElement).dataset.tagging;
            if (tag_val !== attr_val) {
              (element as HTMLElement).style.display = "none";
            } else {
              (element as HTMLElement).style.display = "block";
            }
          });
      }
      addremClass();
    };

    // setTimeout(() => {
    const landingProducts = document.querySelectorAll(".landing-product");
    const filterSelect: any = document.getElementById("filter_products");
    if (landingProducts && filterSelect) {
      let filterOptionsStr = '<option value="all">All products</option>';

      landingProducts.forEach((product: any) => {
        let attrVal = "";

        if (product.dataset) {
          attrVal = product.dataset.tagging;
        }

        if (filterOptionsStr.includes(attrVal) || attrVal === "Select") return;
        filterOptionsStr += `<option value="${attrVal}">${attrVal}</option>`;
      });

      filterSelect.innerHTML = filterOptionsStr;
    }
    // }, 500);

    const sortAsc = (attr) => {
      const product_list = document.getElementById("product-list");

      if (product_list) {
        let landingProducts: any = document.querySelectorAll(
          ".landing-product"
        );
        product_list.innerHTML = "";
        const landingProductsArray = Array.from(landingProducts);
        landingProductsArray.sort(function (a, b) {
          return (
            Number((a as HTMLElement).dataset[attr]) -
            Number((b as HTMLElement).dataset[attr])
          );
        });
        landingProductsArray.forEach(function (product: any) {
          product_list.appendChild(product);
        });
      } else {
        console.error('Element with id "product-list" not found.');
      }
    };
    const sortDesc = (attr) => {
      const product_list = document.getElementById("product-list");
      if (product_list) {
        let landingProducts: any = document.querySelectorAll(
          ".landing-product"
        );
        product_list.innerHTML = "";
        const landingProductsArray = Array.from(landingProducts);
        landingProductsArray.sort(function (a, b) {
          return (
            Number((b as HTMLElement).dataset[attr]) -
            Number((a as HTMLElement).dataset[attr])
          );
        });
        landingProductsArray.forEach(function (product: any) {
          product_list.appendChild(product);
        });
      } else {
        console.error('Element with id "product-list" not found.');
      }
    };
    // const priceSortElement = document.getElementById('price-sort') as HTMLSelectElement | null;
    const filterProducts = document.getElementById(
      "filter_products"
    ) as HTMLSelectElement | null;
    if (filterProducts) {
      filterProducts.addEventListener("change", (event: Event) => {
        show_hide_div_by_tag((event.target as HTMLSelectElement).value);
      });
    }
    // if (priceSortElement) {
    //   priceSortElement.addEventListener('change', function (event) {
    //     const selectedValue = (event.target as HTMLSelectElement).value;
    //     if (selectedValue === 'price-low-to-high') {
    //       sortAsc('price');
    //     } else if (selectedValue === 'price-high-to-low') {
    //       sortDesc('price');
    //     } else if (selectedValue === 'newest') {
    //       sortDesc('date');
    //     } else if (selectedValue === 'default') {
    //       sortAsc('default');
    //     } else {
    //       sortAsc('recommended');
    //     }
    //     addremClass();
    //   });
    // } else {
    //   console.error('Element with id "price-sort" not found.');
    // }

    // Modify content to render ends

    //Add to Cart
    const addToCartButtons = document.querySelectorAll(".add_to_cart_button");
    if (addToCartButtons) {
      addToCartButtons.forEach((add_to_cart) => {
        if (add_to_cart) {
          let currentQuantity = 1;
          add_to_cart.addEventListener("click", (event: any) => {
            event.preventDefault();
            let productId = event?.target?.getAttribute("data-product_id");
            let vipSalePrice = event?.target?.getAttribute(
              "data-vip_sale_price"
            );

            const productSelectionBox = event.target.closest(
              ".product-selection-box"
            );

            const quantityInput: any = productSelectionBox.querySelector(
              ".quantity"
            );

            const radioButtons = productSelectionBox.querySelectorAll(
              'input[type="radio"]'
            );

            if (quantityInput) {
              currentQuantity = parseInt(quantityInput.value);
              productId = quantityInput.getAttribute("data-pid");
            } else if (radioButtons) {
              radioButtons.forEach((radioButton) => {
                if (radioButton.checked) {
                  productId = radioButton.dataset.pid;
                }
              });
            }
            // check if has package options then select product id under packages
            if (productId) {
              if (vipSalePrice) {
                let vip_sale_attr = {
                  //to pass customized vip sale price
                  vip_user: "yes",
                  vip_sale_price: vipSalePrice,
                };
                addToCart(productId, currentQuantity, vip_sale_attr);
              } else {
                addToCart(productId, currentQuantity);
              }
            }
          });
        }
      });
    }

    // option for multiple package
    // const selectPackageWrapper = document.querySelector('.selectPackageWrapper');

    // document.addEventListener('click', function (event:any) {
    //   if ((event.target as HTMLButtonElement).classList.contains('selectpackageButton') && (event.target as HTMLButtonElement).tagName === 'BUTTON') {
    //     const currentSelectPackageWrapper = event.target.closest('.selectPackageWrapper');
    //     if (currentSelectPackageWrapper) {
    //       const allSelectPackageWrappers = document.querySelectorAll('.selectPackageWrapper');
    //       allSelectPackageWrappers.forEach((wrapper) => {
    //         wrapper.classList.remove('openPackage');
    //       });
    //       currentSelectPackageWrapper.classList.add('openPackage');
    //     }
    //   }
    // });
    ///option for select quantity
    const selectQuantity = document.querySelectorAll(".selectquantitybtn");
    if (selectQuantity) {
      selectQuantity.forEach((item: any) => {
        item.addEventListener("click", (event: any) => {
          document
            .querySelectorAll(".openPackage-quantity")
            .forEach((element) => {
              element.classList.remove("openPackage-quantity");
            });
          const quantityWrapper = event?.target.closest(
            ".product-selection-description-parent-inner"
          );
          if (quantityWrapper) {
            quantityWrapper.classList.add("openPackage-quantity");
          }
        });
      });
    }
    // option for multiple package
    const selectPackage = document.querySelectorAll(".select-a-package");
    if (selectPackage) {
      selectPackage.forEach((item: any) => {
        item.addEventListener("click", (event: any) => {
          document.querySelectorAll(".openPackage").forEach((element) => {
            element.classList.remove("openPackage");
          });
          const packageWrapper = event?.target.closest(
            ".selectPackageWrapper "
          );
          if (packageWrapper) {
            packageWrapper.classList.add("openPackage");
          }
        });
      });
    }

    // remove class outsideClick
    document.addEventListener("click", (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".selectPackageWrapper")) {
        if (document.querySelectorAll(".openPackage").length > 0) {
          document.querySelectorAll(".openPackage").forEach((element) => {
            element.classList.remove("openPackage");
          });
        }
      }
    });
    document.addEventListener("click", (event: MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest(".product-selection-price-wrap")
      ) {
        if (document.querySelectorAll(".openPackage-quantity").length > 0) {
          document
            .querySelectorAll(".openPackage-quantity")
            .forEach((element) => {
              element.classList.remove("openPackage-quantity");
            });
        }
      }
    });
    // close on cross Quantity
    const crossIconQuantity = document.querySelectorAll(
      ".packageQuantityBox  a.iconCloseBox"
    );
    if (crossIconQuantity) {
      crossIconQuantity.forEach((item: any) => {
        item.addEventListener("click", (event) => {
          (event.target as HTMLElement)
            .closest(".product-selection-description-parent-inner")
            ?.classList.remove("openPackage-quantity");
        });
      });
    }
    const crossIconPackage = document.querySelectorAll(
      ".packageheader  a.iconCloseBox"
    );
    if (crossIconPackage) {
      crossIconPackage.forEach((item: any) => {
        item.addEventListener("click", (event) => {
          (event.target as HTMLElement)
            .closest(".selectPackageWrapper")
            ?.classList.remove("openPackage");
        });
      });
    }
    const plusBtn = document.querySelectorAll(".plus-btn");
    const minusBtn = document.querySelectorAll(".minus-btn");

    if (plusBtn) {
      plusBtn.forEach((element: any) => {
        element.addEventListener("click", handlePlusButtonClick);
      });
    }
    if (minusBtn) {
      minusBtn.forEach((element: any) => {
        element.addEventListener("click", handleMinusButtonClick);
      });
    }
    const selectAPackageElements = document.querySelectorAll(
      ".select-a-package"
    );
    selectAPackageElements.forEach((element) => {
      element.addEventListener("click", handleSelectPackage);
    });

    const selectors_inputs = document.querySelectorAll(
      'input[name="fav_language"]'
    );
    if (selectors_inputs.length > 0) {
      selectors_inputs.forEach((option) => {
        option.addEventListener("click", handleOptionChanges);
      });
    }
    return () => {
      document.removeEventListener("click", function (event: any) {
        if (
          (event.target as HTMLButtonElement).classList.contains(
            "selectpackageButton"
          ) &&
          (event.target as HTMLButtonElement).tagName === "BUTTON"
        ) {
          const currentSelectPackageWrapper = event.target.closest(
            ".selectPackageWrapper"
          );
          if (currentSelectPackageWrapper) {
            currentSelectPackageWrapper.classList.remove("openPackage");
          }
        }
      });
      document.removeEventListener("click", (event: MouseEvent) => {
        if (!(event.target as HTMLElement).closest(".selectPackageWrapper")) {
          if (document.querySelectorAll(".openPackage").length > 0) {
            document.querySelectorAll(".openPackage").forEach((element) => {
              element.classList.remove("openPackage");
            });
          }
        }
      });
    };
  }, []);
  const handleOptionChanges = (event: any) => {
    const sale_price = event?.target?.getAttribute("data-vip_sale_price");
    if (sale_price) {
      const parentPackageBox = event?.target.closest(".selectPackageBox");
      const add_to_cart_button = parentPackageBox.querySelector(
        ".add_to_cart_button"
      );
      add_to_cart_button.setAttribute("data-vip_sale_price", sale_price);
      const displayPrice = parentPackageBox.querySelector(".packageAmount");
      if (displayPrice) {
        displayPrice.textContent = sale_price;
      }
    } else {
      const sale_price = event?.target?.getAttribute("data-price");
      if (sale_price) {
        const parentPackageBox = event?.target.closest(".selectPackageBox");
        const displayPrice = parentPackageBox.querySelector(".packageAmount");
        if (displayPrice) {
          displayPrice.textContent = sale_price;
        }
      }
    }
  };
  const handleSelectPackage = (event: any) => {
    console.log("parent clicked");
    const packageSelectedDataElements = event.target
      .closest(".product-selection-box")
      ?.querySelectorAll(".pacakge_selected_data");
    if (packageSelectedDataElements) {
      const lastElement =
        packageSelectedDataElements[packageSelectedDataElements.length - 1];
      if (lastElement) {
        (lastElement as HTMLInputElement).checked = true;
        lastElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    }
  };
  const handlePlusButtonClick = (event: any) => {
    const productSelectionBox = event.target.closest(".product-selection-box");
    if (!productSelectionBox) return;
    const quantityInput: any = productSelectionBox.querySelector(".quantity");
    if (!quantityInput) return;
    const currentQuantity = parseFloat(quantityInput.value);
    quantityInput.value = (currentQuantity + 1).toString();
    updatePrice(productSelectionBox);
  };
  const handleMinusButtonClick = (event: any) => {
    const productSelectionBox = event.target.closest(".product-selection-box");
    if (!productSelectionBox) return;
    const quantityInput: any = productSelectionBox.querySelector(".quantity");
    if (!quantityInput) return;
    const currentQuantity = parseFloat(quantityInput.value);
    if (currentQuantity <= 1) return;
    quantityInput.value = (currentQuantity - 1).toString();
    updatePrice(productSelectionBox);
  };
  const updatePrice = (box: Element) => {
    const price =
      (box as HTMLElement)
        ?.closest(".product-selection-box")
        ?.querySelector(".selectquantitybtn")
        ?.getAttribute("data-price") || null;
    if (!price) return;
    const quantityInput = box.querySelector(
      ".quantity"
    ) as HTMLInputElement | null;
    if (!quantityInput) return;
    const quantity = parseFloat(quantityInput.value);
    const total = parseFloat(price) * quantity;
    const priceDisplay = box.querySelector(".price-display");
    if (priceDisplay) {
      priceDisplay.textContent = total.toFixed(2);
    }
  };
  const addToCart = async (
    product_id: number | string,
    quantity: number = 1,
    custom_attr?: any
  ) => {
    try {
      const apiUrl = `${BASE_URL}/api/products/search/${product_id}`;
      const response = await get(apiUrl);
      const data = await response.data;
      if (data) {
        const product = { ...data, ...custom_attr };
        handleAddToCart(product, quantity);
      }
    } catch (error) {
      console.log("Failed to load products", error.message);
    }
  };

  return (
    <>
      {/* <Suspense fallback={<></>}> */}
      <Style />

      {/* </Suspense> */}
    </>
  );
};

const Style = () => (
  <style>
    {`
body {
  color: #565759;
}
  div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,p,blockquote,th,td{margin:0;padding:0}
  .btn, div#wcContent .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    height: auto;
    padding: 10px 40px;
    border-radius: 40px;
    border: 2px solid;
    font-weight: 300;
    background-color: transparent;
    border-color: #595858;
    border-width: 1px;
    border-radius: 0;
    color: #595858;
    font-family: 'Montserrat';
    letter-spacing: .2em;
    text-shadow: none;
}
  .btn-primary-blue, div#wcContent .btn-primary-blue {
    background-color: #3c98cc;
    border-color: #3382af;
    color: #fff;
}
  section#solid-color-with-text-section{min-height:435px}
  section.shopLanderPageHader .pageheaderBotm{box-shadow:rgba(0,0,0,0.08) 0 4px 12px;padding-top:5px;padding-bottom:5px;min-width:176px;overflow:hidden;position:relative;z-index:12;margin-bottom:3rem}
  .row{max-width:90rem;margin-right:auto;margin-left:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}
  section.shopLanderPageHader .no-flex{display:block}
  .column,.columns{-webkit-box-flex:1;-ms-flex:1 1 0;flex:1 1 0;padding-right:.9375rem;padding-left:.9375rem;min-width:0}
  .small-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}
  .columns .vc_column-inner{width:100%}
  .columns:not(.full-height) .vc_column-inner:not(.thb-fixed){min-height:100%}
  .vc_column-inner::after,.vc_column-inner::before{content:" ";display:table}
  .row .columns .wpb_wrapper{width:100%}
  section.shopLanderPageHader .flex-row{display:flex;align-content:center;gap:30px;align-items:center}
  select{padding:0 20px;height:48px;line-height:48px;font-weight:400}
  section.shopLanderPageHader .pageheaderBotm select{background-color:transparent;text-transform:capitalize;border:0;font-size:16px}
  .small-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}
  #product-list .thb-dark-column.small-12.landing-product{padding-top:0;position:relative;padding-left:10px;padding-right:10px}
  .product-selection-box{border:solid #c5c6c9 1px;text-align:center;position:relative}
  #product-list.productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner {
    padding-top: 20px;
    padding-bottom: 20px;
}
#product-list.productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner {
  padding-top: 17px;
  padding-bottom: 0px;
}.productLandingPageContainer .medium-12 .product-selection-description-parent-inner {
  position: relative;
}

  #product-list:not(.grid-changed) .medium-12.thb-dark-column.small-12.landing-product .product-selection-box{margin-top:0;display:flex;align-content:center;justify-content:space-between;padding-left:15px;position:relative}
  #product-list:not(.grid-changed) .medium-12.thb-dark-column.small-12.landing-product >.vc_column-inner{width:100vw;position:relative;left:calc(-50vw + 50%);padding-top:65px;padding-bottom:40px}
  #product-list.teethWhieteingSystemWrapper:not(.grid-changed) .medium-12.thb-dark-column.small-12.landing-product >.vc_column-inner{background-color:#e9e9f5}
  #product-list .medium-12.thb-dark-column.small-12.landing-product >.vc_column-inner .product-selection-box{max-width:1350px;margin-left:auto;margin-right:auto;background:#fff}
  .shopLanderPageHader .whitening-teeth-girl-with-smile{position:absolute;right:42px;top:-110px;max-width:436px}
  #product-list .medium-12.thb-dark-column.small-12.landing-product #product-list .product-selection-image-wrap{-webkit-box-flex:0;-ms-flex:0 0 56%;flex:0 0 56%;max-width:56%}
  #product-list:not(.grid-changed) .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent{-webkit-box-flex:0;-ms-flex:0 0 42%;flex:0 0 42%;max-width:42%;display:flex;align-items:center}
  #product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue{max-width:280px;font-size:20px;letter-spacing:0}
  #product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue {
    font-size: 24px;
}

  #product-list .landing-product .product-selection-description-parent-inner .btn-primary-blue:hover{background-color:#595858;border-color:#595858}
  #product-list .landing-product:not(.medium-12) .product-selection-description-parent{margin-left:-15px;margin-right:-15px;padding-right:15px;padding-bottom:15px;padding-top:15px;}
  .teethWhieteingSystemWrapper .landing-product:not(.medium-12) .product-selection-description-parent{background:#f1f1f8}
  #product-list .landing-product:not(.medium-12) .product-selection-box{padding:15px;padding-bottom:0}
  #product-list .product-selection-price-wrap button,#product-list .product-selection-price-wrap a{max-width:290px;min-width:220px;border-color:transparent}
  #product-list .landing-product:not(.medium-12) .product-selection-price-wrap button{margin-top:0}
  #product-list .landing-product:not(.medium-12) .product-selection-price-wrap{padding-top:0}
  .teethWhieteingSystemWrapper .product-selection-price-wrap button{background-color:#b8b8dc;border-color:#b8b8dc}
  #product-list .medium-6.landing-product .product-selection-description-parent-inner,#product-list .medium-9.landing-product .product-selection-description-parent-inner{display:flex;justify-content:space-between;align-items:center}
  #product-list .product-selection-description b{font-size:16px;text-transform:uppercase;padding-right:15px}
  #product-list .product-selection-description{text-align:left}
  #product-list span.product-selection-price-text del:before{height:0}
  #product-list .product-selection-image-wrap{padding:10px 15px;position:relative}
  #product-list .product-selection-image-wrap img{opacity:1;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;max-width:95%}
  #product-list .product-selection-image-wrap:hover img{opacity:.6}
  #product-list .medium-3 .product-selection-image-wrap{max-width:290px;min-height:214px;max-height:214px;overflow:hidden;margin-left:auto;margin-right:auto}
  #product-list span.product-selection-price-text del bdi,#product-list span.product-selection-price-text .wasText{font-size:14px;color:#88898c;font-weight:500}
  #product-list .medium-6 .product-selection-image-wrap{max-width:401px;margin-left:auto;margin-right:auto;max-height:254px;min-height:254px;overflow:hidden}
  #product-list .product-selection-box{margin-top:20px;position:relative}
  #product-list .product-selection-image-wrap{display:flex;align-items:center;justify-content:center;margin-left:auto;margin-right:auto}
  #product-list .medium-9 .product-selection-image-wrap{max-width:339px}
  #product-list .medium-4.landing-product .product-selection-image-wrap{min-height:256px}
  #product-list span.product-selection-price-text ins bdi{font-size:100%;margin-left:0;font-weight:500}
  #product-list span.product-selection-price-text ins span.woocommerce-Price-currencySymbol{font-size:14px}
  #product-list span.woocommerce-Price-currencySymbol{font-size:100%}
  #product-list .featureTag{position:absolute;left:0;top:0;left:0;right:0;margin-left:auto;max-width:160px;min-width:160px;text-align:center;color:#fff;font-family:'Montserrat';font-weight:500;text-transform:uppercase;margin-right:auto;z-index:12}
  #product-list .landing-product:not(.medium-12) .featureTag{background:#65657f;margin-right:22px}
  #product-list .medium-12 .featureTag{background:#f0c23a;border-radius: 10px;}
  #product-list.grid-changed .medium-9 .product-selection-image-wrap{min-height:254px;max-width:408px}
  .teethWhieteingSystemWrapper.grid-changed .landing-product .product-selection-description-parent{background:#f6f4ee}
  #product-list.grid-changed .landing-product .product-selection-description-parent{padding:15px;min-height:86px}
  #product-list.grid-changed .landing-product .product-selection-price-wrap{padding-top:0;margin-top:0px}
  #product-list.grid-changed .landing-product .product-selection-price-wrap button{margin-top:0}
  #product-list.grid-changed .medium-6 .product-selection-image-wrap,#product-list.grid-changed .medium-3 .product-selection-image-wrap,#product-list.grid-changed .medium-9 .product-selection-image-wrap,#product-list.grid-changed .medium-4 .product-selection-image-wrap,#product-list.grid-changed .medium-12 .product-selection-image-wrap,#product-list.grid-changed .medium-9 .product-selection-image-wrap{min-height:300px;max-width:375px;max-height:300px;overflow:hidden}
  #product-list.grid-changed .medium-6.landing-product .product-selection-description-parent-inner,#product-list.grid-changed .medium-9.landing-product .product-selection-description-parent-inner,#product-list.grid-changed .medium-3.landing-product .product-selection-description-parent-inner,#product-list.grid-changed .medium-8.landing-product .product-selection-description-parent-inner,#product-list.grid-changed .medium-12.landing-product .product-selection-description-parent-inner,#product-list.grid-changed .medium-4.landing-product .product-selection-description-parent-inner{display:flex;justify-content:space-between;align-items:center}
  #product-list.grid-changed .productDescriptionFull{display:none}
  #product-list:not(.grid-changed) .medium-12 .product-selection-price-text-top .product-selection-price-text span.woocommerce-Price-amount.amount{font-size:22px}
  #product-list:not(.grid-changed) span.product-selection-price-text ins span.woocommerce-Price-currencySymbol{font-size:18px}
  #product-list:not(.grid-changed) .medium-12 .product-selection-description{text-align:center}
  #product-list:not(.grid-changed) .medium-12 .product-selection-description b{font-size:24px}
  #product-list:not(.grid-changed) .medium-12 .product-selection-description .productDescriptionDiv{margin-bottom:15px}
  .teethWhieteingSystemWrapper:not(.grid-changed) .medium-12 .product-selection-description b{color:#65657f}
  #product-list .landing-product div[data-tagging="Low Stock"] .featureTag{background-color:#68c8c7}
  #product-list .landing-product div[data-tagging="Sale!"] .featureTag{background-color:#d4545a}
  #product-list .landing-product div[data-tagging="Featured!"] .featureTag{background-color:#f8a18a}
  #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product >.vc_column-inner .product-selection-box{padding:15px;padding-bottom:0}
  #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent{margin-left:-15px;margin-right:-15px}
  #product-list:not(.grid-changed) .landing-product.medium-3 .product-selection-description-parent{min-height:136px;max-height:136px;overflow:hidden}
  #product-list:not(.grid-changed) .landing-product.medium-6 .product-selection-description-parent{min-height:96px;max-height:96px;overflow:hidden}
  #product-list:not(.grid-changed) .landing-product.medium-4 .product-selection-description-parent{min-height:138px;max-height:138px;overflow:hidden}
  #product-list:not(.grid-changed) .landing-product.medium-9 .product-selection-description-parent{min-height:93px;max-height:93px;overflow:hidden}
  #product-list:not(.grid-changed) .medium-4.landing-product .product-selection-image-wrap{max-height:256px;overflow:hidden}
  #product-list:not(.grid-changed) .medium-9 .product-selection-image-wrap{min-height:255px;max-height:255px;overflow:hidden}
  #product-list .columns:not(.medium-12) .productDescriptionFull{display:none}
  .grid-changed .wpb_column:not(.medium-12){max-width:50%!important;flex:0 0 50%}
  #product-list:not(.grid-changed) .landing-product.medium-3 .product-selection-description-parent{min-height:155px;max-height:155px}
  #product-list:not(.grid-changed) .landing-product.medium-6 .product-selection-description-parent{min-height:115px;max-height:115px}
  #product-list .medium-3 .product-selection-image-wrap{min-height:230px;max-height:230px}
  #product-list .medium-6 .product-selection-image-wrap{max-height:270px;min-height:270px}
  .teethWhieteingSystemWrapper .product-selection-price-wrap button{text-transform:uppercase}
  #product-list .medium-6.landing-product .product-selection-description-parent-inner,#product-list .medium-9.landing-product .product-selection-description-parent-inner{align-items:end}
  @media only screen and (min-width: 768px) and (max-width: 1300px) {
  #product-list .product-selection-price-wrap button,#product-list .product-selection-price-wrap a{max-width:170px;min-width:170px}
  #product-list .product-selection-description b{font-size:14px}
  #product-list .medium-3 .product-selection-image-wrap{max-width:180px;min-height:204px}
  #product-list:not(.grid-changed) .medium-3 .product-selection-image-wrap{min-height:212px}
  #product-list:not(.grid-changed) .medium-6 .product-selection-image-wrap{min-height:252px}
  html body #product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner{padding-right:0}
  }
  @media only screen and (min-width: 768px) and (max-width: 959px) {
    #product-list.grid-changed .medium-6 .product-selection-image-wrap,#product-list.grid-changed .medium-3 .product-selection-image-wrap,#product-list.grid-changed .medium-9 .product-selection-image-wrap,#product-list.grid-changed .medium-4 .product-selection-image-wrap,#product-list.grid-changed .medium-12 .product-selection-image-wrap,#product-list.grid-changed .medium-9 .product-selection-image-wrap{min-height:240px;max-height:240px}
    #product-list .product-selection-price-wrap button,#product-list .product-selection-price-wrap a{min-width:130px;font-size:12px}
  
  
    #product-list:not(.grid-changed) .medium-6 .product-selection-image-wrap{min-height:232px;max-width:290px;max-height:232px}
    #product-list .landing-product:not(.medium-12) .featureTag{margin-right:0;min-width:128px}
    #product-list:not(.grid-changed) .medium-9 .product-selection-image-wrap{min-height:230px;max-height:230px}
    
    #product-list .landing-product:not(.medium-12) .product-selection-description-parent{margin-left:-7px;margin-right:-7px;padding:15px 7px}
    #product-list .landing-product:not(.medium-12) .product-selection-box{padding-left:7px;padding-right:7px}
    div#product-list{padding:0 14px}
    #product-list:not(.grid-changed) .medium-12 .product-selection-description b{font-size:20px}
    #product-list:not(.grid-changed) .medium-12 .product-selection-price-wrap{padding-top:0}
  }
  .product-selection-price-wrap {
    background-color: transparent;
}
  #product-list.grid-changed .medium-4 .product-selection-price-text-top {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}

  @media screen and (min-width: 768px) {
    .grid-changed .wpb_column {
      width: 50% !important;
      max-width: 50% !important;
       flex: 0 0 50%;
  }
    #product-list.productLandingPageContainer.grid-changed .medium-4.landing-product .product-selection-description-parent {
      min-height:95px;
      max-height:95px;
    }
   
    .active-recomendation-tab #product-list .product-selection-description {
      margin-bottom: 10px !important;
  }
      #product-list.productLandingPageContainer .thb-dark-column.medium-12.landing-product{margin-bottom:40px}
      #product-list .product-selection-description{margin-bottom:10px}
      #product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner{padding-left:15px;padding-right:40px}
      #product-list .landing-product:not(.medium-12) .productDescriptionDiv,#product-list .landing-product:not(.medium-12) .productDescriptionDiv{max-height:25px;overflow:hidden;max-height:44px;overflow:hidden;min-height:44px;display:flex;align-items:end}
      #product-list .product-selection-price-text-top{height:30px;display:flex;align-items:center}
    }
    .alert.backOrderList{position:relative;padding:.45rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:0;display:none}
    .alert-danger.backOrderList{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb;margin-bottom:0;margin-top:10px;margin-bottom:-20px;font-size:12px;font-weight:500}

  .productLandingPageContainer .medium-6 .selectPackageBox, .productLandingPageContainer .medium-6 .packageQuantityBox, .productLandingPageContainer .medium-12 .selectPackageBox, .productLandingPageContainer .medium-12 .packageQuantityBox, .productLandingPageContainer .medium-9 .selectPackageBox, .productLandingPageContainer .medium-9 .packageQuantityBox, .productLandingPageContainer .medium-8 .packageQuantityBox, .productLandingPageContainer .medium-10 .packageQuantityBox, .productLandingPageContainer .medium-10 .selectPackageBox {
    max-width: 308px;
    right: 0;
    left: inherit;
    border-left: 1px solid #c5c6c9;
}
.productLandingPageContainer .medium-12 .selectPackageBox, .productLandingPageContainer .medium-12 .packageQuantityBox {
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #c5c6c9;
}

.productLandingPageContainer .packageheader {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 18px;
}
.increament-decreament-wrapper.box {
  width: 100%;
  max-width: 100%;
}
.productLandingPageContainer p.total {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
.product-selection-description-parent .packageQuantityBox p {
  font-size: 12px;
  font-weight: normal;
  font-style: italic;
  line-height: 1.2;
  margin-bottom: 0px;
}.open-sans {
  font-family: "Open sans", sans-serif !important;
}

.productLandingPageContainer .priceparentBx span.packageAmount, .productLandingPageContainer p.total span#total, .productLandingPageContainer .price-display {
  color: #65657f;
  font-size: 28px;
  font-weight: 800;
  font-family: 'Montserrat';
}
#product-list.productLandingPageContainer .packageheader a.iconCloseBox {
  position: absolute;
  right: 7px;
  top: 4px;
  font-weight: 800;
  font-size: 14px;
  color: #1fb6e4;
  min-width: auto;
}
.productLandingPageContainer .plus-minusWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 15px;
  margin-top: 15px;
}
button {
  overflow: visible;
}
.productLandingPageContainer .plus-minusWrapper input, .productLandingPageContainer .plus-minusWrapper button {
  margin: 0;
  min-width: 50px;
  min-height: 40px;
  max-height: 40px;
  max-width: 50px;
  border: 1px solid rgb(197 198 201);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  text-align: center;
  padding: 0;
}
.teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button, .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite, .teethWhieteingSystemWrapper.productLandingPageContainer .btn {

  font-size: 18px;
  letter-spacing: 0;
  text-transform: uppercase;
  width: 100%;
  padding: 8px 10px;
  text-align: center;
}
#product-list.productLandingPageContainer .medium-12 .product-selection-price-wrap button {
  margin-top: 0;
}
html body #product-list.teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap .packageQuantityBox .plus-minusWrapper button {
  min-width: 30px;
  min-height: 40px;
  max-height: 40px;
  max-width: 30px;
  color: #1fb6e4;
  font-size: 20px;
  font-weight: bold;
  font-family: "Montserrat";
  cursor: pointer;
  background: #fff;
  border: 1px solid rgb(197 198 201);
}
description-parent-inner .normalyAmount, .normalyAmount {
  font-size: 12px;
  margin-bottom: 6px;
  display: none;
}
.italic {
  font-style: italic;
}
#product-list.productLandingPageContainer .medium-12 .normalyAmount {
  display: block;
}


#product-list.productLandingPageContainer .product-selection-box {
  margin-bottom: 20px;
  margin-top: 0px;
}



.selectPackageBox {
  background: #e8f8fc;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 15px;
  border-top: 1px solid #c5c6c9;
  display:none;
  z-index: 12345;
}
.openPackage .selectPackageBox { display: block;}

#wrapper .productLandingPageContainer .form-group-radio-custom label{
  border: 0;
  padding: 4px 0px;
  display: flex;
  align-items: center;
  justify-content: end;
}
.productLandingPageContainer .form-group-radio-custom [type="radio"]:checked + label:before
,.productLandingPageContainer .form-group-radio-custom [type="radio"]:not(:checked) + label:before{
  width: 24px;
  height: 24px;
  left: 10px;
  top: 50%;
  margin-top: -12px;    background: transparent;    border: 1px solid #c6c7ca;
}
.productLandingPageContainer .form-group-radio-custom [type="radio"]:checked + label:after,
.productLandingPageContainer .form-group-radio-custom [type="radio"]:not(:checked) + label:after{
  width: 12px;
  height: 12px;
  top: 50%;
  left: 16px;
  margin-top: -6px;
  background: #1fb6e4;
}
.productLandingPageContainer  .radioButtonInner {
  background: #fff;
  padding: 10px;
  width: 82%;    border: 1px solid #c5c6c9;
  text-align: left;
  line-height: 1.1;
}
.productLandingPageContainer  .packageheader


{
  font-weight: 600;
  text-transform: uppercase;
  font-size: 18px;
}
#product-list.productLandingPageContainer  .packageheader a.iconCloseBox
{
  position: absolute;
  right: 7px;
  top: 4px;
  font-weight: 800;
  font-size: 14px;    color: #1fb6e4;
  min-width: auto;
}
.productLandingPageContainer .form-group-radio-custom [type="radio"]:checked + label:before{
  border-color: #1fb6e4;
}
.productLandingPageContainer .priceparentBx span.packageAmount
,.productLandingPageContainer p.total span#total
,.productLandingPageContainer .price-display
{
  color: #65657f;
  font-size: 28px;
  font-weight: 800;
  font-family:'Montserrat';
}
.productLandingPageContainer .priceparentBx span.dollerSign{
  font-family:Open Sans;font-size: 16px;
}
.productLandingPageContainer .priceparentBx {
  line-height: 1;
}
.product-selection-description-parent-inner .normalyAmount ,.normalyAmount {
  font-size: 12px;    margin-bottom: 6px;
}
.productLandingPageContainer  .packageTotalPrice {
  margin-bottom: 10px;
}
.productLandingPageContainer  p.textSelectQuantity {
  font-size: 12px;
  line-height: 1.1;
  font-style: italic;
}

.teethWhieteingSystemWrapper.productLandingPageContainer .landing-product:not(.medium-12) .product-selection-description-parent{
  background: #f6f4ee;
  border-radius: 0px 0 10px 10px;
}
.teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button
,.teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite
,.teethWhieteingSystemWrapper.productLandingPageContainer .btn

{
  background-color: #1fb6e4;
  border-color: #1fb6e4;
  font-size: 18px;
  letter-spacing: 0;
  text-transform: uppercase;
  width: 100%;
  padding: 8px 10px;
  text-align: center;
}
.teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button:hover
,.teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite:hover
,.teethWhieteingSystemWrapper.productLandingPageContainer .btn:hover{
  background-color: #595858;
  border-color: #595858;
}

.productLandingPageContainer  p.total{ display: flex; align-items: center;    justify-content: center; margin: 0;}
.productLandingPageContainer  p.total span#total {
  display: inline-block;
  max-width: 85px;
  overflow: hidden;
}
.product-selection-description-parent .packageQuantityBox  p{
  font-size: 12px;
  font-weight: normal;
  font-style: italic;
  line-height: 1.2;
  margin-bottom: 0px;
}

.productLandingPageContainer span.product-selection-price-text del{position:relative;text-decoration:none}
.productLandingPageContainer span.product-selection-price-text del:before{content:"";position:absolute;height:2px;background:#565759;top:22px;margin-left:auto;margin-right:auto;left:-13px;right:0}
.productLandingPageContainer span.product-selection-price-text del bdi{color:#88898c;margin-right:7px;font-size:24px}
.productLandingPageContainer span.product-selection-price-text ins{text-decoration:none}
.productLandingPageContainer span.product-selection-price-text ins bdi{color:#565759;font-size:26px;margin-left:0px;font-weight:400}
.productLandingPageContainer .avg-price{font-size:13px;letter-spacing:.08em}
.productLandingPageContainer span.product-selection-price-text ins span.woocommerce-Price-currencySymbol{color:#565759}
.productLandingPageContainer .plus-minusWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap:12px;
  margin-bottom: 15px;
  margin-top: 15px;
}

.productLandingPageContainer .plus-minusWrapper input
,.productLandingPageContainer .plus-minusWrapper button
{ margin: 0; min-width: 50px; min-height: 40px;max-height: 40px; max-width: 50px;       border: 1px solid rgb(197 198 201);
display:flex; align-items: center; justify-content: center;
background-color: #fff;
text-align: center;
padding: 0;
}
html body #product-list.teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap .packageQuantityBox .plus-minusWrapper button
{
  min-width: 30px;
  min-height: 40px;
  max-height: 40px;
  max-width: 30px;
  color: #1fb6e4;
  font-size: 20px;
  font-weight: bold;
  font-family: "Montserrat";
  cursor: pointer;    background: #fff;    border: 1px solid rgb(197 198 201);
}
.packageQuantityBox{
  display: none;
}
.packageQuantityBox{
  background: #e8f8fc;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 15px;
  border-top: 1px solid #c5c6c9;
}
.openPackage-quantity .packageQuantityBox{ display: block;}


.featuredProductInner .rowProduct {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
}
.featuredProductInner .feturedProductDescription {
  max-width: 560px;

  text-align: center;
}
.featuredProductInner .product-selection-price-wrap button{
  margin-top:0;
}
.featuredProductInner  .featuredproductname {
  font-weight: 600;
  text-transform: uppercase;
  color: #555759;
  font-size: 26px;
}
.featuredProductInner  .featuredRow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 600;
  font-family: "Montserrat";    gap: 20px;
}
#product-list .featuredProductInner span.woocommerce-Price-currencySymbol {
  font-size: 50%;
}
.featuredProductInner   .discountPrice {
  color: #c6c9cd;
}
.featuredProductInner   .discountPrice del{
  text-decoration: none;
  position: relative;
}
.featuredProductInner   .discountPrice del:before {
  content: "";
  position: absolute;
  height: 2px;
  background: #f8a18a;
  top: 16px;
  margin-left: auto;
  margin-right: auto;
  left: -7px;
  right: 0;
  width: 118%;
}
.featuredProductInner  .featureShippingPrice {
  color: #f8a18a;
  font-size: 12px;
}
.productLandingPageContainer  .sepratorLine {
  height: 4px;
  width: 130px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.packageFooter .addToCartBottom  button{
  width:100%;
}
.productLandingPageContainer .medium-6 .selectPackageBox
,.productLandingPageContainer .medium-6 .packageQuantityBox
,.productLandingPageContainer .medium-12 .selectPackageBox
,.productLandingPageContainer .medium-12 .packageQuantityBox
,.productLandingPageContainer .medium-9 .selectPackageBox
,.productLandingPageContainer .medium-9 .packageQuantityBox
,.productLandingPageContainer .medium-8 .packageQuantityBox
,.productLandingPageContainer .medium-10 .packageQuantityBox
,.productLandingPageContainer .medium-10 .selectPackageBox
{
  max-width: 308px;
  right: 0;
  left: inherit;
  border-left: 1px solid #c5c6c9;
}
.productLandingPageContainer  .medium-12 .product-selection-description-parent-inner{
  position: relative;
}
.productLandingPageContainer .medium-12 .selectPackageBox
,.productLandingPageContainer .medium-12 .packageQuantityBox{
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #c5c6c9;
}
#product-list.productLandingPageContainer .medium-12 .product-selection-description b{
  font-weight: 600;
  text-transform: uppercase;
  color: #555759;
  font-size: 26px;
  line-height: 1.2;
}
#product-list.productLandingPageContainer  .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner{
  padding-top: 20px;
  padding-bottom: 20px;

}
#product-list.productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent

{

  text-align: center;
  width: 50%;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 100%;

}
.featuredproductDescription{
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}
  #product-list.productLandingPageContainer .no-bottom-margin .thb-dark-column.medium-12.landing-product{
      margin-bottom: 0px;
  }

  
  #product-list.productLandingPageContainer .product-selection-price-wrap{
      padding-top: 0px;
  }

  #product-list.productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product >.vc_column-inner .product-selection-box {
      max-width: 1300px;
  }

  .productLandingPageContainer .wpb_column:not(.medium-12) .starRatinGImage {
      display: none;
  }
  .productLandingPageContainer .wpb_column:not(.medium-12) .productDescriptionDiv.proTpDiv:before,#newsalePage #product-list.grid-changed .medium-12 .product-selection-description .productDescriptionDiv.proTpDiv:before{
    display:none;
  }
  #product-list.productLandingPageContainer .medium-12 .product-selection-price-text-top{
      justify-content: center;
      margin-top: 20px;
      margin-bottom: 25px;
  }

  #product-list.productLandingPageContainer  .medium-12 span.product-selection-price-text del{
      font-size: 28px;
      font-weight: 600;
      font-family: "Montserrat";

  }
  #product-list.productLandingPageContainer  .medium-12 span.product-selection-price-text del span bdi
  ,#product-list.productLandingPageContainer  .medium-12 span.product-selection-price-text del span
  ,#product-list.productLandingPageContainer  .medium-12 span.product-selection-price-text del
  ,#product-list.productLandingPageContainer  .medium-12 .product-selection-price-text-top .product-selection-price-text span.woocommerce-Price-amount.amount

  {
      font-size: 100%;
      color: #c6c9cd;
      font-weight: 600;
  }
  #product-list.productLandingPageContainer  .medium-12 span.woocommerce-Price-currencySymbol {
      font-size: 18px !important;
  }
  #product-list.productLandingPageContainer .medium-12 span.product-selection-price-text del:before{
      height: 2px;
      background: #d5a415;
  }
  .product-water-flosser #product-list.productLandingPageContainer .medium-12 span.product-selection-price-text del:before{
      top: 30px;
  }
  #product-list.productLandingPageContainer .medium-12  span.product-selection-price-text ins bdi{
      font-weight: 600;
  }
  #product-list.productLandingPageContainer .medium-12  span.product-selection-price-text .wasText{ display: none;}
  #product-list .medium-12 .product-selection-description .productDescriptionDiv{
      max-width: 90%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 11px;
  }
  #product-list.productLandingPageContainer .medium-12  .productDescriptionFull p:empty{
      display: none;
  }

  #product-list.productLandingPageContainer  .landing-product.medium-3 .product-selection-price-wrap button
  ,#product-list.productLandingPageContainer  .landing-product.medium-1\/5 .product-selection-price-wrap button
  ,#product-list.productLandingPageContainer  .landing-product.medium-2 .product-selection-price-wrap button

  {
      width: 100%;
      min-width: fit-content;

  }
  #product-list.productLandingPageContainer  .landing-product.medium-2 .product-selection-price-wrap button{
      font-size: 14px;
  }

  #product-list.productLandingPageContainer .custom-radio.form-group-radio-custom {
      position: relative;
  }
  #product-list.productLandingPageContainer .form-group-radio-custom [type="radio"]:checked, #product-list.productLandingPageContainer .form-group-radio-custom [type="radio"]:not(:checked) {
      position: absolute;
      left: 0;
      display: inline-block;
      width: 100%;
      height: 100%;
      left: 0;
      z-index: 999;
      opacity: 0;
  }

  #product-list.productLandingPageContainer  .landing-product.medium-2 .selectPackageBox .radioButtonInner{
      font-size: 12px;
  }
  .productLandingPageContainer .landing-product.medium-2 .form-group-radio-custom [type="radio"]:checked + label:before, .productLandingPageContainer .landing-product.medium-2 .form-group-radio-custom [type="radio"]:not(:checked) + label:before{
      left: -2px;
  }
  .productLandingPageContainer .landing-product.medium-2 .form-group-radio-custom [type="radio"]:checked + label:after, .productLandingPageContainer .landing-product.medium-2 .form-group-radio-custom [type="radio"]:not(:checked) + label:after{
      left: 4px;
  }

  .productLandingPageContainer .landing-product.medium-1\/5 .form-group-radio-custom [type="radio"]:checked + label:before, .productLandingPageContainer .landing-product.medium-1\/5 .form-group-radio-custom [type="radio"]:not(:checked) + label:before{
      left: -2px;
  }
  .productLandingPageContainer .landing-product.medium-1\/5 .form-group-radio-custom [type="radio"]:checked + label:after, .productLandingPageContainer .landing-product.medium-1\/5 .form-group-radio-custom [type="radio"]:not(:checked) + label:after{
      left: 4px;
  }
  .productLandingPageContainer  span.woocommerce-Price-amount.amount{
      font-size: 24px;
  }




 .productLandingPageContainer .small-desc{ display: none;}
 .productLandingPageContainer .medium-12 .small-desc{ display: inline-block;}
  .productLandingPageContainer .medium-12 .small-desc p:empty{
      display: none;
  }

  .productLandingPageContainer .medium-12 .small-desc h4,
  .productLandingPageContainer .medium-12 .small-desc h5
  {
      color: #1fb6e4;
      font-size: 16px;
      font-weight: 500;
      font-family: 'Montserrat';
      margin-bottom: 0;
      margin-top: 15px;
      text-transform: uppercase;
  }
  .productLandingPageContainer .medium-12 .small-desc h5{
      font-weight: 500;
      color: #565759;

  }
  #product-list.productLandingPageContainer .medium-12 .product-selection-description .productDescriptionDiv{
      margin-top: 0px;
      margin-bottom: 5px;
  }
  #product-list.productLandingPageContainer .medium-12 .product-selection-description b{
      font-size: 30px;
      line-height: 1;
      padding-right: 0;
  }
  .single-product #product-list.grid-changed .medium-12 .product-selection-description b {
    font-size:16px !important
  }
  #product-list.productLandingPageContainer .featuredproductNameSubtitle {
      font-weight: 500;
      font-size: 15px;
  }
  .productLandingPageContainer .sepratorLine{
      height: 6px;
  }
  #product-list.productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner{
      padding-top: 17px;
      padding-bottom: 0px;
  }

  #product-list.productLandingPageContainer .featuredproductDescription {
      color: #565759;
      font-size: 14px;
  }
  #product-list.productLandingPageContainer .featuredproductDescription strong {
      font-size: 18px;
      font-weight: 600;
  }
  #product-list.productLandingPageContainer .medium-12 .product-selection-description .productDescriptionDiv{
      max-width: 100%;
  }
  #product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue{
      font-size: 24px;
  }
  #product-list.productLandingPageContainer .medium-12 span.woocommerce-Price-currencySymbol
  ,#product-list.productLandingPageContainer .medium-12 span.woocommerce-Price-currencySymbol
  {
      font-weight: normal !important;
  }
  #product-list.productLandingPageContainer .medium-12 .product-selection-price-text-top.noflexDiv {
      flex-direction: column;
  }
  #product-list.productLandingPageContainer  .featureShippingPrice {
      color: #f8a18a;
      font-size: 12px;
      margin-top: -8px;
      display: none;
  }
  #product-list.productLandingPageContainer .medium-12  .featureShippingPrice{
      display: block;
  }
  #product-list.productLandingPageContainer .medium-12 .featureTag{
      top: -12px;
  }
  #product-list.productLandingPageContainer   .medium-12 .normalyAmount{ display: block;}
  #product-list.productLandingPageContainer   .medium-12 .product-selection-price-wrap button{
      margin-top: 0;
  }
  #product-list.productLandingPageContainer   .landing-product:not(.medium-12) .product-selection-description b{
      font-weight: 700;
  }
  #product-list.productLandingPageContainer   .medium-3 .product-selection-image-wrap img{
      max-height: 230px;
  }
  #product-list.productLandingPageContainer  .medium-6 .product-selection-image-wrap img{
      max-height: 270px; 
  }
  #product-list.productLandingPageContainer strong.thin-font-weight {
      font-size: 14px;
  }
  #product-list.productLandingPageContainer .product-selection-image-wrap img{
      max-width: 100%;
     
  }
  #product-list.productLandingPageContainer .medium-4 .product-selection-image-wrap img {
    max-height:200px;
  }
  #product-list.productLandingPageContainer  .featureTag{
      max-width: 260px;
  }
  #product-list.productLandingPageContainer  .featureTag{    padding: 5px;}
  #product-list.productLandingPageContainer  .spec-heding {
      margin-bottom: 15px;
  }


  #product-list.productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product >.vc_column-inner{
      background-color: #e8f8fc !important;
  }
  #product-list.productLandingPageContainer  .sale-page.rdhtabs .headingSectionTop{ display: none;}
  #product-list.productLandingPageContainer  .user-profile-hero {
      padding-bottom: 50px;
  }
  .elementor-kit-754129 .user-profile-hero {
      padding-bottom: 65px;
  }
  .teethWhieteingSystemWrapper.productLandingPageContainer .viewPublickProfileAnchor{
      padding-left: 0px;
      border-left: 0px solid #13748d;
  }
  #product-list.productLandingPageContainer .medium-12 .product-selection-price-text-top{
      margin-top: 30px;
     
  }
  #product-list.productLandingPageContainer .medium-12 span.product-selection-price-text del span bdi,#product-list span.product-selection-price-text ins {
    font-size:100% !important;
  }

  .section-headings .rowDiv{ display: flex; flex-wrap: wrap; justify-content:space-between}

  .section-headings .rowDiv .col-right a.btn {
      font-size: 14px;
      letter-spacing: 0;
      border-radius: 4px !important;
      font-weight: 600;
      padding: 5px 10px;
      color: #13748d;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;        
  }
  .section-headings .rowDiv .col-right a.btn i {
      font-size: 16px;
  }






  #product-list.productLandingPageContainer .medium-3 .productDescriptionDiv {
    text-align: center;
    justify-content: center;
}
#product-list.productLandingPageContainer .medium-3  .product-selection-price-text-top{
    justify-content: center;
    text-align: center;
}
#product-list.productLandingPageContainer   .medium-3 .product-selection-description b{
    padding-right: 0px;
}
#product-list.productLandingPageContainer  span span.product-selection-price-text del bdi,     #product-list.productLandingPageContainer  span span.product-selection-price-text .wasText{
    font-size: 12px;
}
#product-list.productLandingPageContainer  span.woocommerce-Price-currencySymbol {
    font-size: 70% !important;
}
#product-list.productLandingPageContainer .medium-12 span.woocommerce-Price-currencySymbol{
    font-size: 14px !important;
}
#product-list.productLandingPageContainer  .product-selection-box-description.proDesRdh p{
    margin-bottom: 0;
    font-size: 14px;
}
#product-list.productLandingPageContainer  .product-selection-box-description.proDesRdh {
    font-size: 14px;
    font-family: 'Open Sans',sans-serif;
    text-align: left;
    max-width: 328px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;    

}
#product-list.productLandingPageContainer .product-selection-box-description.proDesRdh .product-selection-description{
    text-align: left;    
}
#product-list.productLandingPageContainer .product-selection-box-description.proDesRdh b {
    font-family: 'Open Sans',sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding-left: 14px;
}
#product-list.productLandingPageContainer  .product-selection-box-description.proDesRdh img {
    margin-left: 8px;
    margin-right: 10px;
    position: relative;
    top: -2px;
}

#product-list.productLandingPageContainer  .proDesRdh .product-selection-description span.starsRatingCountDbr {
    font-size: 80%;
    position: relative;
    top: -1px;
}
#product-list.productLandingPageContainer .product-selection-box-description.proDesRdh .info-des-ja {
    min-height: 0px;
    margin-top: 0px;
    min-height: 40px;
}
#product-list.productLandingPageContainer .custom-radio.form-group-radio-custom {
  position: relative;
}
#product-list.productLandingPageContainer .form-group-radio-custom [type="radio"]:checked, #product-list.productLandingPageContainer .form-group-radio-custom [type="radio"]:not(:checked) {
  position: absolute;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 999;
  opacity: 0;
}
#wrapper .form-group-radio-custom label {
  width: 100%;
  border: 1px solid #c3c3c3;
  padding: 10px 15px;
  text-align: center;
  line-height: 1;
  margin: 0;
}
#wrapper .productLandingPageContainer .form-group-radio-custom label {
  border: 0;max-width: 100%;
  padding: 4px 0px;
  display: flex;cursor: pointer;
  align-items: center;
  justify-content: end;color: #565759;    font-size: 14px;
}

.productLandingPageContainer .form-group-radio-custom [type="radio"]:checked + label:before, .productLandingPageContainer .form-group-radio-custom [type="radio"]:not(:checked) + label:before {
  width: 24px;
  height: 24px;
  left: 10px;
  top: 50%;
  margin-top: -12px;
  background: transparent;
  border: 1px solid #c6c7ca;
  content: '';
  position: absolute;
  border-radius: 100%;    
}
.productLandingPageContainer .radioButtonInner {
  background: #fff;
  padding: 10px;
  width: 82%;
  border: 1px solid #c5c6c9;
  text-align: left;
  line-height: 1.1;
}
.form-group-radio-custom   [type="radio"]:checked,
  .form-group-radio-custom [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
.form-group-radio-custom [type="radio"]:checked + label,
.form-group-radio-custom [type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
}
.form-group-radio-custom [type="radio"]:checked + label:before,
.form-group-radio-custom [type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 14px;
    top: 16px;
    width: 18px;
    height: 18px;
    border: 2px solid #ddd;
    border-radius: 100%;
    background: #fff;
}
.form-group-radio-custom [type="radio"]:checked + label:before{
    border-color:#000;
}
.form-group-radio-custom [type="radio"]:checked + label:after,
.form-group-radio-custom [type="radio"]:not(:checked) + label:after {
    content: '';
    width: 8px;
    height: 8px;
    background: #68c8c7;
    position: absolute;
    top: 21px;
    left: 19px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    width: 12px;
    height: 12px;
    top: 50%;
    left: 16px;
    margin-top: -6px;
    background: #1fb6e4;
}
.form-group-radio-custom [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
.form-group-radio-custom [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}



    @media only screen and (min-width: 40em) {
      .row{padding:0 35px}
      .column,.columns{padding-right:.9375rem;padding-left:.9375rem}
      .medium-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}
      .medium-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}
      .medium-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}
    }
    @media print,screen and (min-width: 64em) {
     .column,.columns{padding-right:1.25rem;padding-left:1.25rem}
    }
    @media (min-width: 1200px) {
     .row{width:1170px}
    }
    @media (min-width: 1500px) {
     .row{width:1420px}
    }

    @media screen and (min-width: 1025px)  and  (max-width: 1500px) {
      .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button, .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite, .teethWhieteingSystemWrapper.productLandingPageContainer .btn{
        font-size: 14px;
    }

    #product-list.productLandingPageContainer .landing-product.medium-3 .product-selection-price-wrap button, #product-list.productLandingPageContainer .landing-product.medium-1\/5 .product-selection-price-wrap button, #product-list.productLandingPageContainer .landing-product.medium-2 .product-selection-price-wrap button{
        font-size: 12px;
    }
    #product-list.productLandingPageContainer .landing-product:not(.medium-12) .featureTag {
        margin-right: 0px;
        font-size: 12px;
    }
    #product-list.productLandingPageContainer  .featureTag{ min-width: auto;}
    .productLandingPageContainer .packageheader{
        font-size: 12px;
    }
    .productLandingPageContainer .medium-1\/5 .radioButtonInner{
        font-size: 12px;
    }

    }
    @media screen and (min-width: 768px) and (max-width: 959px) {
      #newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue {
          
          min-width: 130px !important;
          font-size:13px !important;
  }
}
    @media (min-width: 1200px){
      #product-list.productLandingPageContainer .childrenBox-2 .medium-2 .product-selection-image-wrap {
          min-height: 206px;
      }

      #product-list.productLandingPageContainer .childrenBox-2 .medium-8  .product-selection-image-wrap{
          min-height: 302px;
          max-height: 302px;
          overflow: hidden;
      }
  }
  #product-list.productLandingPageContainer .medium-4 .product-selection-price-text-top {
    margin-top: 5px;
    margin-bottom: 10px;
    justify-content: center;
  }
    .product-selection-price-wrap.green{
    margin-top:0px;
    }
    #product-list.grid-changed .product-selection-price-text-top.noflexDiv {
    margin-top:5px !important;
    margin-bottom:10px !important;
    }
  @media screen and (min-width: 768px) {
    #product-list.productLandingPageContainer .medium-12 .product-selection-image-wrap img {
        max-width: 580px;
    }
    #product-list .landing-product:not(.medium-12) .productDescriptionDiv, #product-list .landing-product:not(.medium-12) .productDescriptionDiv {
      align-items: self-start;
        min-height: initial;
        justify-content: center;
    }
    #product-list .product-selection-price-text-top {
      height: 22px;
      display: flex;
      align-items: center;
  }

    #product-list.productLandingPageContainer  .medium-8 .product-selection-description-parent-inner
    ,#product-list.productLandingPageContainer  .medium-9 .product-selection-description-parent-inner
    ,#product-list.productLandingPageContainer  .medium-10 .product-selection-description-parent-inner
    {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    #product-list.productLandingPageContainer .landing-product.medium-9 .product-selection-description-parent {
        min-height: 130px;
        max-height: 130px;
    }
    #product-list.productLandingPageContainer  .medium-4.landing-product .product-selection-description-parent{
        min-height: 160px;
        max-height: 160px;
    }


    #product-list.productLandingPageContainer  .medium-9 .product-selection-image-wrap{
        min-height: 255px;
    }
    #product-list.productLandingPageContainer  .medium-9 .product-selection-description{
        margin-bottom: 0;
    }
    #product-list.productLandingPageContainer  .medium-8  .product-selection-image-wrap {
        min-height: 302px;
    }
    #product-list.productLandingPageContainer .medium-10.landing-product .product-selection-image-wrap{
        max-height: 241px;
        min-height: 24px;
        overflow: hidden;
    }

    #product-list.productLandingPageContainer  .childrenBox-3 .medium-8 .product-selection-image-wrap{
        min-height: 238px;
        max-height: 238px;
    }
    #product-list.productLandingPageContainer  .childrenBox-3 .medium-8 .product-selection-image-wrap img{
        max-width: 88%;
    }

    #product-list.productLandingPageContainer .childrenBox-4  .medium-6 .product-selection-image-wrap{
        max-height: 237px;
        min-height: 237px;
    }


  
   .active-recomendation-tab #product-list .medium-6.landing-product .product-selection-description-parent{
      min-height: 130px;
      max-height: 130px;
    }
    .active-recomendation-tab #product-list:not(.grid-changed) .landing-product.medium-3 .product-selection-description-parent{
      min-height: 170px;
      max-height: 170px;
    }
  
    #product-list .medium-6.landing-product  .forOnlyLayoutSixDisplay {
        display: inline-block;
        padding-left: 3px;
        margin-bottom: 0;
    }


}

#product-list .medium-6.landing-product .product-selection-description-parent-inner   .normalyAmount.italic:not(.forOnlyLayoutSixDisplay)
    {
        display: none !important;
      }

      #product-list .landing-product:not(.medium-6)  .forOnlyLayoutSixDisplay
      {
        display: none !important;
      }



  body{overflow-x:hidden}
  #product-list.teethWhieteingSystemWrapper:not(.grid-changed) .medium-12.thb-dark-column.small-12.landing-product.child-6>.vc_column-inner{background-color:#fff!important}
  #product-list.productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product>.vc_column-inner .product-selection-box{max-width:1330px}
  #newsalePage .newsalePageBanner{max-height:620px;overflow:hidden;background:#450876;background:linear-gradient(190deg,rgba(69,8,118,1) 0%,rgba(79,23,125,1) 55%,rgba(99,53,137,1) 85%)}
  .gehanFormSection{background-image:url(/wp-content/themes/revolution-child/assets/images/geha-page/geha-banner-bg.jpg);background-color:#683c8b;background-repeat:repeat-x}
  #newsalePage .rowMbt{display:flex;flex-wrap:wrap}
  .mt-100{padding-top:100px}
  #newsalePage .geha-banner-text-section-parent{width:40%}
  #newsalePage .graphicImagePeople{width:60%;text-align:right}
  #newsalePage .text-white{color:#fff}
  #newsalePage .geha-banner-text-section{text-align:center}
  #newsalePage .geha-banner-text-section p{margin-bottom:0;padding-bottom:10px}
  #newsalePage .geha-banner-text-section h2{margin-top:40px;font-size:30px;margin-bottom:50px;line-height:1.1}
  #newsalePage .gehaLoginCustomer{margin-top:25px}
  #newsalePage .seeDiscountBtn button{background:#eb6754;border-color:#eb6754;letter-spacing:0;font-size:20px}
  #newsalePage .seeDiscountBtn button:hover{background-color:#595858;border-color:#595858}
  #newsalePage .gehaLoginCustomer h3{color:#fff;font-size:20px;font-weight:300}
  #newsalePage .gehaLoginCustomer h3 a:hover{color:#fff}
  #newsalePage .gehaLoginCustomer h3 a{color:#dec5f5}
  #newsalePage .splitTwo{width:calc(100%/2)}
  #newsalePage .productGripgSectionWrapper{background:#17a2b8;padding:20px}
  #newsalePage .productGripgSection{border:1px solid #fff;padding:30px}
  #newsalePage .productGripgSection li{background-image:url(https://smilebrilliant.com/wp-content/themes/revolution-child/assets/images/adults-probiotics-blue-tick.png);background-repeat:no-repeat;background-position:left;font-size:26px;list-style:none;padding-left:74px;line-height:44px;margin-top:0;background-size:45px;margin-bottom:10px;font-weight:300}
  #newsalePage .productGripgSection h3{font-size:67px;font-weight:bolder;letter-spacing:1px;line-height:52px;margin-bottom:50px}
  #newsalePage .productGripgSection ul{margin-bottom:60px}
  #newsalePage .productGripgSectionProduct{background-position:center;background:url(https://www.smilebrilliant.com/wp-content/themes/revolution-child/assets/images/geha-page/geha-product-image.jpg)}
  #newsalePage section.sectionProductDisplay{margin-top:10px}
  #newsalePage .logoesSecHfa{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
  #newsalePage .logoesSecHfa img{max-width:118px}
  #newsalePage section.sectionHsaFsa{background:#555759;padding:20px 0}
  #newsalePage .colhFsaSec{display:flex;flex-wrap:wrap;align-items:center}
  #newsalePage .colhFsaSec h4{font-size:30px}
  #newsalePage section.ourSuportedCustomers.product-logo-wrapper{background:#440876;padding-top:38px;padding-bottom:38px;margin-top:0}
  #newsalePage .extra_logo_before-top .boxSecBox{position:relative}
  #newsalePage .extra_logo_before-top .col-md-3,#newsalePage .extra_logo_before .col-md-3{-webkit-box-flex:0;-ms-flex:initial;flex:initial;max-width:max-content;padding-left:2.5%;padding-right:2.5%}
  #newsalePage .extra_logo_before-top .boxSecBox.box-with-extra-logo:before{content:"";background-image:url(/wp-content/themes/revolution-child/assets/images/geha-page/logoes-tiktok.png);width:114px;height:149px;position:absolute;top:0;left:0;background-repeat:no-repeat}
  #newsalePage .box-with-extra-logo-right:before{content:"";background-image:url(/wp-content/themes/revolution-child/assets/images/geha-page/logoes-small-circle.png);width:50px;height:49px;position:absolute;top:0;right:-100px;background-repeat:no-repeat}
  #newsalePage .logo-strip-two .col-md-3{padding-left:4%;padding-right:4%}
  #newsalePage .justify-conten{justify-content:center}
  #newsalePage .extra_logo_before-top .spacing-left-emphty,#newsalePage .smilePageIconSection-parent-div .extra_logo_before .spacing-left-emphty{position:relative;padding-left:158px}
  #newsalePage .rowMbt.extra_logo_before-top.logo-strip-one.justify-conten{margin-bottom:35px}
  #newsalePage .second-row .boxSecBox.spacing-left-emphty.col-md-3.col-4{padding-left:30px}
  #newsalePage .fullWidth{width:100%}
  #newsalePage .year-wrannanty-container .itsSimpleHeading{color:#522773;text-align:center;margin-bottom:0;font-weight:400;font-size:30px;margin-bottom:20px}
  #newsalePage section.warrantysectionPage{margin-bottom:70px}
  #newsalePage section.gehanFormSection{padding-top:50px;padding-bottom:40px}
  #newsalePage .gehanFormSection input[type="text"],#newsalePage .gehanFormSection input[type="email"]{margin-bottom:10px;min-height:70px}
  #newsalePage .member-ids input[type="text"]{background:#efdefc}
  #newsalePage #product-list.productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product>.vc_column-inner .product-selection-box,#newsalePage .profile-container{width:100%}
  #newsalePage section.sectionHsaFsa{margin-top:10px;margin-bottom:10px}
  #newsalePage section.ourCustomers h2{font-size:60px;font-weight:700;margin-top:0;margin-bottom:36px;padding-top:40px}
  #newsalePage section.ourCustomers h3{font-size:26px;font-weight:400;margin-top:0}
  #newsalePage .customer-before-after-image{margin-top:60px;margin-bottom:65px}
  #newsalePage .warrabty-text-container p{font-weight:400}
  #newsalePage .col-md-12.text-center.form-notes{margin-top:20px}
  #newsalePage .w-100{width:100%}
  #newsalePage .row.after-success{width:100%}
  #newsalePage .colhFsaSec p{font-size:14px}
  #newsalePage .container{margin-left:auto;margin-right:auto}
  #newsalePage section.shopLanderPageHader .pageheaderTop{background-image:url(/wp-content/themes/revolution-child/assets/images/sales/2022/cyber-monday-sale/BannerBackground.png);background-position:center;background-repeat:no-repeat;background-size:cover}
  #newsalePage .shopLanderPageHader .whitening-teeth-girl-with-smile{right:78px;top:-16px;max-width:436px}
  #newsalePage .alin-items-center{align-items:center}
  #newsalePage #product-list.productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product>.vc_column-inner{background-color:#f6f4ee !important}
  #newsalePage #product-list.teethWhieteingSystemWrapper:not(.grid-changed) .m0edium-12.thb-dark-column.small-12.landing-product.child-5>.vc_column-inner{background-color:#fff!important}
  #newsalePage .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button,.teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite,.teethWhieteingSystemWrapper.productLandingPageContainer .btn{background-color:#d4545a;border-color:#d4545a}
  #newsalePage .productLandingPageContainer .medium-12 .sma ll-desc h4,.productLandingPageContainer .medium-12 .small-desc h5{color:#65657f}
  #newsalePage #product-list:not(.grid-changed) .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent{justify-content:center;max-width:560px}
  #newsalePage #product-list.productLandingPageContainer .medium-12 .product-selection-description b{color: #565759;
    font-size: 30px;
    font-weight: 600;}
  #newsalePage .teethWhieteingSystemWrapper.productLandingPageContainer .landing-product:not(.medium-12) .product-selection-description-parent,#newsalePage .packageQuantityBox,.selectPackageBox{background: #f6f4ee;
    border-radius: 0px 0 10px 10px;}
  #newsalePage .graphicImagePeople img{width:100%;max-width:776px}
  #newsalePage #product-list.productLandingPageContainer .medium-12.child-9 .product-selection-description b{font-size:16px;font-weight:400;color:#565759;font-weight:400}
  #newsalePage #product-list.teethWhieteingSystemWrapper .medium-12.child-9 .productDescriptionDiv b{font-weight:700;line-height:inherit;color:#565759}
  #newsalePage #product-list.teethWhieteingSystemWrapper:not(.grid-changed) .medium-12.child-9 .productDescriptionDiv b{font-size:22px}
  #newsalePage #product-list.productLandingPageContainer .medium-12.child-9 .product-selection-description-text{padding-top:0}
  #newsalePage #product-list.productLandingPageContainer .medium-12.child-9 .product-selection-description-text p{margin:0}
  #newsalePage #product-list.productLandingPageContainer .medium-12.child-9 .days-textFortyFive{margin-top:35px}
  #newsalePage #product-list.productLandingPageContainer .medium-12.child-9 .text-blue{color:#3c98cc!important}
  .product-selection-description-parent{position:relative}
  .ultrasonic-text-contain-by-js .backOrderList{position:absolute;top:-2px;right:0;max-width:366px}
  #product-list.grid-changed .ultrasonic-text-contain-by-js .backOrderList{line-height:14px;top:-7px}
  #newsalePage #product-list.productLandingPageContainer:not(.grid-changed) .medium-12 .ultrasonic-text-contain-by-js .backOrderList{position:static}
  .modal{position:fixed;left:0;top:0;width:100%;height:100%;background-color:#000;opacity:0;visibility:hidden;transform:scale(1.1);transition:visibility 0 linear 0.25s,opacity .25s 0s,transform .25s;z-index:999}
  .modal-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:1rem;width:30rem;border-radius:.5rem;border:10px solid #440776}
  .close-button{width:30px;cursor:pointer;border-radius:1rem;background-color:lightgray;position:absolute;right:-20px;top:-20px;background:#fff;color:#453651;border:2px solid #453651;font-size:24px;font-weight:700;height:30px;display:flex;align-items:center;justify-content:center}
  .close-button:hover{background-color:#a9a9a9}
  .show-modal{opacity:1;visibility:visible;transform:scale(1.0);transition:visibility 0 linear 0s,opacity .25s 0s,transform .25s}
  h1.gehaTextmember{margin-bottom:0}
  p.memeberGranted{color:#440776;margin-bottom:10px}
  h2.youreInText{color:#555759;font-weight:bolder;font-size:72px;margin-bottom:10px}
  h3.pleaseRed{color:#eb6754;font-weight:600;font-size:30px}
  .descriptionBody{font-size:16px;line-height:1.2;max-width:84%;margin-left:auto;margin-right:auto}
  .modal .seeDiscountBtn .btn{background:#440776;color:#fff;letter-spacing:0;font-size:20px}
  #newsalePage .container-form{max-width:820px}
  #newsalePage .after-success #geha-coupon-code-box{background-color:#fff}
  #newsalePage .after-success h1{line-height:42px}
  #newsalePage #product-list.grid-changed .medium-12 .product-selection-image-wrap img{max-width:100%;max-height: 280px;}
  #newsalePage #product-list.grid-changed .medium-12 .product-selection-description b{font-weight:700;font-size:16px;text-transform:uppercase;padding-right:15px;color:#565759}
  #newsalePage #product-list.grid-changed .medium-12 .product-selection-description .productDescriptionDiv{max-height:initial;overflow:hidden;min-height:initial;display:flex;align-items:flex-end}
  #newsalePage #product-list.grid-changed .medium-12 .normalyAmount{display:none}
  #newsalePage #product-list.grid-changed .product-selection-price-text-top{height:30px;display:flex;align-items:center;flex-direction:initial;justify-content:flex-start}
  #newsalePage #product-list.grid-changed .starRatinGImage{display:none}
  #newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner{padding:0}
  #newsalePage #product-list.grid-changed .medium-12 .small-desc,#newsalePage #product-list.grid-changed .medium-12 .featureShippingPrice{display:none}
  #newsalePage #product-list.grid-changed .medium-12 .product-selection-price-text-top{margin:0}
  #newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product>.vc_column-inner{background-color:#fff!important}
  #newsalePage #product-list.grid-changed .product-selection-price-text{font-size:18px}
  #newsalePage #product-list.grid-changed span.product-selection-price-text del:before{left:-8px}
  #newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue{font-size:18px}
  #newsalePage #product-list.grid-changed .landing-product div[data-tagging="Featured!"] .featureTag{margin-right:22px;top:0}
  #newsalePage #product-list.grid-changed #product-list .product-selection-description{margin-bottom:0}
  #newsalePage #product-list.grid-changed .medium-12 .selectPackageBox,#newsalePage #product-list.grid-changed .medium-12 .packageQuantityBox{margin-right:0}
  #newsalePage #product-list.grid-changed .thb-dark-column.medium-12.landing-product{margin-bottom:0}
  section.shopLanderPageHader{margin-top:0}
  div#product-list.grid-changed{margin-top:20px}
  #newsalePage #product-list.grid-changed .active-recomendation-tab #product-list .product-selection-description{margin-bottom:0}
  #newsalePage #product-list.grid-changed .medium-3 .product-selection-description-parent-inner>.normalyAmount{display:none}
  #newsalePage #product-list.grid-changed .medium-3 .productDescriptionDiv{text-align:left}
  .product-selection-box {
    border-radius: 8px;
}

  #newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent{max-width:inherit;width:auto}
  #product-list .landing-product:not(.medium-12) .featureTag{background:#f8a18a}
  #newsalePage #product-list.grid-changed .medium-12 .featureTag,#newsalePage #product-list.grid-changed .landing-product .featureTag{top:0;margin-right:20px}
  #newsalePage .rowMbtInner{margin-left:auto;margin-right:auto}
  #newsalePage .row.after-success h1,#newsalePage .row.after-success p{display:none!important}
  #newsalePage section.sectionHsaFsa,#newsalePage .ourSuportedCustomers{max-width:1420px;margin-left:auto;margin-right:auto}
  #newsalePage .medium-3 .product-selection-price-text-top.noflexDiv{line-height:1}
  #newsalePage #product-list:not(.grid-changed) .medium-6.landing-product .productDescriptionDiv{align-items:flex-start}
  #newsalePage .productLandingPageContainer .medium-3 span.product-selection-price-text del bdi,#newsalePage .productLandingPageContainer .medium-6 span.product-selection-price-text del bdi{margin-right:0}
  #newsalePage .productLandingPageContainer .medium-12.landing-product span.product-selection-price-text.hoo,#newsalePage .productLandingPageContainer .medium-12.landing-product span.product-selection-price-text.heee{display:flex;align-items:center;justify-content:center;gap:10px}
  .grid-changed #newsalePage .medium-3 .product-selection-price-text-top.noflexDiv{text-align:left;padding-top:4px}
  .grid-changed #newsalePage .medium-12 span.product-selection-price-text.heee{display:flex;align-items:center}
  #newsalePage #product-list.grid-changed .medium-12 .product-selection-price-text{font-size:24px;font-weight:500}
  #newsalePage #product-list.grid-changed .medium-12 .product-selection-price-text span.woocommerce-Price-amount.amount,#newsalePage #product-list.grid-changed .medium-12 span.product-selection-price-text ins bdi{font-weight:500}

  #newsalePage #product-list.grid-changed .product-selection-price-text-top{padding-top:5px}
  #product-list.productLandingPageContainer .medium-12 span.product-selection-price-text del span bdi,#product-list.productLandingPageContainer .medium-12 span.product-selection-price-text del span,#product-list.productLandingPageContainer .medium-12 span.product-selection-price-text del,#product-list.productLandingPageContainer .medium-12 .product-selection-price-text-top .product-selection-price-text span.woocommerce-Price-amount.amount{font-weight:500}
  .hidden{display:none!important}
  section.shopLanderPageHader .pageheaderTop .row{align-items:center;flex-wrap:initial;justify-content:center}
  .banner-img.banner-text-center{position:relative}
  section.shopLanderPageHader .pageheaderBotm{position:relative;z-index:12;margin-bottom:3rem}
  #product-list .featureTag{font-size:14px}
  .back-order p{margin:0}
  .back-order{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem;color:#856404;background-color:#fff3cd;border-color:#ffeeba;display:none}
  #newsalePage #product-list .columns:not(.medium-12) span.product-selection-price-text .wasText{display:none}
  #newsalePage #product-list .columns:not(.medium-12) span.product-selection-price-text del bdi{color:#c6c9cd;font-size:20px}
  #newsalePage #product-list .columns:not(.medium-12) span.product-selection-price-text del:before{left:-1px;height:2px;background:#d5a415}
  @media (min-width: 768px) {
  .banner-img.banner-image-retainer-cleaner img{position:relative;top:37px}
  .banner-img.banner-image-flosser img{position:relative;top:69px}
  section.shopLanderPageHader .pageheaderTop h1,section.shopLanderPageHader .pageheaderTop h1 span{font-size:55px}
  #newsalePage #product-list.grid-changed .openPackage-quantity .packageQuantityBox,#newsalePage #product-list.grid-changed .openPackage .selectPackageBox{max-width:308px;right:0;left:inherit;border-left:1px solid #c5c6c9;margin-right:0}
  #newsalePage section.ourCustomers .container{background:#eaeff3;padding-bottom:65px}


  .active-recomendation-tab  #product-list   .product-selection-description{
    margin-bottom: 20px;
}
.active-recomendation-tab  #product-list .medium-3 .product-selection-description-parent-inner > .normalyAmount {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 57px;
}
  
    #product-list.productLandingPageContainer .medium-4 .product-selection-image-wrap img {
    max-height: 200px;
}
.active-recomendation-tab  #product-list .medium-6 .productLandingPageContainer span.product-selection-price-text ins{
    display: flex;
    align-items: center;
    line-height: 1;
}
.product-selection-price-text ins{
  margin-left:0px !important
}
.active-recomendation-tab  #product-list .medium-6 .product-selection-price-text-top{
    line-height: 24px;
    align-items: end;
}




  }
  #newsalePage .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button, .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite, .teethWhieteingSystemWrapper.productLandingPageContainer .btn {
    background-color: #2d2e2f !important; 
    border-radius: 10px !important;
      text-transform: capitalize;
      border-color: transparent !important;
  }
        #product-list.grid-changed .medium-4 .product-selection-image-wrap img {
    max-height: 250px;
}
  @media (min-width: 1024px) {
  .vc_wp_text.wpb_content_element.warrabty-text-container{max-width:82%}
  #newsalePage .gehanFormSection .seeDiscountBtn #send-my-discount{min-width:400px}
  #newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent{max-width:inherit;width:auto;min-height:95px;max-height:95px}
  #newsalePage #product-list.grid-changed .landing-product.medium-6 .product-selection-description-parent,#newsalePage #product-list.grid-changed .landing-product.medium-3 .product-selection-description-parent{min-height:130px;max-height:130px}
  section.shopLanderPageHader .pageheaderBotm select{padding:0 30px 0 10px;min-width:186px;font-family:'Open Sans';color:#343434}
  }
  @media (max-width: 1500px) {
  #newsalePage .productGripgSection h3{font-size:52px}
  #newsalePage .productGripgSection li{font-size:20px;padding-left:59px}
  section.shopLanderPageHader .pageheaderTop h1,section.shopLanderPageHader .pageheaderTop h1 span{font-size:46px}
  section.shopLanderPageHader .pageheaderTop p{font-size:16.8px}
  }
  @media (max-width: 1300px) {
  #newsalePage .productGripgSection h3{font-size:42px}
  #newsalePage .productGripgSection li{font-size:16px}
  #newsalePage section.ourCustomers h2{font-size:48px}
  #newsalePage .rowMbt.extra_logo_before-top.logo-strip-one.justify-conten{margin-bottom:60px}
  #newsalePage .mt-100{padding-top:56px}
  section.shopLanderPageHader .pageheaderTop h1,section.shopLanderPageHader .pageheaderTop h1 span{font-size:3.2vw}
  section.shopLanderPageHader .pageheaderTop p{font-size:1.4vw}


  
  }
  @media screen and (min-width: 1025px) and (max-width: 1500px)  {
    #newsalePage .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button, .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite, .teethWhieteingSystemWrapper.productLandingPageContainer .btn{
      font-size: 14px !important;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1300px) {
    #product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue, #newsalePage .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button, .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite, .teethWhieteingSystemWrapper.productLandingPageContainer .btn, #newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue {
        max-width: 170px ;
        min-width: 170px;
    }
}
  @media (max-width: 767px) {
    #product-list.productLandingPageContainer:not(.grid-change) .thb-dark-column.medium-4.landing-product {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
  }
    .productDescriptionDiv.proTpDiv {
      min-height: 48px;
  }
  #product-list:not(.grid-changed) .landing-product.medium-4 .product-selection-description-parent {
    min-height: 175px;
    max-height: 175px;
}
.skincare_product #newsalePage #product-list.grid-changed .medium-12 .product-selection-description b {
  font-size:16px !important;
 }
}
 
 
  //   #product-list.productLandingPageContainer:not(.grid-change) .thb-dark-column.medium-4.landing-product {
  //     -webkit-box-flex: 0;
  //     -ms-flex: 0 0 50%;
  //     flex: 0 0 50%;
  //     max-width: 50%;
  // }

}
  @media (max-width: 1199px) {
    #product-list:not(.grid-changed) .landing-product.medium-4 .product-selection-description-parent {
        min-height: 175px;
        max-height: 175px;
    }
}
  #newsalePage .geha-banner-text-section-parent{width:100%}
  #newsalePage h1.gehaLogoLarge img{max-width:200px}
  section.shopLanderPageHader .pageheaderTop{margin-top:30px}
  #newsalePage .mt-100{padding-top:25px}
  #newsalePage .geha-banner-text-section h2{margin-top:20px;font-size:26px;margin-bottom:35px;line-height:1.1}
  #newsalePage .graphicImagePeople{width:100%;text-align:center}
  #newsalePage .splitTwo{width:calc(100%/1)}
  #newsalePage .productGripgSection h3{font-size:34px;line-height:33px;margin-bottom:20px}
  #newsalePage .productGripgSection li{padding-left:37px;background-size:30px;line-height:28px;text-align:left}
  #newsalePage .productGripgSection{padding:20px}
  #newsalePage .productGripgSection ul{margin-bottom:30px}
  #newsalePage .seeDiscountBtn button{font-size:18px}
  #newsalePage .colhFsaSec{justify-content:center}
  #newsalePage section.ourCustomers h2{font-size:32px;line-height:1;margin-top:30px;margin-top:0;margin-bottom:20px;padding-top:40px}
  #newsalePage section.ourCustomers h3{font-size:18px;line-height:1.4}
  #newsalePage section.ourCustomers{padding:0 15px}
  #newsalePage section.ourCustomers h3 br{display:none}
  #newsalePage .customer-before-after-image{margin-top:30px;margin-bottom:38px}
  #newsalePage section.gehanFormSection{padding:30px 10px 25px 15px}
  .header-spacer{height:60px!important}
  #newsalePage .productGripgSectionWrapper{padding:0}
  #newsalePage .logoesSecHfa img{max-width:88px}
  #newsalePage .colhFsaSec{margin-bottom:6px}
  #newsalePage .form-steps h5{margin-bottom:28px;font-size:18px}
  #newsalePage section.ourSuportedCustomers.product-logo-wrapper{padding-top:20px;padding-bottom:16px;margin-top:0}
  #newsalePage .logoesformobileOnly .col-4{max-width:33.33%;-webkit-box-flex:0;-ms-flex:0 0 33.33%;flex:0 0 33.33%;max-width:33.33%;margin-bottom:11px}
  #newsalePage .gehaLoginCustomer h3{font-size:16px}
  #newsalePage .pageHeader{position:relative}
  #newsalePage .shopLanderPageHader .mobileOptionDisplay.whitening-teeth-girl-with-smile{right:0;top:35px;max-width:161px;left:0;max-height:210px;overflow:hidden}
  .modal-content{width:95%}
  h2.youreInText{font-size:53px}
  #newsalePage .descriptionBody{max-width:100%}
  h1.gehaTextmember{margin-bottom:10px}
  #newsalePage .graphicImagePeople img{max-width:283px}
  #newsalePage #product-list.grid-changed .product-selection-price-text-top{justify-content:flex-start}
  #newsalePage #product-list.grid-changed .medium-12 .product-selection-description .productDescriptionDiv{align-items:flex-start;min-height:0}
  #newsalePage #product-list.grid-changed .medium-12 .product-selection-description b{padding-right:0;font-size:16px}
  section.shopLanderPageHader .pageheaderTop h1,section.shopLanderPageHader .pageheaderTop h1 span{font-size:24px}
  section.shopLanderPageHader .pageheaderTop p{font-size:14px}
  section.shopLanderPageHader{margin-top:.5rem}
  #newsalePage #product-list.grid-changed .normalyAmount{margin-bottom:0}
  .productLandingPageContainer span.product-selection-price-text del:before{left:-10px}
  span.product-selection-price-text del:before,.body-plaque-highlighter span.product-selection-price-text del:before,.product-electric-toothbrush span.product-selection-price-text del:before{width:auto}
  #newsalePage .ourCustomers .container{padding-bottom:40px}
  #newsalePage #product-list.grid-changed .product-selection-price-text-top{height:auto}
  #product-list .product-selection-description b{padding-right:0}
  #newsalePage #product-list.grid-changed .product-selection-price-text-top{padding-top:0}
  #newsalePage #product-list.grid-changed .medium-3 .productDescriptionDiv{text-align:center}
  #newsalePage #product-list.grid-changed .product-selection-price-text-top{text-align:center;margin-bottom:3px}
  #product-list.productLandingPageContainer .medium-12 .product-selection-price-text-top{margin-top:30px;margin-bottom:30px}
  #newsalePage #product-list.grid-changed .wasTextParent-div,.wasTextParent-div{line-height:1}
  #newsalePage .product-selection-description-parent-inner .normalyAmount,.normalyAmount{margin-bottom:0}
  section.shopLanderPageHader .pageheaderBotm select{font-size:16px}
  .resetFilter a{font-size:11px}
  #product-list.productLandingPageContainer .featureShippingPrice{
    color:#f0c23a;
  }
  section.shopLanderPageHader .pageheaderTop h1,section.shopLanderPageHader .pageheaderTop h1 span{font-size:20px}
  #newsalePage #product-list .landing-product:not(.medium-12) .product-selection-price-wrap{padding-top:6px}
  #newsalePage #product-list.productLandingPageContainer span.woocommerce-Price-amount.amount{line-height:1}
  #newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue{font-size:14px}
  #newsalePage .newsalePageBanner{margin-top:55px}
  .banner-img.banner-image-retainer-cleaner{position:relative;top:31px}
  .banner-img.banner-image-flosser{position:relative;top:40px}
  section.shopLanderPageHader .pageheaderTop{padding-top:8rem}
  #newsalePage #product-list:not(.grid-changed) .columns:not(.medium-12) span.product-selection-price-text del:before{top:50%;transform:translateY(-50%)}
  .ultrasonic-text-contain-by-js .backOrderList{top:-51px}
  #product-list.grid-changed .ultrasonic-text-contain-by-js .backOrderList{line-height:14px;top:-65px}



}

#product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue
,#newsalePage .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button, .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite, .teethWhieteingSystemWrapper.productLandingPageContainer .btn

{
  font-size: 20px;
  font-weight:400;
}

  #product-list:not(.grid-changed) .landing-product.medium-3 .product-selection-description-parent,#product-list:not(.grid-changed) .landing-product.medium-6 .product-selection-description-parent,#product-list:not(.grid-changed) .landing-product.medium-4 .product-selection-description-parent{overflow:inherit}


  #newsalePage .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button:hover, .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite:hover, .teethWhieteingSystemWrapper.productLandingPageContainer .btn:hover{
    color: #fff;
  }

  #newsalePage #product-list .columns span.product-selection-price-text del bdi
  ,.product-selection-price-text
  ,#newsalePage #product-list .columns:not(.medium-12) span.product-selection-price-text del bdi
  ,.productLandingPageContainer span.product-selection-price-text ins
  {
    font-size:24px;
 }

 .productLandingPageContainer span.product-selection-price-text del:before
 ,#newsalePage #product-list.grid-changed .medium-12 span.product-selection-price-text del:before
 ,#newsalePage #product-list:not(.grid-changed) .columns:not(.medium-12) span.product-selection-price-text del:before
 ,#newsalePage #product-list.grid-changed span.product-selection-price-text del:before
 {
  top: 50%;
  transform: translateY(-50%);
 }

 #product-list:not(.grid-changed).productLandingPageContainer .medium-12 .product-selection-description b{
  color: #565759;
  font-size: 28px;
  font-weight: 700;
 }

 #newsalePage #product-list:not(.grid-changed).productLandingPageContainer .spec-heding {
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}
#newsalePage #product-list:not(.grid-changed).productLandingPageContainer .spec-heding {
  margin-bottom: 5px;
}
#newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent{
  max-width: none;
}

section.shopLanderPageHader .pageheaderBotm{
  margin-bottom: 0rem;
}




#product-list:not(.grid-changed) .medium-3 .product-selection-image-wrap,#product-list:not(.grid-changed) .medium-6 .product-selection-image-wrap{
  width: 100%;
}

  @media only screen and  (max-width: 1500px){



    div#product-list {
      width: 100%;
  }


  }
  
  @media only screen and (min-width: 962px) and (max-width: 1300px){
    #product-list:not(.grid-changed) .medium-6 .product-selection-image-wrap {
      min-height: 270px;
  }

  #product-list:not(.grid-changed) .medium-3 .product-selection-image-wrap {
    min-height: 230px;
  }


  #product-list:not(.grid-changed).productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product>.vc_column-inner .product-selection-box {
    max-width: 93%;
  }
  #product-list.productLandingPageContainer .medium-12 .product-selection-image-wrap img {
    max-width: 380px;
  }

  #product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue, #newsalePage .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button, .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite, .teethWhieteingSystemWrapper.productLandingPageContainer .btn{
    font-size: 16px;
  }

  #product-list .product-selection-price-wrap button, #product-list .product-selection-price-wrap a {
    max-width: 190px;
    min-width: 190px;
  }


  }
  #product-list .medium-4.landing-product .featureTag {
    display: none;
}

#product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue {
  font-size:24px !important;
  font-weight:300 !important;
}
#product-list:not(.grid-changed).productLandingPageContainer .landing-product:not(.medium-12) .product-selection-box {
  margin-bottom: 65px;
}
#newsalePage .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button, .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite, .teethWhieteingSystemWrapper.productLandingPageContainer .btn {
  font-size: 18px;
  font-weight:300 !important;
}
#product-list.productLandingPageContainer.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue {
  font-size: 18px !important;
}
#product-list.productLandingPageContainer .landing-product:not(.medium-12) .product-selection-description b {
  color:#2d2e2f;
}
  @media  screen and (min-width: 40em) {
    .medium-4 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 33.33333%;
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
}
  @media only screen and (max-width: 991px){
    .skincare_product #product-list .product-selection-image-wrap {
      width: 100% !important;
  }

    #product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue, #newsalePage .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button, .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite, .teethWhieteingSystemWrapper.productLandingPageContainer .btn
    ,#newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue
    
    {
        font-size: 14px;max-width: 190px;
        min-width: 190px;
    }

    #product-list.productLandingPageContainer .medium-12 .product-selection-image-wrap img {
      max-width: 350px;
    }

    #product-list:not(.grid-changed) .medium-3 .product-selection-image-wrap
    ,#product-list:not(.grid-changed) .medium-6 .product-selection-image-wrap
    {
      width:100%;
    }

    html body #wrapper #product-list:not(.grid-changed) .medium-12.thb-dark-column.small-12.landing-product>.vc_column-inner .product-selection-box {
      width: 94% ;
  }

  #newsalePage #product-list.grid-changed .columns span.product-selection-price-text del bdi,.grid-changed .product-selection-price-text, #newsalePage #product-list.grid-changed .columns:not(.medium-12) span.product-selection-price-text del bdi, .productLandingPageContainer span.product-selection-price-text ins
  ,#product-list.grid-changed span.woocommerce-Price-amount.amount
,#newsalePage #product-list .columns span.product-selection-price-text del bdi, .product-selection-price-text, #newsalePage #product-list .columns:not(.medium-12) span.product-selection-price-text del bdi, .productLandingPageContainer span.product-selection-price-text ins
,.productLandingPageContainer span.woocommerce-Price-amount.amount,  #newsalePage #product-list .product-selection-price-text

    {
      font-size: 20px;
    }

 
  }
  div#product-list.grid-changed {
    padding-top: 65px;
}

  @media only screen and (max-width: 1000px) and  (orientation: landscape){
          .subscription-product-detail .caripro-content h1 {
              color: red;
          }
  
          #newsalePage .shopLanderPageHader .whitening-teeth-girl-with-smile {
              right: 21px;
              max-width: 304px;
              top: -43px;
          }
  
          #newsalePage section.shopLanderPageHader .pageheaderTop {
              margin-top: 10px;
          }
          section.shopLanderPageHader .pageheaderTop{
              padding-top: 3rem;
              padding-bottom: 3rem;
          }
  
           #product-list.productLandingPageContainer .medium-3 span.product-selection-price-text del span bdi,  #product-list.productLandingPageContainer .medium-3 span.product-selection-price-text del span,  #product-list.productLandingPageContainer .medium-3 span.product-selection-price-text del,  #product-list.productLandingPageContainer .medium-3 .product-selection-price-text-top .product-selection-price-text span.woocommerce-Price-amount.amount,  #product-list.productLandingPageContainer .medium-6 span.product-selection-price-text del span bdi,  #product-list.productLandingPageContainer .medium-6 span.product-selection-price-text del span,  #product-list.productLandingPageContainer .medium-6 span.product-selection-price-text del,  #product-list.productLandingPageContainer .medium-6 .product-selection-price-text-top .product-selection-price-text span.woocommerce-Price-amount.amount,  #product-list.productLandingPageContainer.grid-changed .medium-12 span.product-selection-price-text del span bdi,  #product-list.productLandingPageContainer.grid-changed .medium-12 span.product-selection-price-text del span,  #product-list.productLandingPageContainer.grid-changed .medium-12 span.product-selection-price-text del,  #product-list.productLandingPageContainer.grid-changed .medium-12 .product-selection-price-text-top .product-selection-price-text span.woocommerce-Price-amount.amount
          , #product-list .medium-3 span.product-selection-price-text ins bdi,  #product-list .medium-6 span.product-selection-price-text ins bdi,  #newsalePage #product-list.grid-changed .medium-12 .product-selection-price-text span.woocommerce-Price-amount.amount,  #newsalePage #product-list.grid-changed .medium-12 span.product-selection-price-text ins bdi
          {
              font-size: 22px;
          }
           #product-list.productLandingPageContainer .product-selection-price-text-top {
              min-width: initial;
          }
           #product-list.productLandingPageContainer .discountedPriceForGehaMember {
              font-size: 10px;
          }
          #newsalePage #product-list:not(.grid-changed).productLandingPageContainer .medium-12 .product-selection-description b {
              font-size: 23px;
          }
          #product-list.productLandingPageContainer .featuredproductNameSubtitle {
              font-size: 13px;
          }
  
         #product-list.productLandingPageContainer .medium-12 .product-selection-image-wrap img {
              max-width: 390px;
          }
  
  
          #product-list.productLandingPageContainer .medium-12 .product-selection-box.cariPro_dental_probiotics_byJs .product-selection-image-wrap img {
                  max-width: 223px;
                  margin-top: 0;
              }
  
              #product-list:not(.grid-changed).productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product>.vc_column-inner .product-selection-box {
                  max-width: 96%;
                  padding-top: 2rem;
              } 
  
              .subscription-product-detail {
  
              width: 100%;
          } 


        

      
      }
      #product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue{
        max-width:280px
      }

      .product-selection-price-text{
        font-family: Montserrat;
        font-size: 33px;
        font-weight: 400;
    
      }
      #product-list .landing-product:not(.medium-12) .product-selection-description-parent{
        padding: 15px;
      }
      #newsalePage #product-list.grid-changed .medium-12 .featureTag, #newsalePage #product-list.grid-changed .landing-product .featureTag{
        margin-right:auto;
        top:-12px
      }
      .resetFilter a {
        color: #3c98cc;
        font-size: 13px;
        text-decoration: none;
    }
      @media only screen and (max-width: 767px) {
        #newsalePage #product-list.grid-changed .medium-12 .product-selection-image-wrap img {
          max-width: 270px;
      }
        #product-list.productLandingPageContainer .medium-12 .product-selection-price-text{
          font-size: 32px !important;
      }
      #product-list .product-selection-price-text{
        font-size:initial !important;
      }
        #product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue, #newsalePage .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap button, .teethWhieteingSystemWrapper.productLandingPageContainer .product-selection-price-wrap a.product_type_composite, .teethWhieteingSystemWrapper.productLandingPageContainer .btn, #newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue {
          max-width: 100%;
          min-width: auto;
          padding-left: 15px;
          padding-right: 15px;
          font-size: 12px;
      }
      #newsalePage #product-list.grid-changed .product-selection-price-wrap button.btn{
        min-width:100% !important;
      }
      .product-selection-price-text ins{
        margin-left:0px !important
      }
      #product-list.productLandingPageContainer.grid-changed .medium-12 .product-selection-price-text{
        font-size:24px !important;
      }
      #product-list .medium-4.landing-product .product-selection-image-wrap{
        min-height:152px;
      }
        #product-list.productLandingPageContainer:not(.grid-change) .thb-dark-column.medium-4.landing-product{
          padding-top:20px;
        }
        #product-list:not(.grid-changed).productLandingPageContainer .landing-product:not(.medium-12) .product-selection-box {
          margin-bottom:10px;
        }
        #newsalePage #product-list.grid-changed .product-selection-price-text-top{justify-content:center}
        #product-list.grid-changed .landing-product .product-selection-price-wrap {
          width: 100%;
      }

        .skincare_product #product-list .product-selection-image-wrap{
          width: 100% !important;
        }
        .skincare_product #newsalePage #product-list:not(.grid-changed) .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent{
          max-width:100 !important;
          width: 100% !important;

        }
        .skincare_product  #product-list.productLandingPageContainer .medium-12 .product-selection-description b{
          font-size:22px !important;
        }
        .skincare_product #product-list.grid-changed .medium-12 .product-selection-description b{
          font-size: 16px !important;
        }
        .skincare_product #product-list .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner .btn-primary-blue{
          font-size:14px !important;
        }
        .skincare_product #product-list.productLandingPageContainer .medium-12 .product-selection-image-wrap {
          margin-top: 20px;
      }
      #product-list .product-selection-price-wrap button{
        max-width: 100%;
        width: 100%;
      }
      .skincare_product #product-list .thb-dark-column.small-12.landing-product {
        max-width: 100%;
        min-width: auto;
        padding-left: 15px;
        padding-right: 15px;
    }
   
      #product-list .medium-6.landing-product .product-selection-description-parent-inner, #product-list .medium-9.landing-product .product-selection-description-parent-inner
      ,#product-list.grid-changed .medium-6.landing-product .product-selection-description-parent-inner, #product-list.grid-changed .medium-9.landing-product .product-selection-description-parent-inner, #product-list.grid-changed .medium-3.landing-product .product-selection-description-parent-inner, #product-list.grid-changed .medium-8.landing-product .product-selection-description-parent-inner, #product-list.grid-changed .medium-12.landing-product .product-selection-description-parent-inner, #product-list.grid-changed .medium-4.landing-product .product-selection-description-parent-inner
,html body #wrapper #product-list:not(.grid-changed) .medium-12.thb-dark-column.small-12.landing-product>.vc_column-inner .product-selection-box

    
      {
        flex-direction: column ;
        justify-content: center;
        align-items: center;
      }
      #product-list:not(.grid-changed) .landing-product.medium-6 .product-selection-description-parent
      ,#product-list:not(.grid-changed) .landing-product.medium-3 .product-selection-description-parent
      {
        min-height: initial ;
        max-height: initial;
    }
    #newsalePage #product-list.grid-changed .medium-12 .product-selection-description .productDescriptionDiv{
      text-align: center;
    }

    #product-list:not(.grid-changed) .medium-12.thb-dark-column.small-12.landing-product >.vc_column-inner{
      padding-bottom: 0px;
    }

    #product-list.productLandingPageContainer .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent-inner {
      padding-top: 0px;
    }
    #newsalePage #product-list.productLandingPageContainer .medium-12 .product-selection-description b{
      font-size: 20px;
    }
    #product-list .product-selection-description{
      text-align: center;
    }

    #product-list .product-selection-description b
    ,#newsalePage #product-list.productLandingPageContainer .medium-12 .product-selection-description b
    {
      font-size:16px;
    }
    #newsalePage #product-list.grid-changed .medium-12.thb-dark-column.small-12.landing-product .product-selection-description-parent {
      max-width: none !important;
  }
  #newsalePage div#product-list {
    margin-top: 0px;
    margin-bottom:20px;
}

  .productLandingPageContainer span.woocommerce-Price-amount.amount
  ,#newsalePage #product-list .columns span.product-selection-price-text del bdi, .product-selection-price-text, #newsalePage #product-list .columns:not(.medium-12) span.product-selection-price-text del bdi, .productLandingPageContainer span.product-selection-price-text ins
  {    font-size: 22px;

  }
  #product-list.productLandingPageContainer .medium-12 .product-selection-image-wrap img {
    max-width: 100%;
}
#product-list:not(.grid-changed).productLandingPageContainer .landing-product:not(.medium-12) .product-selection-box {
  margin-bottom: 0px;
}
#product-list.productLandingPageContainer .featureTag {
  max-width: max-content;
}
}
.all-product-dropdown{
  display:none
}
@media screen and (max-width:420px){
  #product-list .product-selection-description b, #newsalePage #product-list.productLandingPageContainer .medium-12 .product-selection-description b{
    font-size:16px;
  }

  #product-list.productLandingPageContainer span.woocommerce-Price-amount.amount {
    font-size: 18px;
}
.productLandingPageContainer span.woocommerce-Price-amount.amount, #newsalePage #product-list .columns span.product-selection-price-text del bdi, .product-selection-price-text, #newsalePage #product-list .columns:not(.medium-12) span.product-selection-price-text del bdi, .productLandingPageContainer span.product-selection-price-text ins{
  font-size: 100%;
}
.skincare_product #product-list .thb-dark-column.small-12.landing-product{
  padding-left: 5px;
  padding-right: 5px;
}

.product-selection-price-text del{
  margin-right: 0px;
}
.product-selection-box .product-selection-description {
  padding: 0;
}

#product-list:not(.grid-changed ) .product-selection-description b {
  font-size: 16px;
}

}

@media screen and (max-width:380px){
  #product-list .product-selection-description b, #newsalePage #product-list.productLandingPageContainer .medium-12 .product-selection-description b {
    font-size: 14px;
}
}

@media screen and (max-width:369px){
  #product-list:not(.grid-changed ) .product-selection-description b {
    font-size: 14px;
}#product-list.productLandingPageContainer span.woocommerce-Price-amount.amount {
  font-size: 16px;
}#product-list .landing-product:not(.medium-12) .product-selection-description-parent {
  padding: 15px 7px;
}
.product-selection-price-text del{
  font-size: 100%;
}
#product-list.productLandingPageContainer .medium-4 .product-selection-price-text-top {
  margin-top: 6px;

}
}

    `}
  </style>
);

export default Sale;
