```javascript
import { DefaultSeo } from 'next-seo';

const SEO = {
  title: 'AInext Insights Blog Platform',
  description: 'A platform for sharing and discussing AI insights.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.ainext.com/',
    title: 'AInext Insights Blog Platform',
    description: 'A platform for sharing and discussing AI insights.',
    image: 'https://www.ainext.com/static/images/og-image.jpg',
    site_name: 'AInext Insights Blog Platform',
  },
  twitter: {
    handle: '@ainext',
    site: '@ainext',
    cardType: 'summary_large_image',
  },
};

const SeoConfigurations = () => (
  <DefaultSeo {...SEO} />
);

export default SeoConfigurations;
```