import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CompareLookFeel1.module.css";

const CompareLookFeel1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconMaterialAddCircleOutliClick = useCallback(() => {
    navigate("/marketplace-look-feel-2");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/marketplace-look-feel-2");
  }, [navigate]);

  return (
    <div className={styles.compareLookFeel1}>
      <div className={styles.compare}>Compare</div>
      <div className={styles.bg} />
      <div className={styles.component21216}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalChild} />
          <div className={styles.subscribe}>Subscribe</div>
        </div>
      </div>
      <div className={styles.privateEquity}>Private Equity</div>
      <b className={styles.consumerGoodsRetailEnhancem}>
        Consumer Goods Retail Enhancement Fund
      </b>
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore.
      </div>
      <div className={styles.targetReturn}>TARGET RETURN</div>
      <b className={styles.b}>15% - 20%</b>
      <div className={styles.minimum}>MINIMUM</div>
      <b className={styles.b1}>$100,000</b>
      <div className={styles.liquidity}>LIQUIDITY</div>
      <b className={styles.quarterly}>Quarterly</b>
      <img
        className={styles.favoriteButtonIcon}
        alt=""
        src="/favorite-button.svg"
      />
      <img className={styles.addToCompare} alt="" src="/add-to-compare1.svg" />
      <div className={styles.component21217}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalItem} />
          <div className={styles.viewDetail}>View Detail</div>
        </div>
      </div>
      <div className={styles.bg1} />
      <div className={styles.component21218}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalChild} />
          <div className={styles.subscribe}>Subscribe</div>
        </div>
      </div>
      <div className={styles.privateEquity1}>Private Equity</div>
      <b className={styles.consumerGoodsRetailEnhancem1}>
        Consumer Goods Retail Enhancement Fund
      </b>
      <div className={styles.loremIpsumDolor1}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore.
      </div>
      <div className={styles.targetReturn1}>TARGET RETURN</div>
      <b className={styles.b2}>15% - 20%</b>
      <div className={styles.minimum1}>MINIMUM</div>
      <b className={styles.b3}>$100,000</b>
      <div className={styles.liquidity1}>LIQUIDITY</div>
      <b className={styles.quarterly1}>Quarterly</b>
      <img
        className={styles.favoriteButtonIcon1}
        alt=""
        src="/favorite-button.svg"
      />
      <img className={styles.addToCompare1} alt="" src="/add-to-compare1.svg" />
      <div className={styles.component21219}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalItem} />
          <div className={styles.viewDetail}>View Detail</div>
        </div>
      </div>
      <img className={styles.maskGroup23} alt="" src="/mask-group-23@2x1.png" />
      <div className={styles.image} />
      <div className={styles.label}>
        <b className={styles.labelcontent}>New</b>
      </div>
      <img className={styles.maskGroup24} alt="" src="/mask-group-24@2x.png" />
      <div className={styles.image1} />
      <div className={styles.label1}>
        <b className={styles.labelcontent}>New</b>
      </div>
      <div className={styles.bg2} />
      <div className={styles.component21220}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalChild} />
          <div className={styles.subscribe2}>Subscribe</div>
        </div>
      </div>
      <div className={styles.component21221}>
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormalItem} />
          <div className={styles.viewDetail}>View Detail</div>
        </div>
      </div>
      <div className={styles.privateEquity2}>Private Equity</div>
      <b className={styles.consumerGoodsRetailEnhancem2}>
        Consumer Goods Retail Enhancement Fund
      </b>
      <div className={styles.loremIpsumDolor2}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore.
      </div>
      <div className={styles.targetReturn2}>TARGET RETURN</div>
      <b className={styles.b4}>15% - 20%</b>
      <div className={styles.minimum2}>MINIMUM</div>
      <b className={styles.b5}>$100,000</b>
      <div className={styles.liquidity2}>LIQUIDITY</div>
      <b className={styles.quarterly2}>Quarterly</b>
      <img
        className={styles.favoriteButtonIcon2}
        alt=""
        src="/favorite-button.svg"
      />
      <img className={styles.addToCompare2} alt="" src="/add-to-compare1.svg" />
      <img className={styles.maskGroup36} alt="" src="/mask-group-36@2x.png" />
      <div className={styles.image2} />
      <div className={styles.label2}>
        <b className={styles.labelcontent2}>NOW OPEN</b>
      </div>
      <img className={styles.maskGroup37} alt="" src="/mask-group-37@2x.png" />
      <img className={styles.maskGroup38} alt="" src="/mask-group-38@2x.png" />
      <img className={styles.maskGroup39} alt="" src="/mask-group-38@2x.png" />
      <div className={styles.addToCompare3}>
        <div className={styles.bg3} />
        <img
          className={styles.iconMaterialAddCircleOutli}
          alt=""
          src="/icon-materialaddcircleoutline.svg"
          onClick={onIconMaterialAddCircleOutliClick}
        />
        <div className={styles.bg4} />
      </div>
      <div className={styles.equityParent}>
        <div className={styles.equity}>Equity</div>
        <div className={styles.fundMetrics}>Fund Metrics</div>
        <div className={styles.portfolioByAsset}>Portfolio By Asset Type</div>
        <div className={styles.vintage}>
          Vinta<span className={styles.g}>g</span>e
        </div>
        <div className={styles.div}>2023</div>
        <div className={styles.fundSize}>
          <span className={styles.f}>F</span>und Si
          <span className={styles.z}>z</span>e
        </div>
        <div className={styles.m}>$345M</div>
        <div className={styles.capitalCalled}>
          <span className={styles.c}>C</span>
          {`apital `}
          <span className={styles.c}>C</span>alled
        </div>
        <div className={styles.andFullyDeployedContainer}>
          100% and fully depl<span className={styles.o}>o</span>
          <span className={styles.y}>y</span>ed
        </div>
        <div className={styles.numberOfInvestmentsContainer}>
          Number of I<span className={styles.z}>n</span>
          <span className={styles.y}>v</span>estments
        </div>
        <div className={styles.div1}>30</div>
        <div className={styles.div2}>
          <span className={styles.y}>7</span>0%
        </div>
        <div className={styles.credit}>
          C<span className={styles.z}>r</span>edit
        </div>
        <div className={styles.div3}>30%</div>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.lineDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
      </div>
      <div className={styles.equityGroup}>
        <div className={styles.equity}>Equity</div>
        <div className={styles.fundMetrics}>Fund Metrics</div>
        <div className={styles.portfolioByAsset}>Portfolio By Asset Type</div>
        <div className={styles.vintage}>
          Vinta<span className={styles.g}>g</span>e
        </div>
        <div className={styles.div}>2023</div>
        <div className={styles.fundSize}>
          <span className={styles.f}>F</span>und Si
          <span className={styles.z}>z</span>e
        </div>
        <div className={styles.m}>$345M</div>
        <div className={styles.capitalCalled}>
          <span className={styles.c}>C</span>
          {`apital `}
          <span className={styles.c}>C</span>alled
        </div>
        <div className={styles.andFullyDeployedContainer}>
          100% and fully depl<span className={styles.o}>o</span>
          <span className={styles.y}>y</span>ed
        </div>
        <div className={styles.numberOfInvestmentsContainer}>
          Number of I<span className={styles.z}>n</span>
          <span className={styles.y}>v</span>estments
        </div>
        <div className={styles.div1}>30</div>
        <div className={styles.div2}>
          <span className={styles.y}>7</span>0%
        </div>
        <div className={styles.credit}>
          C<span className={styles.z}>r</span>edit
        </div>
        <div className={styles.div3}>30%</div>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.lineDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
      </div>
      <div className={styles.equityContainer}>
        <div className={styles.equity}>Equity</div>
        <div className={styles.fundMetrics}>Fund Metrics</div>
        <div className={styles.portfolioByAsset}>Portfolio By Asset Type</div>
        <div className={styles.vintage}>
          Vinta<span className={styles.g}>g</span>e
        </div>
        <div className={styles.div}>2023</div>
        <div className={styles.fundSize}>
          <span className={styles.f}>F</span>und Si
          <span className={styles.z}>z</span>e
        </div>
        <div className={styles.m}>$345M</div>
        <div className={styles.capitalCalled}>
          <span className={styles.c}>C</span>
          {`apital `}
          <span className={styles.c}>C</span>alled
        </div>
        <div className={styles.andFullyDeployedContainer}>
          100% and fully depl<span className={styles.o}>o</span>
          <span className={styles.y}>y</span>ed
        </div>
        <div className={styles.numberOfInvestmentsContainer}>
          Number of I<span className={styles.z}>n</span>
          <span className={styles.y}>v</span>estments
        </div>
        <div className={styles.div1}>30</div>
        <div className={styles.div2}>
          <span className={styles.y}>7</span>0%
        </div>
        <div className={styles.credit}>
          C<span className={styles.z}>r</span>edit
        </div>
        <div className={styles.div3}>30%</div>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <div className={styles.lineDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.groupChild2} />
      </div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src="/group-330.svg" />
          <div className={styles.buttonNormal}>
            <div className={styles.buttonNormal}>
              <div className={styles.alternativeInvestmentPlatforContainer}>
                Al<span className={styles.t}>t</span>ernati
                <span className={styles.z}>v</span>e
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
        <div className={styles.buttonNormal}>
          <div className={styles.buttonNormal}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavButtonChild} />
              <div className={styles.buttonNormal} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.buttonNormal} />
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
              <div className={styles.div12}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.buttonNormal}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.buttonNormal}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.buttonNormal}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.buttonNormal} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.buttonNormal} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div
              className={styles.leftNavButton7}
              onClick={onLeftNavButton7Click}
            >
              <div className={styles.buttonNormal} />
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
                className={styles.chevronRightFill0Wght400GrIcon}
                alt=""
                src="/chevron-right-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.component2097}
        alt=""
        src="/component-209--3.svg"
      />
    </div>
  );
};

export default CompareLookFeel1;
