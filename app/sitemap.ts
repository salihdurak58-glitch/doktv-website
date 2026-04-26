export default function sitemap() {
  const baseUrl = "https://www.doktv.de";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/apotheken`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/arztpraxen`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/hersteller`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/standorte`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/preise`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/apotheke-werbung-berlin`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/arztpraxis-werbung-berlin`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/digital-signage-apotheke`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/werbung-apotheke-display`,
      lastModified: new Date(),
    },
  ];
}