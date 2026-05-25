import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import { pathToRoot } from "../util/path";
import { i18n } from "../i18n";

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {  
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title  
  const titleImage = cfg?.titleImage ?? null  
  const baseDir = pathToRoot(fileData.slug!)  
  
  if (titleImage?.length) {  
    return (  
        <a href={baseDir}><img src={titleImage} width="auto" height="auto"  
                               alt={title} /></a>  
    )  
  } else {  
    return (  
      <h1 class={classNames(displayClass, "page-title")}>  
        <a href={baseDir}>{title}</a>  
      </h1>  
    )  
  }  
}
`;

export default (() => PageTitle) satisfies QuartzComponentConstructor;
