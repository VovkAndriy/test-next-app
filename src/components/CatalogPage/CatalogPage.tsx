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
      <div className="flex-col text-light font-light w-full 2xl:w-[80%] rounded-xl bg-black/50 justify-center p-2 md:p-6">
        <div className="text-2xl md:text-4xl font-light text-center pt-4">
          {title}
        </div>
        <div className="text-xl text-center pt-2">{subTitle}</div>
        <div className="flex w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-stretch xl:grig-cols-4 place-items-stretch gap-2 xl:gap-6 pt-14">
          {cars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default CatalogPage;
