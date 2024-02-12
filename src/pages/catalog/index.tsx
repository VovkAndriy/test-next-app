import PageContainer from "@/components/PageContainer/PageContainer";
import React from "react";
import catalog from "@/mock/catalog.json";
import CatalogPage from "@/components/CatalogPage/CatalogPage";

const Catalog = () => {
  return (
    <PageContainer>
      <CatalogPage props={catalog} />
    </PageContainer>
  );
};

export default Catalog;
