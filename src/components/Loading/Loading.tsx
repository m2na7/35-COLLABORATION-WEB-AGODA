import { loadingLayout } from "@components/Loading/Loading.style";
import theme from "@styles/theme";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div css={loadingLayout}>
      <BeatLoader color={`${theme.color.agoda_blue}`} />
    </div>
  );
};

export default Loading;
