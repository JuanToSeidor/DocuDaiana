import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import type {Props} from '@theme/DocItem/Layout';

import { Brand, CaralIcon  } from 'iconcaral2';
import styles from './styles.module.css';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({children}: Props): ReactNode {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();
  console.log(metadata);
  const IconHead = metadata.frontMatter?.iconName;
  const branicon = metadata.frontMatter?.useBrand;
  console.log(IconHead);

  if (metadata.title === 'Release Notes') {
    return (
      <div >
        <style>
          {`
            :root {
              --doc-sidebar-width: 0px;
              --doc-sidebar-hidden-width: 0 !important;
            }
            .docItemCol {
              max-width: 100% !important;
            }
          `}
        </style>
        {children}    
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
          <ContentVisibility metadata={metadata} />
          <DocVersionBanner />
          <div className={styles.docItemContainer}>
            <article>
              <DocBreadcrumbs />
              <DocVersionBadge />
              {docTOC.mobile}
              <div className='label_title'>
                {branicon ? (
                  <Brand name={IconHead} size={50}/>  
                ) : (
                  <CaralIcon name={IconHead} size={50}/>
                )}
                <h1 className={clsx('hero__title', styles.docItemTitle)}>
                  {metadata.title}
                </h1>
              </div>
              <DocItemContent>{children}</DocItemContent>
              <DocItemFooter />
            </article>
            <DocItemPaginator />
          </div>
        </div>
        {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
      </div>
    );
  }
}


