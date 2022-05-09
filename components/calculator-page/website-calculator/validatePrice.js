import React from "react";

export default function validatePrice(label, value) {
  let prices = {};

  if (label === "Number of page") {
    if (value === "1 - 12") {
      (prices.minPrice = 1), (prices.maxPrice = 2);
    }

    if (value === "12 - 33") {
      (prices.minPrice = 2), (prices.maxPrice = 3);
    }

    if (value === "33+") {
      (prices.minPrice = 3), (prices.maxPrice = 4);
    }
  }

  //? style of design

  if (label === "Style of design") {
    if (value === "None") {
      (prices.minPrice = 0), (prices.maxPrice = 0);
    }

    if (value === "Simple") {
      (prices.minPrice = 1), (prices.maxPrice = 2);
    }

    if (value === "Medium") {
      (prices.minPrice = 2), (prices.maxPrice = 3);
    }

    if (value === "Advanced") {
      (prices.minPrice = 3), (prices.maxPrice = 4);
    }
  }

  //? copywriting of pages.

  if (label === "Copywriting of pages") {
    if (value === "None") {
      (prices.minPrice = 0), (prices.maxPrice = 0);
    }

    if (value === "3 - 9") {
      (prices.minPrice = 1), (prices.maxPrice = 2);
    }

    if (value === "9 - 21") {
      (prices.minPrice = 2), (prices.maxPrice = 3);
    }

    if (value === "21 - 33") {
      (prices.minPrice = 3), (prices.maxPrice = 4);
    }
  }

  //? SEO

  if (label === "SEO W / Placement Guarantee") {
    if (value === "None") {
      (prices.minPrice = 0), (prices.maxPrice = 0);
    }

    if (value === "30 keywords") {
      (prices.minPrice = 1), (prices.maxPrice = 2);
    }

    if (value === "90 keywords") {
      (prices.minPrice = 2), (prices.maxPrice = 3);
    }

    if (value === "150 keywords") {
      (prices.minPrice = 3), (prices.maxPrice = 4);
    }
  }

  //? responsive design.
  if (label === "Responsive Design") {
    if (value === "None") {
      (prices.minPrice = 0), (prices.maxPrice = 0);
    }

    if (value === "Yes") {
      (prices.minPrice = 1), (prices.maxPrice = 2);
    }
  }

  //? Database integration.

  if (label === "Database integration") {
    if (value === "None") {
      (prices.minPrice = 0), (prices.maxPrice = 0);
    }

    if (value === "Basic") {
      (prices.minPrice = 1), (prices.maxPrice = 2);
    }

    if (value === "Medium") {
      (prices.minPrice = 2), (prices.maxPrice = 3);
    }

    if (value === "Advanced") {
      (prices.minPrice = 3), (prices.maxPrice = 4);
    }
  }

  //? ecom functionallity.

  if (label === "e-Commerce Functionality") {
    if (value === "None") {
      (prices.minPrice = 0), (prices.maxPrice = 0);
    }

    if (value === "Basic") {
      (prices.minPrice = 1), (prices.maxPrice = 2);
    }

    if (value === "Medium") {
      (prices.minPrice = 2), (prices.maxPrice = 3);
    }

    if (value === "Advanced") {
      (prices.minPrice = 3), (prices.maxPrice = 4);
    }
  }

  //? cms

  if (label === "Cms") {
    if (value === "None") {
      (prices.minPrice = 0), (prices.maxPrice = 0);
    }

    if (value === "Basic") {
      (prices.minPrice = 1), (prices.maxPrice = 2);
    }

    if (value === "Medium") {
      (prices.minPrice = 2), (prices.maxPrice = 3);
    }

    if (value === "Advanced") {
      (prices.minPrice = 3), (prices.maxPrice = 4);
    }
  }

  return prices;
}
