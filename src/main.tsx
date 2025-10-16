import { createRoot } from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { StrictMode } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./screens/Home.tsx";
import { ScrollProvider } from "./contexts/ScrollContext.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";

import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";

const lang = localStorage.getItem("lang") || "en";

i18n.init({
  interpolation: { escapeValue: false },
  lng: lang,
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ScrollProvider>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </ScrollProvider>
    </I18nextProvider>
  </StrictMode>
);
