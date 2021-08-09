const baseStyle = {
  borderRadius: "sm",
};

const variants = {
  solid: (props) => {
    const { colorScheme: c } = props;
    return {
      shadow: "md",
      // bg: `${c}.200`,
    };
  },
};

export default {
  baseStyle,
  variants,
};
