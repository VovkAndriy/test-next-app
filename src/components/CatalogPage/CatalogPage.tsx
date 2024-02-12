import { CatalogPageProps } from "@/interfaces";
import CarCard from "./CarCard";
import PageContainer from "../PageContainer/PageContainer";

type TContact = {
  props: CatalogPageProps;
};

const CatalogPage: React.FC<TContact> = ({ props }) => {
  const { title, subTitle, cars } = props;
  return (
    <PageContainer>
      <div className="flex-column w-[75%] rounded-xl bg-black/50 justify-center p-2 md:p-6">
        <div className="text-2xl md:text-5xl font-light text-center text-light pt-4">
          {title}
        </div>
        <div className="text-xl  text-center text-light pt-2">{subTitle}</div>
        <div className="flex w-full justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grig-cols-4  gap-6 pt-14">
          {cars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default CatalogPage;
