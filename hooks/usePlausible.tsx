"use client"

import { useEffect, useRef } from "react";
import plausible from "plausible-tracker";
import { usePathname, useSearchParams } from "next/navigation";

const DOMAIN = "ialmanza.com";

let plausibleInstance: ReturnType<typeof plausible> | null = null;

export function usePlausible() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPath = useRef<string | null>(null);

  // Initialize plausible only once
  if (typeof window !== "undefined" && !plausibleInstance) {
    plausibleInstance = plausible({ domain: DOMAIN });
    plausibleInstance.enableAutoPageviews(); // fallback for static sites
  }

  useEffect(() => {
    if (!plausibleInstance) return;
    const currentPath = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    if (prevPath.current !== currentPath) {
      plausibleInstance.trackPageview();
      prevPath.current = currentPath;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return plausibleInstance;
}

export { plausibleInstance as plausible }; 