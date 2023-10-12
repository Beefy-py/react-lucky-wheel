import { ThemeEnum } from "../enums/theme.enum";

export const getWheelTheme = {
  pin: (theme: ThemeEnum) => {
    switch (theme) {
      case "heineken1.0":
        return "#F8B214";

      default:
        return "black";
    }
  },

  core: (theme: ThemeEnum) => {
    switch (theme) {
      case "heineken1.0":
        return "white";

      default:
        return "black";
    }
  },

  background: (theme: ThemeEnum) => {
    switch (theme) {
      case "heineken1.0":
        return "#001E38";

      default:
        return "white";
    }
  },

  boxShadowColor1: (theme: ThemeEnum) => {
    switch (theme) {
      case "heineken1.0":
        return "#001E38";

      default:
        return "white";
    }
  },

  boxShadowColor2: (theme: ThemeEnum) => {
    switch (theme) {
      case "heineken1.0":
        return "#001E38";

      default:
        return "white";
    }
  },

  boxShadowColor3: (theme: ThemeEnum) => {
    switch (theme) {
      case "heineken1.0":
        return "white";

      default:
        return "white";
    }
  },

  segmentBgColor1: (theme: ThemeEnum) => {
    switch (theme) {
      case "heineken1.0":
        return "#E3000F";

      default:
        return "white";
    }
  },

  segmentBgColor2: (theme: ThemeEnum) => {
    switch (theme) {
      case "heineken1.0":
        return "#FAFAFA";

      default:
        return "black";
    }
  },

  segmentTextColor1: (theme: ThemeEnum) => {
    switch (theme) {
      case "heineken1.0":
        return "#FAFAFA";

      default:
        return "white";
    }
  },

  segmentTextColor2: (theme: ThemeEnum) => {
    switch (theme) {
      case "heineken1.0":
        return "#171717";

      default:
        return "white";
    }
  },
};

export const getButtonTheme = {
  spin: {
    background: (theme: ThemeEnum) => {
      switch (theme) {
        case "heineken1.0":
          return "#001E38";

        default:
          return "white";
      }
    },

    borderColor: (theme: ThemeEnum) => {
      switch (theme) {
        case "heineken1.0":
          return "#001E38";

        default:
          return "white";
      }
    },

    textColor: (theme: ThemeEnum) => {
      switch (theme) {
        case "heineken1.0":
          return "#FAFAFA";

        default:
          return "white";
      }
    },
  },
  reset: {
    background: (theme: ThemeEnum) => {
      switch (theme) {
        case "heineken1.0":
          return "#FAFAFA";

        default:
          return "white";
      }
    },

    borderColor: (theme: ThemeEnum) => {
      switch (theme) {
        case "heineken1.0":
          return "#001E38";

        default:
          return "black";
      }
    },

    textColor: (theme: ThemeEnum) => {
      switch (theme) {
        case "heineken1.0":
          return "#001E38";

        default:
          return "black";
      }
    },
  },
};
