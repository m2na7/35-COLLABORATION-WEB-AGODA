import { IcBack, IcCart, IcLogo, IcMenu } from "@assets/svg";
import {
  headerCenterSectionWrapper,
  headerLayout,
  headerLeftIconStyle,
  headerLeftSectionWrapper,
  headerLogoStyle,
  headerRightIconStyle,
  headerRightSectionWrapper,
} from "@components/Header/Header.style";
import routePath from "@routes/routePath";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isPrevButton?: boolean;
}

const Header = ({ isPrevButton = false }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div css={headerLayout}>
        {isPrevButton ? (
          <section css={headerLeftSectionWrapper}>
            <IcBack css={headerLeftIconStyle} />
          </section>
        ) : (
          <div></div>
        )}

        <section
          css={headerCenterSectionWrapper}
          onClick={() => navigate(routePath.HOME)}
        >
          <IcLogo css={headerLogoStyle} />
        </section>

        <section css={headerRightSectionWrapper}>
          <IcCart css={headerRightIconStyle} />
          <IcMenu css={headerRightIconStyle} />
        </section>
      </div>
    </>
  );
};

export default Header;
