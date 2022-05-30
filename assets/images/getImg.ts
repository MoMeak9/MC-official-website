const imageStore = {
  ...require("./teamNumbers"),
  ...require("./term"),
  ...require("./banner"),
};

export function getImage(flag: string) {
  if (!imageStore[flag]) {
    console.error("not found image:", flag);
    return "";
  } else {
    return imageStore[flag];
  }
}
