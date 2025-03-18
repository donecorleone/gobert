import blockContent from "./blockContent";
import post from "./post";
import page from "./page";
import { eventType } from "./eventType";
import { artistType } from "./artistType";
import { heroType } from "./heroType";
import { headerType } from "./headerType";
import { categoryType } from "./categoryType";
import { serviceType } from "./serviceType";
import { infoType } from "./infoType";
import { footerType } from "./footerType";
import { sliderType } from "./sliderType";
import { galerieType } from "./galerieType";

export const schemaTypes = [
  post,
  page,
  headerType,
  heroType,
  infoType,
  categoryType,
  serviceType,
  galerieType,
  sliderType,
  footerType,
  blockContent,
  eventType,
  artistType,
];
