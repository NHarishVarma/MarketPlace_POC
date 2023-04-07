import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MarketplaceLookFeelLi.module.css";

const MarketplaceLookFeelLi: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/fund-detail-look-feel-01");
  }, [navigate]);

  const onFilterMenuButton15Click = useCallback(() => {
    navigate("/marketplace-look-feel-2");
  }, [navigate]);

  const onCompareButtonContainerClick = useCallback(() => {
    navigate("/compare-look-feel-1");
  }, [navigate]);

  return (
    <div className={styles.marketplaceLookFeelLi}>
      <div className={styles.bgParent} onClick={onGroupContainer1Click}>
        <div className={styles.bg} />
        <div className={styles.privateEquity}>Private Equity</div>
        <b className={styles.consumerGoodsRetailEnhancem}>
          Consumer Goods Retail Enhancement Fund
        </b>
        <b className={styles.b}>15% - 20%</b>
        <b className={styles.b1}>$100,000</b>
        <b className={styles.quarterly}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <div className={styles.label}>
          <b className={styles.labelcontent}>NOW OPEN</b>
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img className={styles.addToCompare} alt="" src="/add-to-compare.svg" />
      </div>
      <div className={styles.bgGroup}>
        <div className={styles.bg} />
        <div className={styles.realEstate}>Real Estate</div>
        <b className={styles.pennRealEstate}>Penn Real Estate Fund III</b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$500,000</b>
        <div className={styles.label1}>
          <div className={styles.labelbg} />
          <b className={styles.labelcontent1}>Updated Jan 20</b>
          <img
            className={styles.updateFill0Wght400Grad0OpsIcon}
            alt=""
            src="/update-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <b className={styles.yearly}>Yearly</b>
        <img
          className={styles.favoriteButtonIcon1}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.maskGroup31}
          alt=""
          src="/mask-group-31@2x.png"
        />
        <div className={styles.image} />
        <img
          className={styles.addToCompare1}
          alt=""
          src="/add-to-compare.svg"
        />
      </div>
      <div className={styles.bgContainer}>
        <img className={styles.bgIcon} alt="" src="/bg.svg" />
        <div className={styles.hedgeFund}>Hedge Fund</div>
        <b className={styles.pennRealEstate}>Infrastructure Fund</b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$100,000</b>
        <b className={styles.quarterly1}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon2}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.maskGroup28}
          alt=""
          src="/mask-group-28@2x.png"
        />
        <div className={styles.image1} />
        <img
          className={styles.addToCompare2}
          alt=""
          src="/add-to-compare.svg"
        />
        <div className={styles.label2}>
          <div className={styles.labelbg} />
          <b className={styles.labelcontent2}>Updated Feb 12</b>
          <img
            className={styles.updateFill0Wght400Grad0OpsIcon}
            alt=""
            src="/update-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.bg} />
        <div className={styles.ventureCapital}>Venture Capital</div>
        <b className={styles.pennRealEstate}>Angel Fund IV</b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$100,000</b>
        <b className={styles.quarterly2}>Quarterly</b>
        <div className={styles.label3}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
        <img
          className={styles.favoriteButtonIcon3}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.addToCompare3}
          alt=""
          src="/add-to-compare.svg"
        />
        <div className={styles.maskGroup23Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-23@2x.png"
          />
        </div>
      </div>
      <div className={styles.bgParent1}>
        <div className={styles.bg} />
        <div className={styles.privateEquity1}>Private Equity</div>
        <b className={styles.consumerGoodsRetailEnhancem}>
          ProFunds UltraSector Health Care Fund
        </b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$100,000</b>
        <b className={styles.quarterly3}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon4}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.addToCompare4}
          alt=""
          src="/add-to-compare.svg"
        />
        <img
          className={styles.maskGroup34}
          alt=""
          src="/mask-group-34@2x.png"
        />
        <div className={styles.image2} />
        <div className={styles.label4}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
      </div>
      <div className={styles.bgParent2}>
        <div className={styles.bg} />
        <div className={styles.privateEquity1}>Private Equity</div>
        <b className={styles.consumerGoodsRetailEnhancem}>
          Hussman Strategic Total Return Fund
        </b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$100,000</b>
        <b className={styles.quarterly4}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon5}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.addToCompare5}
          alt=""
          src="/add-to-compare.svg"
        />
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.image3} />
        <div className={styles.label5}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
      </div>
      <div className={styles.bgParent3}>
        <div className={styles.bg} />
        <div className={styles.privateEquity1}>Private Equity</div>
        <b className={styles.pennRealEstate}>Rydex Nova Fund</b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$100,000</b>
        <b className={styles.quarterly5}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon6}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.addToCompare6}
          alt=""
          src="/add-to-compare.svg"
        />
        <img
          className={styles.maskGroup26}
          alt=""
          src="/mask-group-26@2x.png"
        />
        <div className={styles.image4} />
        <div className={styles.label6}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
      </div>
      <div className={styles.bgParent4}>
        <div className={styles.bg} />
        <div className={styles.privateEquity}>Private Equity</div>
        <b className={styles.consumerGoodsRetailEnhancem}>
          Consumer Goods Retail Enhancement Fund
        </b>
        <b className={styles.b}>15% - 20%</b>
        <b className={styles.b1}>$100,000</b>
        <b className={styles.quarterly}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <div className={styles.label}>
          <b className={styles.labelcontent}>NOW OPEN</b>
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img className={styles.addToCompare} alt="" src="/add-to-compare.svg" />
      </div>
      <div className={styles.bgParent5}>
        <div className={styles.bg} />
        <div className={styles.privateEquity}>Private Equity</div>
        <b className={styles.consumerGoodsRetailEnhancem}>
          Consumer Goods Retail Enhancement Fund
        </b>
        <b className={styles.b}>15% - 20%</b>
        <b className={styles.b1}>$100,000</b>
        <b className={styles.quarterly}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <div className={styles.label}>
          <b className={styles.labelcontent}>NOW OPEN</b>
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img className={styles.addToCompare} alt="" src="/add-to-compare.svg" />
      </div>
      <div className={styles.bgParent6}>
        <div className={styles.bg} />
        <div className={styles.realEstate}>Real Estate</div>
        <b className={styles.pennRealEstate}>Penn Real Estate Fund III</b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$500,000</b>
        <div className={styles.label1}>
          <div className={styles.labelbg} />
          <b className={styles.labelcontent1}>Updated Jan 20</b>
          <img
            className={styles.updateFill0Wght400Grad0OpsIcon}
            alt=""
            src="/update-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <b className={styles.yearly}>Yearly</b>
        <img
          className={styles.favoriteButtonIcon1}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.maskGroup31}
          alt=""
          src="/mask-group-311@2x.png"
        />
        <div className={styles.image} />
        <img
          className={styles.addToCompare1}
          alt=""
          src="/add-to-compare.svg"
        />
      </div>
      <div className={styles.bgParent7}>
        <div className={styles.bg} />
        <div className={styles.realEstate}>Real Estate</div>
        <b className={styles.pennRealEstate}>Penn Real Estate Fund III</b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$500,000</b>
        <div className={styles.label1}>
          <div className={styles.labelbg} />
          <b className={styles.labelcontent1}>Updated Jan 20</b>
          <img
            className={styles.updateFill0Wght400Grad0OpsIcon}
            alt=""
            src="/update-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <b className={styles.yearly}>Yearly</b>
        <img
          className={styles.favoriteButtonIcon1}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.maskGroup31}
          alt=""
          src="/mask-group-311@2x.png"
        />
        <div className={styles.image} />
        <img
          className={styles.addToCompare1}
          alt=""
          src="/add-to-compare.svg"
        />
      </div>
      <div className={styles.bgParent8}>
        <img className={styles.bgIcon} alt="" src="/bg.svg" />
        <div className={styles.hedgeFund}>Hedge Fund</div>
        <b className={styles.pennRealEstate}>Infrastructure Fund</b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$100,000</b>
        <b className={styles.quarterly1}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon2}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.maskGroup28}
          alt=""
          src="/mask-group-281@2x.png"
        />
        <div className={styles.image1} />
        <img
          className={styles.addToCompare2}
          alt=""
          src="/add-to-compare.svg"
        />
        <div className={styles.label2}>
          <div className={styles.labelbg} />
          <b className={styles.labelcontent2}>Updated Feb 12</b>
          <img
            className={styles.updateFill0Wght400Grad0OpsIcon}
            alt=""
            src="/update-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.bgParent9}>
        <img className={styles.bgIcon} alt="" src="/bg.svg" />
        <div className={styles.hedgeFund}>Hedge Fund</div>
        <b className={styles.pennRealEstate}>Infrastructure Fund</b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$100,000</b>
        <b className={styles.quarterly1}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon2}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon12}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.maskGroup28}
          alt=""
          src="/mask-group-282@2x.png"
        />
        <div className={styles.image1} />
        <img
          className={styles.addToCompare2}
          alt=""
          src="/add-to-compare.svg"
        />
        <div className={styles.label2}>
          <div className={styles.labelbg} />
          <b className={styles.labelcontent2}>Updated Feb 12</b>
          <img
            className={styles.updateFill0Wght400Grad0OpsIcon}
            alt=""
            src="/update-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.bgParent10}>
        <div className={styles.bg} />
        <div className={styles.ventureCapital}>Venture Capital</div>
        <b className={styles.pennRealEstate}>Angel Fund IV</b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$100,000</b>
        <b className={styles.quarterly2}>Quarterly</b>
        <div className={styles.label3}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
        <img
          className={styles.favoriteButtonIcon3}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.addToCompare3}
          alt=""
          src="/add-to-compare.svg"
        />
        <div className={styles.maskGroup23Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-23@2x.png"
          />
        </div>
      </div>
      <div className={styles.bgParent11}>
        <div className={styles.bg} />
        <div className={styles.privateEquity1}>Private Equity</div>
        <b className={styles.consumerGoodsRetailEnhancem}>
          ProFunds UltraSector Health Care Fund
        </b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$100,000</b>
        <b className={styles.quarterly3}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon4}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.addToCompare4}
          alt=""
          src="/add-to-compare.svg"
        />
        <img
          className={styles.maskGroup34}
          alt=""
          src="/mask-group-34@2x.png"
        />
        <div className={styles.image2} />
        <div className={styles.label4}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
      </div>
      <div className={styles.bgParent12}>
        <div className={styles.bg} />
        <div className={styles.privateEquity1}>Private Equity</div>
        <b className={styles.consumerGoodsRetailEnhancem}>
          Hussman Strategic Total Return Fund
        </b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$100,000</b>
        <b className={styles.quarterly4}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon5}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.addToCompare5}
          alt=""
          src="/add-to-compare.svg"
        />
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.image3} />
        <div className={styles.label5}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
      </div>
      <div className={styles.bgParent13}>
        <div className={styles.bg} />
        <div className={styles.privateEquity1}>Private Equity</div>
        <b className={styles.pennRealEstate}>Rydex Nova Fund</b>
        <b className={styles.b2}>15% - 20%</b>
        <b className={styles.b3}>$100,000</b>
        <b className={styles.quarterly5}>Quarterly</b>
        <img
          className={styles.favoriteButtonIcon6}
          alt=""
          src="/favorite-button.svg"
        />
        <div className={styles.maskGroup11Wrapper}>
          <img
            className={styles.maskGroup11}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <img
          className={styles.chevronRightFill0Wght400GrIcon}
          alt=""
          src="/chevron-right-fill0-wght400-grad0-opsz48.svg"
        />
        <img
          className={styles.addToCompare6}
          alt=""
          src="/add-to-compare.svg"
        />
        <img
          className={styles.maskGroup26}
          alt=""
          src="/mask-group-26@2x.png"
        />
        <div className={styles.image4} />
        <div className={styles.label6}>
          <b className={styles.labelcontent3}>CLOSED</b>
        </div>
      </div>
      <div className={styles.buttonNormal}>
        <div className={styles.buttonNormalChild} />
        <div className={styles.loadMore}>Load More</div>
      </div>
      <div className={styles.filterNavBar}>
        <div className={styles.filterMenuButton}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Industry</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton1}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Strategy</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton2}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Minimum</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton3}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Term</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton4}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Fund Manager</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton5}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.sort}>Sort</div>
          <img className={styles.groupIcon} alt="" src="/group-319.svg" />
        </div>
        <div className={styles.filterMenuButton6}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Fund Type</div>
          <img
            className={styles.iconMaterialArrowDropDown5}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton7}>
          <div className={styles.filterMenuButtonChild} />
          <img
            className={styles.listFill0Wght400Grad0Opsz4Icon}
            alt=""
            src="/list-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.compareParent}>
          <div className={styles.sort}>Compare</div>
          <img
            className={styles.iconMaterialCompareArrows}
            alt=""
            src="/icon-materialcomparearrows.svg"
          />
        </div>
      </div>
      <div className={styles.marketingFeature}>
        <div className={styles.investmentMarketplaceParent}>
          <div className={styles.investmentMarketplace}>
            Investment Marketplace
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo .
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.investedInThePlatformParent}>
            <div className={styles.investedInTheContainer}>
              I<span className={styles.n}>n</span>
              <span className={styles.v}>v</span>es
              <span className={styles.t}>t</span>ed In the plat
              <span className={styles.f}>f</span>orm
            </div>
            <div className={styles.div}>$2.5B</div>
          </div>
          <div className={styles.totalDollarsReturnedToInveParent}>
            <div className={styles.totalDollarsReturnedContainer}>
              <span className={styles.t1}>T</span>
              {`otal dollars `}
              <span className={styles.f}>r</span>
              {`eturned `}
              <span className={styles.t}>t</span>o I
              <span className={styles.w}>n</span>
              <span className={styles.v1}>v</span>es
              <span className={styles.f}>t</span>ors.
            </div>
            <div className={styles.div}>$1.2B+</div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.theWeightedAverageAnnualizeParent}>
              <div className={styles.theWeightedAverageContainer}>
                {`The `}
                <span className={styles.w}>w</span>eigh
                <span className={styles.f}>t</span>
                {`ed `}
                <span className={styles.w}>a</span>
                <span className={styles.v}>v</span>era
                <span className={styles.f}>g</span>
                {`e annualized `}
              </div>
              <div className={styles.targetReturnForContainer}>
                tar<span className={styles.f}>g</span>
                {`et `}
                <span className={styles.f}>r</span>
                {`eturn `}
                <span className={styles.f}>f</span>or all open of
                <span className={styles.f}>f</span>erings.*
              </div>
            </div>
            <div className={styles.div}>12.42%</div>
          </div>
        </div>
      </div>
      <div className={styles.liquidity}>LIQUIDITY</div>
      <div className={styles.targetReturn}>TARGET RETURN</div>
      <div className={styles.investment}>Investment</div>
      <div className={styles.minimum1}>MINIMUM</div>
      <div className={styles.filterNavBar1}>
        <div className={styles.filterNavBarChild} />
        <div className={styles.filterMenuButton8}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Industry</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton9}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Strategy</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton10}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Minimum</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton11}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Term</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton12}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Fund Manager</div>
          <img
            className={styles.iconMaterialArrowDropDown}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div className={styles.filterMenuButton13}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.sort}>Sort</div>
          <img className={styles.groupIcon} alt="" src="/group-319.svg" />
        </div>
        <div className={styles.filterMenuButton14}>
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.industry}>Fund Type</div>
          <img
            className={styles.iconMaterialArrowDropDown5}
            alt=""
            src="/icon-materialarrowdropdown.svg"
          />
        </div>
        <div
          className={styles.filterMenuButton15}
          onClick={onFilterMenuButton15Click}
        >
          <div className={styles.filterMenuButtonChild} />
          <img
            className={styles.listFill0Wght400Grad0Opsz4Icon}
            alt=""
            src="/list-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div
          className={styles.compareButton}
          onClick={onCompareButtonContainerClick}
        >
          <div className={styles.filterMenuButtonChild} />
          <div className={styles.sort}>Compare</div>
          <img
            className={styles.iconMaterialCompareArrows}
            alt=""
            src="/icon-materialcomparearrows.svg"
          />
        </div>
      </div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent1}>
          <img className={styles.groupChild} alt="" src="/group-330.svg" />
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.alternativeInvestmentPlatforContainer}>
                Al<span className={styles.t}>t</span>ernati
                <span className={styles.v3}>v</span>e
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchParent}>
          <div className={styles.search}>Search</div>
          <img
            className={styles.iconactionsearch24px}
            alt=""
            src="/iconactionsearch-24px.svg"
          />
        </div>
      </div>
      <div className={styles.navDrawerLeft}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavButtonChild} />
              <div className={styles.groupWrapper} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.notificationsFill0Wght400GrIcon}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div1}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton7}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.homeFill0Wght300Grad0Opsz4Icon}
                alt=""
                src="/home-fill0-wght300-grad0-opsz40.svg"
              />
            </div>
            <div className={styles.leftNavClosedChild} />
            <div className={styles.closedMenuIcon}>
              <div className={styles.closedMenuIconChild} />
              <div className={styles.closedMenuIconItem} />
              <div className={styles.closedMenuIconInner} />
              <img
                className={styles.chevronRightFill0Wght400GrIcon17}
                alt=""
                src="/chevron-right-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.component2096}
        alt=""
        src="/component-209--3.svg"
      />
    </div>
  );
};

export default MarketplaceLookFeelLi;
