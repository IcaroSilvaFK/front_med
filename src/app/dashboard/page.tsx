import { Sidebar } from "@/components/templates";

import styles from "../../styles/pages/dashboard.module.scss";

export default function Page() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <div></div>
    </main>
  );
}
