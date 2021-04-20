const baseStyle = {
  borderRadius: "sm",
};

const variants = {
  solid: (props) => {
    console.log(props);
    return {
      shadow: "md",
    };
  },
};

export default {
  baseStyle,
  variants,
};
