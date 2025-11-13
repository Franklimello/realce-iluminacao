const siteUrl = "https://realceiluminacaocenica.com.br";

const routes = ["", "locacao", "fotos", "contato"];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((path) => {
    const url = path ? `${siteUrl}/${path}` : siteUrl;

    return {
      url,
      lastModified,
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8,
    };
  });
}

