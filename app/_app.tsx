import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  return (
    <div>
      <AnimatePresence initial={false} mode="popLayout">
        <div className="flex flex-col min-h-screen">{pageKey}</div>
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
