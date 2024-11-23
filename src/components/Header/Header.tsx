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
  hasBackButton?: boolean;
}

const Header = ({ hasBackButton = false }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(routePath.HOME);
  };

  const handleBackClick = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(routePath.HOME);
    }
  };

  return (
    <>
      <header css={headerLayout}>
        <section css={headerLeftSectionWrapper}>
          {hasBackButton && (
            <IcBack css={headerLeftIconStyle} onClick={handleBackClick} />
          )}
        </section>

        <section css={headerCenterSectionWrapper}>
          <IcLogo css={headerLogoStyle} onClick={handleLogoClick} />
        </section>

        <section css={headerRightSectionWrapper}>
          <IcCart css={headerRightIconStyle} />
          <IcMenu css={headerRightIconStyle} />
        </section>
      </header>
    </>
  );
};

export default Header;
