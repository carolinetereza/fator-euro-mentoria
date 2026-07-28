import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página não encontrada (404) | FATOR EURO</title>
        <meta name="description" content="A página que você procura não existe. Volte para a página inicial da FATOR EURO." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://fator-euro-mentor-45589-76762-85652-896-47667.lovable.app/" />
        <meta property="og:title" content="Página não encontrada (404) | FATOR EURO" />
        <meta property="og:description" content="A página que você procura não existe." />
        <meta property="og:url" content={`https://fator-euro-mentor-45589-76762-85652-896-47667.lovable.app${location.pathname}`} />
        <meta name="twitter:title" content="Página não encontrada (404) | FATOR EURO" />
        <meta name="twitter:description" content="A página que você procura não existe." />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
          <a href="/" className="text-blue-500 underline hover:text-blue-700">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
