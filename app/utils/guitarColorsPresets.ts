export const guitarColorsPallettes = {
  primary: {
    LightSaturatedBlue: "#24FFF0",
    Purple: "#6D24FF",
    Blue: "#1280CF",
    Orange: "#CF7112",
    White: "#D9D9D9",
    Black: "#000000",
    DarkRed: "#991543",
  },
  pastel: {
    LightPurple: "#996EF5",
    MutedPink: "#B937A1",
    LightOrange: "#FFB578",
    LightGreen: "#CDF892",
    MutedBrown: "#765438",
    DarkGray: "#777777",
  },
}

export function guitarColorsPresets() {
  return [
    // Primary_Pastel (same colors)
    {
      name: "Purple_LightPurple",
      deck: guitarColorsPallettes.primary.Purple,
      accent: guitarColorsPallettes.pastel.LightPurple,
    },
    {
      name: "DarkRed_MutedPink",
      deck: guitarColorsPallettes.primary.DarkRed,
      accent: guitarColorsPallettes.pastel.MutedPink,
    },
    {
      name: "Orange_LightOrange",
      deck: guitarColorsPallettes.primary.Orange,
      accent: guitarColorsPallettes.pastel.LightOrange,
    },
    {
      name: "Black_DarkGray",
      deck: guitarColorsPallettes.primary.Black,
      accent: guitarColorsPallettes.pastel.DarkGray,
    },

    // Pastel_Primary (same colors)
    {
      name: "LightPurple_Purple",
      deck: guitarColorsPallettes.pastel.LightPurple,
      accent: guitarColorsPallettes.primary.Purple,
    },
    {
      name: "MutedPink_DarkRed",
      deck: guitarColorsPallettes.pastel.MutedPink,
      accent: guitarColorsPallettes.primary.DarkRed,
    },
    {
      name: "LightOrange_Orange",
      deck: guitarColorsPallettes.pastel.LightOrange,
      accent: guitarColorsPallettes.primary.Orange,
    },

    // Primary_Pastel (combinations)
    {
      name: "Salat",
      deck: guitarColorsPallettes.primary.LightSaturatedBlue,
      accent: guitarColorsPallettes.pastel.LightGreen,
    },
    {
      name: "Blue_LightOrange",
      deck: guitarColorsPallettes.primary.Blue,
      accent: guitarColorsPallettes.pastel.LightOrange,
    },
    {
      name: "Orange_LightPurple",
      deck: guitarColorsPallettes.primary.Orange,
      accent: guitarColorsPallettes.pastel.LightPurple,
    },
    {
      name: "Rose",
      deck: guitarColorsPallettes.primary.DarkRed,
      accent: guitarColorsPallettes.pastel.LightGreen,
    },

    // Pastel primary inverted combinations
    {
      name: "LightGreen_LightSaturatedBlue",
      deck: guitarColorsPallettes.pastel.LightGreen,
      accent: guitarColorsPallettes.primary.LightSaturatedBlue,
    },
    {
      name: "LightPurple_Orange",
      deck: guitarColorsPallettes.pastel.LightPurple,
      accent: guitarColorsPallettes.primary.Orange,
    },

    // Black_White
    {
      name: "Black_White",
      deck: guitarColorsPallettes.primary.Black,
      accent: guitarColorsPallettes.primary.White,
    },
    {
      name: "White_Black",
      deck: guitarColorsPallettes.primary.White,
      accent: guitarColorsPallettes.primary.Black,
    },

    // Black_Primary
    {
      name: "Black_DarkRed",
      deck: guitarColorsPallettes.primary.Black,
      accent: guitarColorsPallettes.primary.DarkRed,
    },
    {
      name: "Black_Orange",
      deck: guitarColorsPallettes.primary.Black,
      accent: guitarColorsPallettes.primary.Orange,
    },
    {
      name: "Black_Purple",
      deck: guitarColorsPallettes.primary.Black,
      accent: guitarColorsPallettes.primary.Purple,
    },

    // Primary_Black
    {
      name: "Blue_Black",
      deck: guitarColorsPallettes.primary.Blue,
      accent: guitarColorsPallettes.primary.Black,
    },
    {
      name: "DarkRed_Black",
      deck: guitarColorsPallettes.primary.DarkRed,
      accent: guitarColorsPallettes.primary.Black,
    },

    // // White_Primary
    {
      name: "White_Purple",
      deck: guitarColorsPallettes.primary.White,
      accent: guitarColorsPallettes.primary.Purple,
    },
    {
      name: "White_DarkRed",
      deck: guitarColorsPallettes.primary.White,
      accent: guitarColorsPallettes.primary.DarkRed,
    },
    {
      name: "White_Orange",
      deck: guitarColorsPallettes.primary.White,
      accent: guitarColorsPallettes.primary.Orange,
    },

    // White_Pastel
    {
      name: "White_LightPurple",
      deck: guitarColorsPallettes.primary.White,
      accent: guitarColorsPallettes.pastel.LightPurple,
    },
    {
      name: "White_MutedPink",
      deck: guitarColorsPallettes.primary.White,
      accent: guitarColorsPallettes.pastel.MutedPink,
    },
    {
      name: "White_LightOrange",
      deck: guitarColorsPallettes.primary.White,
      accent: guitarColorsPallettes.pastel.LightOrange,
    },

    // Primary_white
    {
      name: "Purple_White",
      deck: guitarColorsPallettes.primary.Purple,
      accent: guitarColorsPallettes.primary.White,
    },
    {
      name: "DarkRed_White",
      deck: guitarColorsPallettes.primary.DarkRed,
      accent: guitarColorsPallettes.primary.White,
    },

    // Pastel_white
    {
      name: "LightGreen_White",
      deck: guitarColorsPallettes.pastel.LightGreen,
      accent: guitarColorsPallettes.primary.White,
    },

    // Vintage
    {
      name: "Vintage",
      deck: guitarColorsPallettes.pastel.MutedBrown,
      accent: guitarColorsPallettes.pastel.LightOrange,
    },
  ]
}
