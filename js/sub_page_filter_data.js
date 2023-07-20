const filterSections = [
  {
      sectnId: "menu_list_section",
      sectnClass: ["menu_list_section_design"],
      sectnIn: {
          titleInfo: {
              titleWrapClass: ["side_top"],
              titleStr: "TOP",
              titleClass: ["menu_title"],
              resetIcon: ["fas fa-sync"],
              resetClass: ["reset"],
              resetStr: "리셋하기"
          },
          liInfo: {
              ulId: "product_ment_list",
              ulClass: ["product_menu_list_design", "check_detect"],
              cmnLabelClass: ["chk_box"],
              cmnInputType: "checkbox",
              isSpan: false,
              innerLi: [
                  {
                      inputId: "jaket_cloth",
                      inputValue: "jaket",
                      labelStr: "자켓",
                  },
                  {
                      inputId: "sweater_cloth",
                      inputValue: "sweater",
                      labelStr: "스웨터",
                  },
                  {
                      inputId: "neat_cloth",
                      inputValue: "neat",
                      labelStr: "니트",
                  },
                  {
                      inputId: "shirt_cloth",
                      inputValue: "shirt",
                      labelStr: "셔츠",
                  },
                  {
                      inputId: "T_shirt_cloth",
                      inputValue: "TShirt",
                      labelStr: "티셔츠",
                  },
              ]
          }
      }
  },
  {
      sectnId: "price_select_section",
      sectnClass: ["price_select_design", "filter_section", "check_design"],
      sectnIn: {
          titleInfo: {
              titleStr: "가격",
              titleClass: ["info_title"],
          },
          liInfo: {
              ulId: "price_list",
              ulClass: ["price_list_design", "check_detect"],
              isSpan: true,
              cmnSpanClass: ["chk_box"],
              cmnLabelClass: ["label_style"],
              cmnInputType: ["checkbox"],
              innerLi: [
                  {
                      inputId: "price_range_0_50000",
                      inputValue: "0~50000",
                      labelStr: "0 ~ 50,000원",
                  },
                  {
                      inputId: "price_range_50000_150000",
                      inputValue: "50000~150000",
                      labelStr: "50,000원 ~ 150,000원",
                  },
                  {
                      inputId: "price_range_150000_250000",
                      inputValue: "150000~250000",
                      labelStr: "150,000원 ~ 250,000원",
                  },
                  {
                      inputId: "price_range_250000_500000",
                      inputValue: "250000~500000",
                      labelStr: "250,000원 ~ 500,000원",
                  },
                  {
                      inputId: "price_500000_up",
                      inputValue: "500000~",
                      labelStr: "500,000원 이상",
                  },
              ]
          }
      }
  },
  {
      sectnId: "color_select_section",
      sectnClass: ["color_select_design", "filter_section", "check_design"],
      sectnIn: {
          titleInfo: {
              titleStr: "색상",
              titleClass: ["info_title"],
          },
          liInfo: {
              ulId: "color_list",
              ulClass: ["color_list_design", "check_detect"],
              isSpan: false,
              cmnInputType: ["checkbox"],
              innerLi: [
                  {
                      inputId: "color_black",
                      inputValue: "black",
                      individualClass: ["black_box"]
                  },
                  {
                      inputId: "color_white",
                      inputValue: "white",
                      individualClass: ["white_box"]
                  },
                  {
                      inputId: "color_gray",
                      inputValue: "gray",
                      individualClass: ["gray_box"]
                  },
                  {
                      inputId: "color_brown",
                      inputValue: "brown",
                      individualClass: ["brown_box"]
                  },
                  {
                      inputId: "color_blue",
                      inputValue: "blue",
                      individualClass: ["blue_box"]
                  },
                  {
                      inputId: "color_sky_blue",
                      inputValue: "skyBlue",
                      individualClass: ["sky_blue_box"]
                  },
                  {
                      inputId: "color_green",
                      inputValue: "green",
                      individualClass: ["green_box"]
                  },
                  {
                      inputId: "color_green_down",
                      inputValue: "greenDown",
                      individualClass: ["green_down_box"]
                  },
                  {
                      inputId: "color_orange",
                      inputValue: "orange",
                      individualClass: ["orange_box"]
                  },
                  {
                      inputId: "color_pink",
                      inputValue: "pink",
                      individualClass: ["pink_box"]
                  },
                  {
                      inputId: "color_purple",
                      inputValue: "purple",
                      individualClass: ["purple_box"]
                  },
              ]
          }
      }
  },
  {
      sectnId: "sale_select_section",
      sectnClass: ["sale_select_design", "filter_section", "check_design"],
      sectnIn: {
          titleInfo: {
              titleStr: "할인율",
              titleClass: ["info_title"],
          },
          liInfo: {
              ulId: "sale_list",
              ulClass: ["sale_list_design", "check_detect"],
              isSpan: true,
              cmnSpanClass: ["chk_box"],
              cmnLabelClass: ["label_style"],
              cmnInputType: ["checkbox"],
              innerLi: [
                  {
                      inputId: "sale_range_0_30",
                      inputValue: "0~30",
                      labelStr: "0% ~ 30%",
                  },
                  {
                      inputId: "sale_range_30_50",
                      inputValue: "30~50",
                      labelStr: "30% ~ 50%",
                  },
                  {
                      inputId: "sale_range_50_70",
                      inputValue: "50~70",
                      labelStr: "50% ~ 70%",
                  },
                  {
                      inputId: "sale_70_up",
                      inputValue: "70~",
                      labelStr: "70% 이상",
                  },
              ]
          }
      }
  },
]

export {filterSections}