import { site } from '~/data/site'

export const usePageSeo = (title: string, description: string, image = '/img/chateau/hero.jpg') => {
  const absoluteImage = image.startsWith('http') ? image : `${site.baseUrl}${image}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogImage: absoluteImage,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: absoluteImage
  })
}
