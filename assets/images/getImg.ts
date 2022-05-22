const basePath = `https://cdn.lwmc.net/`;
const imageStore = {
  ...require('./teamNumbers')
}

export function getImage(flag: string) {
  if (!imageStore[flag]) {
    console.error('not found image:', flag);
    return basePath;
  } else {
    return imageStore[flag];
  }
}
