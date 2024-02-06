import { Sidebar } from "@/components/templates";

import styles from "../../styles/pages/dashboard.module.scss";
import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
