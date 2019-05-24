/**
 * Copyright 2019-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger For Original Coast Clothing
 * https://developers.facebook.com/docs/messenger-platform/getting-started/sample-apps/original-coast-clothing
 */

"use strict";

// Imports dependencies
const Response = require("./response"),
  config = require("./config"),
  i18n = require("../i18n.config");

module.exports = class Curation {
  constructor(user, webhookEvent) {
    this.user = user;
    this.webhookEvent = webhookEvent;
  }

  handlePayload(payload) {
    let response;
    let outfit;

    switch (payload) {
      case "F8-2019":
        response = [
          Response.genText(
            i18n.__("get_started.f8-welcome", {
              userFirstName: this.user.firstName
            })
          ),
          Response.genText(i18n.__("get_started.f8-guidance")),
          Response.genQuickReply(i18n.__("get_started.f8-help"), [
            {
              title: i18n.__("menu.suggestion"),
              payload: "CURATION"
            },
            {
              title: i18n.__("menu.help"),
              payload: "CARE_HELP"
            }
          ])
        ];
        break;
      case "SUMMER_COUPON":
        response = [
          Response.genText(
            i18n.__("leadgen.promo", {
              userFirstName: this.user.firstName
            })
          ),
          Response.genGenericTemplate(
            `${config.appUrl}/coupon.png`,
            i18n.__("leadgen.title"),
            i18n.__("leadgen.subtitle"),
            [Response.genPostbackButton(i18n.__("leadgen.apply"), "COUPON_50")]
          )
        ];
        break;

      case "COUPON_50":
        outfit = `${this.user.gender}-${this.randomOutfit()}`;

        response = [
          Response.genText(i18n.__("leadgen.coupon")),
          Response.genGenericTemplate(
            `${config.appUrl}/styles/${outfit}.jpg`,
            i18n.__("curation.title"),
            i18n.__("curation.subtitle"),
            [
              Response.genWebUrlButton(
                i18n.__("curation.shop"),
                `${config.shopUrl}/products/${outfit}`
              ),
              Response.genPostbackButton(
                i18n.__("curation.show"),
                "CURATION_OTHER_STYLE"
              ),
              Response.genPostbackButton(
                i18n.__("curation.sales"),
                "CARE_SALES"
              )
            ]
          )
        ];
        break;

      case "CURATION":
        response = Response.genQuickReply(i18n.__("curation.prompt"), [
          {
            title: i18n.__("curation.hosting"),
            payload: "CURATION_HOSTING"
          },
          {
            title: i18n.__("curation.domain"),
            payload: "CURATION_DOMAIN"
          },          
          {
            title: i18n.__("curation.ssl"),
            payload: "CURATION_SSL"
          }
        ]);
        break;

      case "CURATION_HOSTING":

        response = Response.genQuickReply(i18n.__("curation.occasion"), [
          {
            title: i18n.__("curation.singled"),
            payload: "CURATION_OCASION_SINGLED"
          },
          {
            title: i18n.__("curation.multid"),
            payload: "CURATION_OCASION_MULTID"
          },
          {
            title: i18n.__("curation.reseller"),
            payload: "CURATION_OCASION_RESELLER"
          },
          {
            title: i18n.__("curation.ssd"),
            payload: "CURATION_OCASION_SSD"
          },
          {
            title: i18n.__("curation.wordpress"),
            payload: "CURATION_OCASION_WORDPRESS"
          },
          {
            title: i18n.__("curation.websitebuilder"),
            payload: "CURATION_OCASION_WEBSITEBUILDER"
          },
          {
            title: i18n.__("curation.sales"),
            payload: "CARE_SALES"
          }
        ]);
        break;
  case "CURATION_DOMAIN":
  response = Response.genQuickReply(i18n.__("curation.occasion"), [
    {
      title: i18n.__("curation.sales"),
      payload: "CARE_SALES"
    }
      ]);
      break;
      case "CURATION_SSL":
      response = Response.genQuickReply(i18n.__("curation.occasion"), [
        {
          title: i18n.__("curation.sales"),
          payload: "CARE_SALES"
        }
          ]);
          break;

    case "CURATION_OCASION_SINGLED":

          response = Response.genQuickReply(i18n.__("curation.occasion"), [
            {
              title: i18n.__("curation.linuxsd"),
              payload: "CURATION_OCASION_LINUXSD"
            },
                       {
              title: i18n.__("curation.windowssd"),
              payload: "CURATION_OCASION_WINDOWSSD"
            },
            {
              title: i18n.__("curation.sales"),
              payload: "CARE_SALES"
            }
          ]);
          break;
 case "CURATION_OCASION_MULTID":

          response = Response.genQuickReply(i18n.__("curation.occasion"), [
            {
              title: i18n.__("curation.linuxmd"),
              payload: "CURATION_OCASION_LINUXMD"
            },
                       {
              title: i18n.__("curation.windowsmd"),
              payload: "CURATION_OCASION_WINDOWSMD"
            },
            {
              title: i18n.__("curation.sales"),
              payload: "CARE_SALES"
            }
          ]);
          break;

case "CURATION_OCASION_RESELLER":

          response = Response.genQuickReply(i18n.__("curation.occasion"), [
            {
              title: i18n.__("curation.linuxr"),
              payload: "CURATION_OCASION_LINUXR"
            },
                       {
              title: i18n.__("curation.windowsr"),
              payload: "CURATION_OCASION_WINDOWSR"
            },
            {
              title: i18n.__("curation.sales"),
              payload: "CARE_SALES"
            }
          ]);
          break;
 case "CURATION_OCASION_SSD":

          response = Response.genQuickReply(i18n.__("curation.occasion"), [
            {
              title: i18n.__("curation.linuxr"),
              payload: "CURATION_OCASION_LINUXR"
            },
                       {
              title: i18n.__("curation.windowsr"),
              payload: "CURATION_OCASION_WINDOWSR"
            },
            {
              title: i18n.__("curation.sales"),
              payload: "CARE_SALES"
            }
          ]);
          break;
case "CURATION_OCASION_WORDPRESS":

          response = Response.genQuickReply(i18n.__("curation.occasion"), [
            {
              title: i18n.__("curation.linuxr"),
              payload: "CURATION_OCASION_LINUXR"
            },

            {
              title: i18n.__("curation.sales"),
              payload: "CARE_SALES"
            }
          ]);
          break;
case "CURATION_OCASION_WEBSITEBUILDER":

          response = Response.genQuickReply(i18n.__("curation.occasion"), [
            {
              title: i18n.__("curation.linuxr"),
              payload: "CURATION_OCASION_LINUXR"
            },
                       {
              title: i18n.__("curation.windowsr"),
              payload: "CURATION_OCASION_WINDOWSR"
            },
            {
              title: i18n.__("curation.sales"),
              payload: "CARE_SALES"
            }
          ]);
          break;




      case "CURATION_BUDGET_20_WORK":
      case "CURATION_BUDGET_30_WORK":
      case "CURATION_BUDGET_50_WORK":
      case "CURATION_BUDGET_20_DINNER":
      case "CURATION_BUDGET_30_DINNER":
      case "CURATION_BUDGET_50_DINNER":
      case "CURATION_BUDGET_20_PARTY":
      case "CURATION_OCASION_LINUXR":
      case "CURATION_OCASION_WINDOWSR":
        response = this.genCurationResponse(payload);
        break;

      case "CURATION_OTHER_STYLE":
        // Build the recommendation logic here
        outfit = `${this.user.gender}-${this.randomOutfit()}`;

        response = Response.genGenericTemplate(
          `${config.appUrl}/styles/${outfit}.jpg`,
          i18n.__("curation.title"),
          i18n.__("curation.subtitle"),
          [
            Response.genWebUrlButton(
              i18n.__("curation.shop"),
              `${config.shopUrl}/products/${outfit}`
            ),
            Response.genPostbackButton(
              i18n.__("curation.show"),
              "CURATION_OTHER_STYLE"
            )
          ]
        );
        break;
    }

    return response;
  }

  genCurationResponse(payload) {
    let occasion = payload.split("_")[3].toLowerCase();
    let budget = payload.split("_")[2].toLowerCase();
    let outfit = `${this.user.gender}-${occasion}`;

    let buttons = [
      Response.genWebUrlButton(
        i18n.__("curation.shop"),
        `${config.shopUrl}/products/${outfit}`
      ),
      Response.genPostbackButton(
        i18n.__("curation.show"),
        "CURATION_OTHER_STYLE"
      )
    ];

    if (budget === "50") {
      buttons.push(
        Response.genPostbackButton(i18n.__("curation.sales"), "CARE_SALES")
      );
    }

    let response = Response.genGenericTemplate(
      `${config.appUrl}/styles/${outfit}.jpg`,
      i18n.__("curation.title"),
      i18n.__("curation.subtitle"),
      buttons
    );

    return response;
  }

  randomOutfit() {
    let occasion = ["work", "party", "dinner"];
    let randomIndex = Math.floor(Math.random() * occasion.length);

    return occasion[randomIndex];
  }
};
