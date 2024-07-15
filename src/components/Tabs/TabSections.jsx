import Tabs from "./Tabs";
import { categoryPromise } from "@/utils/fetchData";

const TabSections = async () => {
  const [data] = await Promise.all([categoryPromise]);
  return <Tabs tabs={data} />;
};

export default TabSections;
